import { Box, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ClientCharge from "../../../../assets/icons/clientIcons/clientCharge.svg";

function CustomerTable({ name, cpf, email, phone, status }) {
  return (

    <TableBody>
      <TableRow
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Typography>{name}</Typography>
        </TableCell>
        <TableCell
          align="left"
          sx={{
            color: "var(--gray-600)",
          }}
        >
          <Typography>{cpf}</Typography>
        </TableCell>
        <TableCell
          align="left"
          sx={{
            color: "var(--gray-600)",
          }}
        >
          <Typography>{email}</Typography>
        </TableCell>
        <TableCell
          align="left"
          sx={{
            color: "var(--gray-600)",
          }}
        >
          <Typography>{phone}</Typography>
        </TableCell>
        <TableCell
          align="left"
          sx={{
            color: "var(--gray-600)",
          }}
        >
          {status ? (
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
    </TableBody>

  );
}

export default CustomerTable;
