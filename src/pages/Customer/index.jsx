import { Stack } from "@mui/material";
import Alert from '@mui/material/Alert';
import { useEffect, useState } from "react";
import ClientFilter from "../../assets/icons/clientIcons/clientFilter.svg";
import ClientIcon from "../../assets/icons/clients.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import AddCustomer from "./components/AddCustomerModal";
import CustomerTable from "./components/CustomerTable";
import "./style.css";

function Customer() {
  const [openAdd, setOpenAdd] = useState(false);
  const [showAlert, setShowAlert] = useState(false)

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
            <CustomerTable />
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
