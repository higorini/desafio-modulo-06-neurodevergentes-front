import { Box, Paper, Stack } from "@mui/material";
import editIcon from "../../assets/icons/edit.svg";
import logOutIcon from "../../assets/icons/logout.svg";
import ButtonIcon from "../ButtonIcon";

function HeaderPopUp() {
  return (
    <Paper
      elevation={24}
      sx={{
        padding: "8px 15px",
        borderRadius: "8px",
        position: "absolute",
        top: "85px",
        right: "30px",
      }}
    >
      <Box
        width="19px"
        height="19px"
        sx={{
          clipPath: "polygon(50% 0, 100% 50%, 50% 50%, 0 50%)",
          position: "absolute",
          backgroundColor: "white",
          top: "-8px",
          left: "6px",
        }}
      ></Box>
      <Stack direction="row" gap="16px">
        <ButtonIcon path={editIcon} text="Editar" />
        <ButtonIcon path={logOutIcon} text="Sair" />
      </Stack>
    </Paper>
  );
}

export default HeaderPopUp;
