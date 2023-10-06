import { Box } from "@mui/material";
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
import EmptyContentOnSearch from "../../../../components/EmptyContentOnSearch";
import useGlobal from "../../../../hooks/useGlobal";
import ChargeType from "../ChargeType";

function ChargeTable({
  setOpenDeleteChargeModal,
  setChargeId,
  setChargeStatus,
  setChargeData,
  setOpenEditChargeModal,
  setOpenChargeDetails,
}) {
  const { selectedCharge, setSelectedCharge } = useGlobal();
  const [orderChanger, setOrderChanger] = useState(false);

  const moneyMask = (value) => {
    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );

    return "R$ " + result;
  };

  function handleClickCustomer(charge) {
    setChargeData(charge);
    setOpenChargeDetails(true);
  }

  function orderChargesByAlphabeticalOrder(order) {
    const nameOrdered = selectedCharge.sort((a, b) => {
      const nameA = a["costumer_name"];
      const nameB = b["costumer_name"];
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    });
    if (order) {
      setOrderChanger(!orderChanger);
      return setSelectedCharge(nameOrdered);
    } else {
      setOrderChanger(!orderChanger);
      return setSelectedCharge(nameOrdered.reverse());
    }
  }

  function orderChargesByIdNumericalOrder(order) {
    const idOrdered = selectedCharge.sort((a, b) => {
      const identifierA = a.id;
      const identifierB = b.id;
      if (identifierA > identifierB) {
        return 1;
      }
      if (identifierA < identifierB) {
        return -1;
      }
      return 0;
    });
    if (order) {
      setOrderChanger(!orderChanger);
      return setSelectedCharge(idOrdered);
    } else {
      setOrderChanger(!orderChanger);
      return setSelectedCharge(idOrdered.reverse());
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
        minHeight: "640px",
      }}
    >
      {selectedCharge.length === 0 ? (
        <EmptyContentOnSearch />
      ) : (
        <Table sx={{ minWidth: "100%" }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "var(--gray-700)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "700",
                  fontSize: "var(--subtitle)",
                  cursor: "pointer",
                }}
                onClick={() => orderChargesByAlphabeticalOrder(orderChanger)}
              >
                <img src={ChargeOrder} alt="Cobrança" />
                Cliente
              </TableCell>
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
            {selectedCharge.map((charge) => (
              <TableRow
                key={charge.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => handleClickCustomer(charge)}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{
                    maxWidth: "8.375rem",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                  }}
                >
                  {charge["costumer_name"]}
                </TableCell>
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
                    maxWidth: "6.375 ",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
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
                  {format(new Date(charge["charge_date"]), "dd/MM/yyyy")}
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
                    maxWidth: "16rem",
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
                    gap: "24px",
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
                      setOpenDeleteChargeModal(true);
                      setChargeStatus(charge.status);
                      setChargeId(charge.id);
                    }}
                    src={ChargeDelete}
                    alt="Cobrança"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}

export default ChargeTable;
