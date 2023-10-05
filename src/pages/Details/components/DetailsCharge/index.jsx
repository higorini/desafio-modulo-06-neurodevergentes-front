import { Box, Stack, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format } from "date-fns";
import { useState } from "react";
import ChargeDelete from "../../../../assets/icons/chargeIcons/chargeDelete.svg";
import ChargeEdit from "../../../../assets/icons/chargeIcons/chargeEdit.svg";
import ChargeOrder from "../../../../assets/icons/chargeIcons/chargeOrder.svg";
import ChargeType from "../../../Charge/components/ChargeType";

function DetailsCharge({
  setOpenCharge,
  detailsCharge,
  setDataClient,
  setOpenDeleteChargeModal,
  setChargeStatus,
  setChargeId,
  setChargeData,
  setOpenEditChargeModal,
}) {
  const [orderChanger, setOrderChanger] = useState(false);

  const moneyMask = (value) => {
    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );

    return "R$ " + result;
  };

  function orderChargesByIdNumericalOrder(order) {
    const idOrdered = detailsCharge.sort((a, b) => {
      const identifierA = a.id;
      const identifierB = b.id;
      if (identifierA > identifierB) {
        return -1;
      }
      if (identifierA < identifierB) {
        return 1;
      }
      return 0;
    });
    if (order) {
      setOrderChanger(!orderChanger);
      return setDataClient((prevState) => ({
        ...prevState,
        charges: idOrdered,
      }));
    } else {
      const reverseArray = idOrdered.reverse();
      setOrderChanger(!orderChanger);
      return setDataClient((prevState) => ({
        ...prevState,
        charges: reverseArray,
      }));
    }
  }

  return (
    <TableContainer
      component={Box}
      backgroundColor="var(--white)"
      sx={{
        overflow: "hidden",
        padding: "8px 16px",
        borderRadius: "40px",
        maxWidth: "90%",
        marginLeft: "2rem",
        minHeight: "396px",
      }}
    >
      <Stack direction="row" padding="19px 16px" justifyContent="space-between">
        <Typography
          textAlign="center"
          component="p"
          color="var(--gray-700)"
          fontWeight="700"
          fontFamily="var(--font-title)"
          fontSize="var(--title-s)"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Cobranças do Cliente
        </Typography>
        <Box padding="0 18px" borderRadius="8px">
          <button
            className="details__charge-button"
            onClick={() => setOpenCharge(true)}
          >
            + Nova Cobrança
          </button>
        </Box>
      </Stack>
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
                cursor: "pointer",
              }}
              onClick={() => orderChargesByIdNumericalOrder(orderChanger)}
            >
              <img src={ChargeOrder} alt="Cobrança" />
              ID Cob.
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
            >
              Data de venc.
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
            >
              Valor
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
            >
              Status
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
            >
              Descrição
            </TableCell>
            <TableCell
              align="left"
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
            ></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {detailsCharge === "" ? (
            <Box>Loading...</Box>
          ) : (
            detailsCharge.map((charge) => (
              <TableRow
                key={charge.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  align="left"
                  sx={{
                    color: "var(--gray-600)",
                  }}
                >
                  {charge.id}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "var(--gray-600)",
                  }}
                >
                  {format(new Date(charge["charge_date"]), "dd/MM/yyyy")}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "var(--gray-600)",
                  }}
                >
                  {moneyMask(charge.value.toString())}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    color: "var(--gray-600)",
                  }}
                >
                  <ChargeType type={charge.status} />
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    maxWidth: "21.75rem",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    color: "var(--gray-600)",
                  }}
                >
                  {charge.description}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <img
                    onClick={(e) => {
                      e.stopPropagation();
                      setChargeData(charge);
                      setOpenEditChargeModal(true);
                    }}
                    src={ChargeEdit}
                    alt="Cobrança"
                  />
                  <img
                    onClick={(e) => {
                      e.stopPropagation();
                      setChargeData(charge)
                      setOpenDeleteChargeModal(true);
                    }}
                    src={ChargeDelete}
                    alt="Cobrança"
                  />
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DetailsCharge;
