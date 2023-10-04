import { Link, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ClientFilter from "../../assets/icons/clientIcons/clientFilter.svg";
import ClientIcon from "../../assets/icons/clients.svg";
import SearchIcon from "../../assets/icons/search.svg";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import useGlobal from "../../hooks/useGlobal";
import AddCustomer from "./components/AddCustomerModal";
import CustomerTable from "./components/CustomerTable";
import AlertPopup from "../../components/AlertPopup";
import "./style.css";

function Customer() {
  const { showAlert, setShowAlert } = useGlobal();
  const [openAdd, setOpenAdd] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

  const customerBreadcrubs = [
    <Link
      key="1"
      color="#0e8750"
      fontWeight="400"
      href="/customer"
      sx={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--subtitle)",
      }}
    >
      Clientes
    </Link>,
  ];

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
          <Header headerTitle="" breadcrumbs={customerBreadcrubs} />

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
            {showAlert && <AlertPopup showAlert={showAlert} setShowAlert={setShowAlert} />}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Customer;
