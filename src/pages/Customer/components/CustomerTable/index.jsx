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
import EmptyContentOnSearch from "../../../../components/EmptyContentOnSearch";
import useGlobal from "../../../../hooks/useGlobal";

function CustomerTable() {
  const navigateTo = useNavigate();
  const [openCharge, setOpenCharge] = useState(false);
  const [selectedClientId, setSelectedClientId] = useState("");
  const [selectedClientName, setSelectedClientName] = useState("");
  const { selectedClient, setSelectedClient } = useGlobal();
  const [orderChanger, setOrderChanger] = useState(false);

  function handleClickCustomer(e) {
    navigateTo(`../customer/${e}`);
  }

  function orderClientsByAlphabeticalOrder(order) {
    const nameOrdered = selectedClient.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
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
      return setSelectedClient(nameOrdered);
    } else {
      setOrderChanger(!orderChanger);
      return setSelectedClient(nameOrdered.reverse());
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
      {openCharge && (
        <AddCharge
          setOpenCharge={setOpenCharge}
          selectedClientId={selectedClientId}
          selectedClientName={selectedClientName}
        />
      )}

      {selectedClient.length === 0 ? (
        <EmptyContentOnSearch />
      ) : (
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
                sx={{
                  padding: "32px",
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell component="td" scope="row">
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
                    padding: "9px 16px",
                    lineHeight: "0px",
                  }}
                >
                  <Box
                    id="btn"
                    component="img"
                    alt="Cobrança"
                    src={ClientCharge}
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenCharge(true);
                      setSelectedClientId(client.id);
                      setSelectedClientName(client.name);
                    }}
                    sx={{
                      cursor: "pointer",
                    }}
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

export default CustomerTable;
