import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
  OutlinedInput,
} from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import InputAdornment from "@mui/material/InputAdornment";
import CloseIcon from "../../assets/icons/closeIcon.svg";
import ClientIcon from "../../assets/icons/clients.svg";

function AddCharge({ setOpenCharge }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(145, 154, 150, 0.3)",
        zIndex: 1,
        position: "fixed",
        top: "0",
        left: "0",
      }}
    >
      <Stack
        padding="40px 56px"
        sx={{
          borderRadius: "32px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Typography
          display="flex"
          component="h2"
          fontSize="var(--title-l)"
          fontFamily="var(--font-title)"
          fontWeight="600"
          gap="1rem"
          color="var(--gray-800)"
          sx={{
            marginBottom: "8px",
          }}
        >
          <img src={ClientIcon} />
          Cadastro do Cliente
        </Typography>
        <Box
          onClick={() => setOpenCharge(false)}
          sx={{
            position: "absolute",
            top: "24px",
            right: "24px",
          }}
        >
          <img src={CloseIcon} alt="" />
        </Box>
        <form action="">
          <Stack gap="10px" alignItems="center">
            <Stack direction="column">
              <InputLabel
                htmlFor="clientName"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Nome*
              </InputLabel>
              <TextField
                id="clientName"
                variant="outlined"
                placeholder="Digite o nome"
                sx={{
                  width: "487px",
                  "input:first-of-type": {
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
              />
            </Stack>
            <Stack direction="column">
              <InputLabel
                htmlFor="description"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Descrição*
              </InputLabel>
              <TextField
                variant="outlined"
                placeholder="Digite a descrição"
                sx={{
                  width: "485px",
                  "input:first-of-type": {
                    height: "68px",
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
              />
            </Stack>
            <Stack direction="row" gap="24px">
              <Stack direction="column">
                <InputLabel
                  htmlFor="expireDate"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Vencimento*
                </InputLabel>
                <TextField
                  id="expireDate"
                  variant="outlined"
                  placeholder="Data de Vencimento"
                  sx={{
                    width: "235px",
                    "input:first-of-type": {
                      color: "var(--gray-600)",
                      padding: "10px 14px",
                      fontFamily: "var(--font-body)",
                    },
                  }}
                />
              </Stack>
              <Stack direction="column">
                <InputLabel
                  htmlFor="clientTelefone"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Valor*
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">R$</InputAdornment>
                  }
                  placeholder="Digite o valor"
                  sx={{
                    width: "224px",
                    "input:first-of-type": {
                      color: "var(--gray-600)",
                      padding: "10px 14px",
                      fontFamily: "var(--font-body)",
                    },
                  }}
                />
              </Stack>
            </Stack>
            <Stack
              direction="column"
              sx={{
                width: "482px",
              }}
            >
              <InputLabel
                htmlFor="clientName"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                  marginTop: "1rem",
                  marginBottom: "1rem",
                }}
              >
                Status*
              </InputLabel>
              <RadioGroup
                sx={{
                  gap: "0.5rem",
                  marginLeft: "0.5rem",
                  width: "487px",
                }}
              >
                <FormControlLabel
                  value="paid"
                  control={<Radio />}
                  label="Cobrança Paga"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                    background: "var(--gray-200)",
                    borderRadius: "0.5rem",
                  }}
                />
                <FormControlLabel
                  value="pending"
                  control={<Radio />}
                  label="Cobrança Pendente"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                    background: "var(--gray-200)",
                    borderRadius: "0.5rem",
                  }}
                />
              </RadioGroup>
            </Stack>
            <Stack
              display="flex"
              flexDirection="row"
              gap="24px"
              paddingTop="32px"
            >
              <Button
                variant="contained"
                onClick={() => setOpenCharge(false)}
                sx={{
                  textTransform: "capitalize",
                  width: "231.5px",
                  height: "34px",
                  borderRadius: "10px",
                  fontSize: "var(--title-s)",
                  fontFamily: "var(--font-body)",
                  backgroundColor: "var(--gray-300)",
                  color: "var(--green-500)",
                  cursor: "pointer",
                  transition: "0.2s",
                  ":hover": {
                    backgroundColor: "var(--gray-100)",
                    opacity: "0.8",
                  },
                }}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                sx={{
                  textTransform: "capitalize",
                  width: "231.5px",
                  height: "34px",
                  borderRadius: "10px",
                  fontSize: "var(--title-s)",
                  fontFamily: "var(--font-body)",
                  backgroundColor: "var(--pink-500)",
                  color: "var(--gray-100)",
                  cursor: "pointer",
                  transition: "0.2s",
                  ":hover": {
                    backgroundColor: "var(--pink-500)",
                    opacity: "0.8",
                  },
                }}
              >
                Aplicar
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Stack>
  );
}

export default AddCharge;
