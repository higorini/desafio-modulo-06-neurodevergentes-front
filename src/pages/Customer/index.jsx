import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Stack } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import ClientFilter from "../../assets/icons/clientIcons/clientFilter.svg";
import ClientIcon from "../../assets/icons/clients.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import useGlobal from "../../hooks/useGlobal";
import AddCustomer from "./components/AddCustomerModal";
import CustomerTable from "./components/CustomerTable";
import "./style.css";

function Customer() {
  const { addClientSuccessAlert,
    setAddClientSuccessAlert,
    addChargeSuccessAlert,
    setAddChargeSuccessAlert } = useGlobal();
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    if (addClientSuccessAlert || addChargeSuccessAlert) {
      const timer = setTimeout(() => {
        setAddClientSuccessAlert(false);
        setAddChargeSuccessAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [addClientSuccessAlert, addChargeSuccessAlert]);

  return (
    <>
      <Stack width="100%" direction="row">
        <SideNavigation />
        {openAdd && <AddCustomer setOpenAdd={setOpenAdd} />}
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
            {addClientSuccessAlert && (
              <Alert
                iconMapping={{
                  success: (
                    <CheckCircleOutlineIcon color="info" fontSize="inherit" />
                  ),
                }}
                onClose={() => setAddClientSuccessAlert(false)}
                sx={{
                  position: "fixed",
                  bottom: "4.125rem",
                  right: "7rem",

                  width: "20.625rem",
                  height: "3.375rem",
                  paddingTop: "9px",

                  fontFamily: "var(--font-subtitle)",
                  color: "var(--blue-700)",

                  borderRadius: "10px",
                  backgroundColor: "var(--blue-300)",
                }}
              >
                Cadastro concluído com sucesso
              </Alert>
            )}
            {addChargeSuccessAlert && (
              <Alert
                iconMapping={{
                  success: (
                    <CheckCircleOutlineIcon color="info" fontSize="inherit" />
                  ),
                }}
                onClose={() => setAddChargeSuccessAlert(false)}
                sx={{
                  position: "fixed",
                  bottom: "4.125rem",
                  right: "7rem",

                  width: "20.625rem",
                  height: "3.375rem",
                  paddingTop: "9px",

                  fontFamily: "var(--font-subtitle)",
                  color: "var(--blue-700)",

                  borderRadius: "10px",
                  backgroundColor: "var(--blue-300)",
                }}
              >
                Cobrança cadastrada com sucesso
              </Alert>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Customer;
