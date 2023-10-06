import { Box, Button, Stack, Typography } from "@mui/material";
import attentionIcon from "../../assets/icons/attentionTriangle2.svg";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import useGlobal from "../../hooks/useGlobal";
import { deleteCharge } from "../../services";
function DeleteChargeModal({ setOpenDeleteChargeModal, chargeData }) {
  const { setShowAlert } = useGlobal();
  async function handleConfirmDelete() {
    if (chargeData.status === "pendente") {
      await deleteCharge(chargeData.id);
      setOpenDeleteChargeModal(false);
      setShowAlert({
        message: "Cobrança excluída com sucesso!",
        theme: "sucess",
      });
      return;
    }
    setOpenDeleteChargeModal(false);
    setShowAlert({
      message: "Esta cobrança não pode ser excluída!",
      theme: "failure",
      width: "Small",
    });
  }

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "calc(100% + 16rem)",
        backgroundColor: "rgba(145, 154, 150, 0.3)",
        zIndex: 1,
        position: "fixed",
        top: "-120px",
        left: 0,
      }}
    >
      <Stack
        width={600}
        height={400}
        padding="40px 56px"
        sx={{
          borderRadius: "32px",
          backgroundColor: "white",
          position: "relative",
          alignItems: "center",
        }}
      >
        <img width={"160px"} src={attentionIcon} />
        <Typography
          display="flex"
          component="p"
          fontSize="var(--title-s)"
          fontFamily="var(--font-title)"
          fontWeight="600"
          color="var(--orange-700)"
          sx={{
            marginTop: "13px",
          }}
        >
          Tem certeza que deseja excluir esta cobrança?
        </Typography>
        <Box
          onClick={() => setOpenDeleteChargeModal(false)}
          sx={{
            position: "absolute",
            top: "24px",
            right: "24px",
          }}
        >
          <img src={CloseIcon} alt="" />
        </Box>
        <Stack
          display="flex"
          flexDirection="row"
          gap="16px"
          paddingTop="27.27px"
        >
          <Button
            variant="contained"
            onClick={() => setOpenDeleteChargeModal(false)}
            sx={{
              textTransform: "capitalize",
              width: "100px",
              height: "22.6px",
              borderRadius: "4px",
              boxShadow: "none",
              fontSize: "var(--title-s)",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--red-100)",
              color: "var(--red-700)",
              cursor: "pointer",
              transition: "0.2s",
              ":hover": {
                backgroundColor: "var(--red-100)",
                opacity: "0.8",
                boxShadow: "none",
              },
            }}
          >
            Não
          </Button>
          <Button
            variant="contained"
            onClick={handleConfirmDelete}
            sx={{
              textTransform: "capitalize",
              width: "100px",
              height: "22.6px",
              borderRadius: "4px",
              boxShadow: "none",
              fontSize: "var(--title-s)",
              fontFamily: "var(--font-body)",
              backgroundColor: "var(--green-300)",
              color: "var(--green-700)",
              cursor: "pointer",
              transition: "0.2s",
              ":hover": {
                backgroundColor: "var(--green-300)",
                opacity: "0.8",
                boxShadow: "none",
              },
            }}
          >
            Sim
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default DeleteChargeModal;
