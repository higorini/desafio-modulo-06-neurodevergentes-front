import { useState } from "react";
import { Stack } from "@mui/material";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import AddCustomer from "./components/AddCustomerModal";
import CustomerTable from "./components/CustomerTable";
import ClientIcon from "../../assets/icons/clients.svg";
import SearchIcon from "../../assets/icons/search.svg";
import ClientFilter from "../../assets/icons/clientIcons/clientFilter.svg";
import "./style.css";

function Customer() {
  const [openAdd, setOpenAdd] = useState(false);

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
          <Header userName="Lorena" headerTitle="Clientes" />

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
        </Stack>
      </Stack>
    </>
  );
}

export default Customer;
