import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { format } from "date-fns";
import ChargeDelete from "../../../../assets/icons/chargeIcons/chargeDelete.svg";
import ChargeEdit from "../../../../assets/icons/chargeIcons/chargeEdit.svg";
import ChargeOrder from "../../../../assets/icons/chargeIcons/chargeOrder.svg";
import useGlobal from "../../../../hooks/useGlobal";
import ChargeType from "../ChargeType";

function ChargeTable({ setOpenDeleteChargeModal, setChargeId, setChargeStatus, setChargeData, setOpenEditChargeModal }) {
  const { charges, selectedCharge } = useGlobal();
  const moneyMask = (value) => {
    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");
    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );

    return "R$ " + result;
  };

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
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
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
              }}
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
            >
              <TableCell component="th" scope="row"
                sx={{
                  maxWidth: "8.375rem",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                }}>
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
                  gap: "24px"
                }}
              >
                <img
                  onClick={(e) => {
                    e.stopPropagation()
                    setChargeData(charge)
                    setOpenEditChargeModal(true)
                  }}
                  src={ChargeEdit}
                  alt="Cobrança" />
                <img
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenDeleteChargeModal(true)
                    setChargeStatus(charge.status)
                    setChargeId(charge.id)
                  }}
                  src={ChargeDelete}
                  alt="Cobrança" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}

export default ChargeTable;
