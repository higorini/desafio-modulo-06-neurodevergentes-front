import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClientCharge from "../../../../assets/icons/clientIcons/clientCharge.svg";
import ClientOrder from "../../../../assets/icons/clientIcons/clientOrder.svg";
import AddCharge from "../../../../components/ChargeModal";
import useGlobal from "../../../../hooks/useGlobal";

function CustomerTable() {
  const navigateTo = useNavigate();
  const [openCharge, setOpenCharge] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const { clients, selectedClient, setSelectedClient } = useGlobal();
  const [orderChanger, setOrderChanger] = useState(false);

  function handleClickCustomer(e) {
    navigateTo(`../customer/${e}`);
  }

  function orderClientsByAlphabeticalOrder(order) {
    if (order) {
      const newOrderAsc = [];
      const selectNames = selectedClient.map(({ name }) => {
        return name;
      });

      const nameOrdered = selectNames.sort((a, b) => {
        return a.localeCompare(b);
      });

      for (let i = 0; i < selectedClient.length; i++) {
        const newClient = selectedClient.filter((client) => {
          return client.name === nameOrdered[i];
        });
        newOrderAsc.push(newClient[0]);
      }
      setSelectedClient(newOrderAsc);
    } else {
      const newOrderDesc = [];
      const selectNames = selectedClient.map(({ name }) => {
        return name;
      });

      const nameOrdered = selectNames.sort((a, b) => {
        return b.localeCompare(a);
      });

      for (let i = 0; i < selectedClient.length; i++) {
        const newClient = selectedClient.filter((client) => {
          return client.name === nameOrdered[i];
        });
        newOrderDesc.push(newClient[0]);
      }
      setSelectedClient(newOrderDesc);
    }
    console.log(selectedClient);
    setOrderChanger(!orderChanger);
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
        minHeight: "600px",
      }}
    >
      {openCharge && (
        <AddCharge
          setOpenCharge={setOpenCharge}
          selectedClientId={selectedClientId}
          selectedClientName={selectedClientName}
        />
      )}
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
                cursor: "pointer",
              }}
              onClick={() => orderClientsByAlphabeticalOrder(orderChanger)}
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
          {selectedClient.map((client) => (
            <TableRow
              onClick={() => handleClickCustomer(client.id)}
              key={client.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {client.name}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.cpf}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.email}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.phone}
              </TableCell>
              <TableCell
                align="left"
                sx={{
                  color: "var(--gray-600)",
                }}
              >
                {client.status === "Em dia" ? (
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
                <img
                  id="btn"
                  src={ClientCharge}
                  alt="Cobrança"
                  className="customar__table-charge"
                  onClick={(e) => {
                    e.stopPropagation();
                    setOpenCharge(true);
                    setSelectedClientId(client.id);
                    setSelectedClientName(client.name);
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomerTable;
