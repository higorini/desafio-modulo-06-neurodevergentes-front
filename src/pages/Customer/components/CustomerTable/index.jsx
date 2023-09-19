import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import ClientOrder from "../../../../assets/icons/clientIcons/clientOrder.svg";
import ClientCharge from "../../../../assets/icons/clientIcons/clientCharge.svg";

function createData(client, cpf, email, number, status) {
  return { client, cpf, email, number, status };
}

const rows = [
  createData(
    "Sara da Silva",
    "054 365 255 87",
    "sarasilva@cubos.io",
    "71 9 9462 8654",
    false
  ),
  createData(
    "Camerom Williamson",
    "054 365 255 87",
    "cameronw@cubos.io",
    "71 9 9962 8658",
    false
  ),
  createData(
    "Savannah Nguyen",
    "054 365 255 87",
    "snguyen@cubos.io",
    "71 9 9762 8658",
    false
  ),
  createData(
    "Darlene Robertson",
    "054 365 255 87",
    "darlener@cubos.io",
    "71 9 9562 8653",
    false
  ),
  createData(
    "Marvin Mckinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8652",
    false
  ),
  createData(
    "Sandra dos Santos",
    "054 365 255 87",
    "sandrasantos@cubos.io",
    "71 9 9762 8652",
    false
  ),
  createData(
    "Marvin Mckinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8652",
    true
  ),
  createData(
    "Marvin Mckinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8652",
    true
  ),
  createData(
    "Marvin Mckinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8652",
    true
  ),
  createData(
    "Marvin Mckinney",
    "054 365 255 87",
    "marvinm@cubos.io",
    "71 9 9462 8652",
    true
  ),
];

function CustomerTable() {
  return (
    <TableContainer
      component={Box}
      backgroundColor="var(--white)"
      sx={{
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                color: "var(--gray-700)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                fontSize: "var(--subtitle)",
              }}
            >
              <img src={ClientOrder} alt="Cobrança" />
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
              CPF
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
              E-mail
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
              Telefone
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
              Criar Cobrança
            </TableCell>
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
                {row.cpf}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {row.email}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {row.number}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {row.status ? (
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
                      Em dia
                    </Typography>
                  </Box>
                ) : (
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
                      Inadimplente
                    </Typography>
                  </Box>
                )}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                <img src={ClientCharge} alt="Cobrança" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomerTable;
