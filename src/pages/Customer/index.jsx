import { Stack } from "@mui/material";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import CustomerTable from "./components/CustomerTable";
import ClientIcon from "../../assets/icons/clients.svg";
import SearchIcon from "../../assets/icons/search.svg";
import "./style.css";

function Customer() {
  return (
    <>
      <Stack width="100%" maxWidth="1440px" direction="row">
        <SideNavigation />
        <Stack
          width="100%"
          sx={{
            padding: "40px 32px 40px 32px",
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
              <button className="customer__add-button">
                + Adicionar Cliente
              </button>
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
