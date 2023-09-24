import { Stack } from "@mui/material";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import DetailsClient from "./components/DetailsClient";
import DetailsCharge from "./components/DetailsCharge";
import ClientIcon from "../../assets/icons/clients.svg";
import "./style.css";

function Details() {
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

          <div className="details__header">
            <div className="details__title">
              <img src={ClientIcon} alt="Icone Cliente" />
              <h1>Sara Lage Silva</h1>
            </div>
          </div>

          <div className="details__main">
            <div>
              <DetailsClient />
            </div>
            <div>
              <DetailsCharge />
            </div>
          </div>
        </Stack>
      </Stack>
    </>
  );
}

export default Details;
