import { Stack } from "@mui/material";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import ChargeTable from "./components/ChargeTable";
import ClientIcon from "../../assets/icons/clients.svg";
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
              <img src={ClientIcon} alt="Icone Cliente" />
              <h1>Cobranças</h1>
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
