import { Stack } from "@mui/material";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import ChargeTable from "./components/ChargeTable";
import ChargeIcon from "../../assets/icons/chargeIcons/chargeIcon.svg";
import ChargeSearch from "../../assets/icons/chargeIcons/chargeSearch.svg";
import ChargeFilter from "../../assets/icons/chargeIcons/chargeFilter.svg";
import "./style.css";

function Charge() {
  return (
    <>
      <Stack width="100%" direction="row">
        <SideNavigation />
        <Stack
          width="100%"
          sx={{
            padding: "40px 32px 40px",
            backgroundColor: "var(--gray-100)",
          }}
          marginLeft="108px"
        >
          <Header userName="Lorena" headerTitle="Clientes" />

          <div className="charge__header">
            <div className="charge__title">
              <img src={ChargeIcon} alt="Icone Cliente" />
              <h1>Cobranças</h1>
            </div>

            <div className="charge__filters">
              <img src={ChargeFilter} />

              <div className="charge__search">
                <input
                  type="text"
                  className="charge__search-box"
                  placeholder="Pesquisa"
                />
                <img src={ChargeSearch} id="searchBtn" alt="Pesquisa" />
              </div>
            </div>
          </div>

          <div className="charge__main">
            <ChargeTable />
          </div>
        </Stack>
      </Stack>
    </>
  );
}

export default Charge;
