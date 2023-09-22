import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import React, { useState } from "react";
import CloseIcon from "../../../../assets/icons/closeIcon.svg";
import ClientIcon from "../../../../assets/icons/clients.svg";

function AddCustomer({ setOpenAdd }) {
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    cpf: "",
    telephone: "",
  })

  const [valueInput, setValueInput] = useState({
    name: "",
    email: "",
    cpf: "",
    telephone: "",
    cep: "",
    public_place: "",
    complement: "",
    neighborhood: "",
    city: "",
    state: ""
  });


  async function handleSendForm() {
    const user = {
      name: valueInput.name,
      email: valueInput.email,
      cpf: valueInput.cpf,
      telephone: valueInput.telephone,
      cep: valueInput.cep || null,
      public_place: valueInput.public_place || null,
      complement: valueInput.complement || null,
      neighborhood: valueInput.neighborhood || null,
      city: valueInput.city || null,
      state: valueInput.state || null,
    };

    console.log(user)
  }

  function handleInput(e) {
    const valueInputEvent = e.target.value;
    const nameInputEvent = e.target.name;
    setValueInput((prevValue) => ({
      ...prevValue,
      [nameInputEvent]: valueInputEvent,
    }));
  }

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
          onClick={() => setOpenAdd(false)}
          sx={{
            cursor: "pointer",
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
                id="name"
                name="name"
                variant="outlined"
                placeholder="Digite o nome"
                error={!!errorMsg.name}
                helperText={errorMsg.name}
                value={valueInput.name}
                onChange={handleInput}
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
                id="email"
                name="email"
                variant="outlined"
                placeholder="Digite o email"
                error={!!errorMsg.email}
                helperText={errorMsg.email}
                value={valueInput.email}
                onChange={handleInput}
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
                  id="cpf"
                  name="cpf"
                  variant="outlined"
                  placeholder="Digite o CPF"
                  error={!!errorMsg.cpf}
                  helperText={errorMsg.cpf}
                  value={valueInput.cpf}
                  onChange={handleInput}
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
                  id="telephone"
                  name="telephone"
                  variant="outlined"
                  placeholder="Digite o telefone"
                  error={!!errorMsg.telephone}
                  helperText={errorMsg.telephone}
                  value={valueInput.telephone}
                  onChange={handleInput}
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
                id="public_place"
                name="public_place"
                variant="outlined"
                placeholder="Digite o endereço"
                value={valueInput.public_place}
                onChange={handleInput}
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
                id="complement"
                name="complement"
                variant="outlined"
                placeholder="Digite o complemento"
                value={valueInput.complement}
                onChange={handleInput}
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
                  id="cep"
                  name="cep"
                  variant="outlined"
                  placeholder="Digite o CEP"
                  value={valueInput.cep}
                  onChange={handleInput}
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
                  id="neighborhood"
                  name="neighborhood"
                  variant="outlined"
                  placeholder="Digite o bairro"
                  value={valueInput.neighborhood}
                  onChange={handleInput}
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
                  id="city"
                  name="city"
                  variant="outlined"
                  placeholder="Digite a cidade"
                  value={valueInput.city}
                  onChange={handleInput}
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
                  id="state"
                  name="state"
                  variant="outlined"
                  placeholder="Digite a UF"
                  value={valueInput.state}
                  onChange={handleInput}
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
                onClick={() => setOpenAdd(false)}
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
                onClick={handleSendForm}
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

export default AddCustomer;
