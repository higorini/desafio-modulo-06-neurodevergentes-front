import { Box, Paper, Stack, Typography } from "@mui/material";
import editIcon from "../../assets/icons/edit.svg";
import logOutIcon from "../../assets/icons/logout.svg";

function HeaderPopUp({ openModal, setOpenModal }) {
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
        <Stack
          direction="column"
          gap="4px"
          alignItems="center"
          sx={{
            cursor: "pointer",
          }}
          onClick={() => setOpenModal(!openModal)}
        >
          <img src={editIcon} alt="" />
          <Typography
            color="var(--gray-600)"
            component="span"
            fontFamily="var(--font-body)"
            fontSize="10px"
          >
            Editar
          </Typography>
        </Stack>
        <Stack
          direction="column"
          gap="4px"
          alignItems="center"
          sx={{
            cursor: "pointer",
          }}
        >
          <img src={logOutIcon} alt="" />
          <Typography
            color="var(--gray-600)"
            component="span"
            fontFamily="var(--font-body)"
            fontSize="10px"
          >
            Sair
          </Typography>
        </Stack>
      </Stack>
    </Paper>
  );
}

export default HeaderPopUp;
