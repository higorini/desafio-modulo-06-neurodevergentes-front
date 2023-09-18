import { Stack } from "@mui/material";
import chargesIcon from "../../assets/icons/charge.svg";
import clientsIcon from "../../assets/icons/clients.svg";
import homeIcon from "../../assets/icons/home.svg";
import IconMenu from "../IconMenu";
import "./style.css";

function LateralMenu() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="start"
      paddingTop="45px"
      gap="72px"
      position="fixed"
      sx={{
        width: 108,
        height: "100vh",
        backgroundColor: "var(--gray-200)",
      }}
    >
      <IconMenu icon={homeIcon} name="Home" />
      <IconMenu icon={clientsIcon} name="Clientes" />
      <IconMenu icon={chargesIcon} name="Cobranças" />
    </Stack>
  );
}

export default LateralMenu;
