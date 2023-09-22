import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
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
                htmlFor="clientEmail"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Email*
              </InputLabel>
              <TextField
                name="email"
                variant="outlined"
                placeholder="Digite o email"
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
            <Stack direction="row" gap="24px">
              <Stack direction="column">
                <InputLabel
                  htmlFor="clientCpf"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  CPF*
                </InputLabel>
                <TextField
                  id="clientCpf"
                  variant="outlined"
                  placeholder="Digite o CPF"
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
                  Telefone*
                </InputLabel>
                <TextField
                  name="telefone"
                  variant="outlined"
                  placeholder="Digite o Telefone"
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
            <Stack direction="column">
              <InputLabel
                htmlFor="clientAdress"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Endereço
              </InputLabel>
              <OutlinedInput
                placeholder="Digite o endereço"
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
                htmlFor="clientContinued"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Complemento
              </InputLabel>
              <OutlinedInput
                id="senha"
                placeholder="Digite o complemento"
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
            <Stack direction="row" gap="24px">
              <Stack direction="column">
                <InputLabel
                  htmlFor="clientCep"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  CEP
                </InputLabel>
                <TextField
                  variant="outlined"
                  placeholder="Digite o CEP"
                  sx={{
                    width: "228px",
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
                  htmlFor="clientDistrict"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Bairro
                </InputLabel>
                <TextField
                  name="bairro"
                  variant="outlined"
                  placeholder="Digite o Bairro"
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
            </Stack>
            <Stack direction="row" gap="24px">
              <Stack direction="column">
                <InputLabel
                  htmlFor="clientCity"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Cidade
                </InputLabel>
                <TextField
                  id="clientCpf"
                  variant="outlined"
                  placeholder="Digite a Cidade"
                  sx={{
                    width: "303px",
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
                  htmlFor="clientState"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  UF
                </InputLabel>
                <TextField
                  name="estado"
                  variant="outlined"
                  placeholder="Digite a UF"
                  sx={{
                    width: "160px",
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
