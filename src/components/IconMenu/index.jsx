import { Stack, Typography } from "@mui/material";
import "./style.css";

function IconMenu({ icon, name }) {
  return (
    <Stack
      alignItems="center"
      sx={{
        width: "100%",
        padding: "20px 0 4px 0",
        // borderRight: "1px solid black",
      }}
    >
      <img className="navbar__icon" src={icon} alt="" />
      <Typography
        content="p"
        sx={{
          fontSize: "var(--subtitle)",
          fontFamily: "var(--font-subtitle)",
          fontWeight: "700",
          color: "var(--gray-800)",
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
}

export default IconMenu;
