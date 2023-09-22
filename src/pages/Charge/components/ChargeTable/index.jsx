import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ChargeOrder from "../../../../assets/icons/chargeIcons/chargeOrder.svg";
import ChargeEdit from "../../../../assets/icons/chargeIcons/chargeEdit.svg";
import ChargeDelete from "../../../../assets/icons/chargeIcons/chargeDelete.svg";

function createData(client, id, value, date, description, status) {
  return { client, id, value, date, description, status };
}

function chargeType(type) {
  let content;

  if (type == 1) {
    content = (
      <Box
        borderRadius="8px"
        sx={{
          backgroundColor: "var(--seagreen-100)",
        }}
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--seagreen-700)"
          fontWeight="600"
          fontFamily="var(--font-body)"
          fontSize="var(--title-xs)"
        >
          Paga
        </Typography>
      </Box>
    );
  } else if (type == 2) {
    content = (
      <Box
        borderRadius="8px"
        sx={{
          backgroundColor: "var(--gold-100)",
        }}
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--gold-700)"
          fontWeight="600"
          fontFamily="var(--font-body)"
          fontSize="var(--title-xs)"
        >
          Pendente
        </Typography>
      </Box>
    );
  } else if (type == 3) {
    content = (
      <Box
        borderRadius="8px"
        sx={{
          backgroundColor: "var(--ruby-100)",
        }}
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--ruby-700)"
          fontWeight="600"
          fontFamily="var(--font-body)"
          fontSize="var(--title-xs)"
        >
          Vencida
        </Typography>
      </Box>
    );
  }

  return content;
}

const rows = [
  createData(
    "Sara da Silva",
    "248563147",
    "500,00",
    "26/01/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    3
  ),
  createData(
    "Carlos Prado",
    "148563148",
    "400,00",
    "26/01/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    3
  ),
  createData(
    "Lara Brito",
    "648563148",
    "300,00",
    "26/01/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    3
  ),
  createData(
    "Soraia Neves",
    "5348563145",
    "900,00",
    "26/01/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    3
  ),
  createData(
    "Sara da Silva",
    "458563145",
    "2000,00",
    "27/11/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    2
  ),
  createData(
    "Carlos Prado",
    "368563147",
    "700,00",
    "27/11/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    2
  ),
  createData(
    "Lara Brito",
    "488563147",
    "500,00",
    "27/11/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    2
  ),
  createData(
    "Darlene Robertson",
    "578563147",
    "300,00",
    "22/01/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    1
  ),
  createData(
    "Cameron Williamson",
    "598563147",
    "1000,00",
    "22/01/2021",
    "lorem ipsum  lorem ipsum lorem ... ",
    1
  ),
];

function ChargeTable() {
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
          {rows.map((row) => (
            <TableRow
              key={row.client}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.client}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {row.id}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                R$ {row.value}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {row.date}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {chargeType(row.status)}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {row.description}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <img src={ChargeEdit} alt="Cobrança" />
                <img src={ChargeDelete} alt="Cobrança" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ChargeTable;
