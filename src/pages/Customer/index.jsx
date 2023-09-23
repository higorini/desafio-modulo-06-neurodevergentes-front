import { Box, Stack } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useEffect, useState } from "react";
import ClientFilter from "../../assets/icons/clientIcons/clientFilter.svg";
import ClientIcon from "../../assets/icons/clients.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import { listCustumers } from "../../services";
import AddCustomer from "./components/AddCustomerModal";
import CustomerTable from "./components/CustomerTable";
import "./style.css";


import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import ClientOrder from "../../assets/icons/clientIcons/clientOrder.svg";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";


function Customer() {
  const [openAdd, setOpenAdd] = useState(false);
  const [showAlert, setShowAlert] = useState(false)
  const [custumers, setCustumers] = useState("")

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false)
      }, 5000)

      return () => {
        clearTimeout(timer)
      };
    }
  }, [showAlert]);

  useEffect(() => {
    async function custumers() {
      const response = await listCustumers()
      setCustumers(response)
    }

    custumers()
  }, [openAdd])

  return (
    <>
      <Stack width="100%" direction="row">
        <SideNavigation />
        {openAdd && <AddCustomer setOpenAdd={setOpenAdd} setShowAlert={setShowAlert} />}
        <Stack
          width="100%"
          sx={{
            padding: "40px 32px 40px",
            backgroundColor: "var(--gray-100)",
          }}
          marginLeft="108px"
        >
          <Header headerTitle="Clientes" />

          <div className="customer__header">
            <div className="customer__title">
              <img src={ClientIcon} alt="Icone Cliente" />
              <h1>Clientes</h1>
            </div>

            <div className="customer__add">
              <button className="customer__add-button" onClick={setOpenAdd}>
                + Adicionar Cliente
              </button>

              <img src={ClientFilter} />

              <div className="customer__search">
                <input
                  type="text"
                  className="customer__search-box"
                  placeholder="Pesquisa"
                />
                <img src={SearchIcon} id="searchBtn" alt="Pesquisa" />
              </div>
            </div>
          </div>

          <div className="customer__main">
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
                {custumers &&
                  custumers.map((custumer) => {
                    const { id, name, cpf, email, phone, status, ...rest } = custumer
                    return <CustomerTable
                      key={id}
                      name={name}
                      cpf={cpf}
                      email={email}
                      phone={phone}
                      status={status} />
                  })}
              </Table>
            </TableContainer>
          </div>


          <Stack position="relative">
            {showAlert && (
              <Alert
                onClose={() => setShowAlert(false)}
                sx={{
                  position: "fixed",
                  bottom: "4.125rem",
                  right: "7rem",

                  width: "20.625rem",
                  height: "3.375rem",

                  fontFamily: "var(--font-subtitle)",
                  color: "var(--blue-700)",

                  borderRadius: "10px",
                  backgroundColor: "var(--blue-300)",
                }}
              >
                Cadastro concluído com sucesso
              </Alert>
            )}
          </Stack>
        </Stack>
      </Stack >
    </>
  );
}

export default Customer;
