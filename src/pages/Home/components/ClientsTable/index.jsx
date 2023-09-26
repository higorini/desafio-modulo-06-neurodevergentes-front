import { Box } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function ClientsTable({ clientsContent }) {
  return (
    <TableContainer
      component={Box}
      sx={{
        overflow: "hidden",
        minHeight: "270px",
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
              Clientes
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
              Id do clie.
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
          </TableRow>
        </TableHead>
        <TableBody>
          {clientsContent.map((client) => (
            <TableRow
              key={client.id}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.name}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.id}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.cpf}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
