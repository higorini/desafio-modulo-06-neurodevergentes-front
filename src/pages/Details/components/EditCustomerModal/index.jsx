import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useState } from "react";
import ClientIcon from "../../../../assets/icons/clients.svg";
import CloseIcon from "../../../../assets/icons/closeIcon.svg";
import useGlobal from "../../../../hooks/useGlobal";
import { edityCustomer } from "../../../../services";

function AddCustomer({ setOpenEditModal, personalData }) {
  const { address, cpf, email, phone, name } = personalData
  const { setAddClientSuccessAlert } = useGlobal();
  const [errorMsg, setErrorMsg] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    cep: "",
  });

  const [valueInput, setValueInput] = useState({
    name: name,
    email: email,
    cpf: cpf,
    phone: phone,
    cep: address.cep || "",
    public_place: address.public_place || "",
    complement: address.complement || "",
    neighborhood: address.neighborhood || "",
    city: address.city || "",
    state: address.state || "",
  });

  async function handleSendForm() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const numberRegex = /^[0-9]+$/;

    if (!valueInput.name.length) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        name: "O campo nome é obrigatório",
      }));
      return;
    }

    if (!valueInput.email.length) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        email: "O campo email é obrigatório",
      }));
      return;
    }

    if (!emailRegex.test(valueInput.email)) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        email: "Por favor, insira um endereço de email válido.",
      }));
      return;
    }

    if (!valueInput.cpf.length) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        cpf: "O campo cpf é obrigatório",
      }));
      return;
    }

    if (!numberRegex.test(valueInput.cpf)) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        cpf: "'Por favor, insira apenas numeros, sem '.' ou '-'.",
      }));
      return;
    }

    if (valueInput.cpf.length !== 11) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        cpf: "Quantidade de caracteres inválida",
      }));
      return;
    }

    if (!valueInput.phone.length) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        phone: "O campo Telefone é obrigatório",
      }));
      return;
    }

    if (!numberRegex.test(valueInput.phone)) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        phone: "'Por favor, insira apenas numeros, sem '.' ou '-'.",
      }));
      return;
    }

    if (valueInput.phone.length !== 11) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        phone: "Quantidade de caracteres inválida",
      }));
      return;
    }

    if (!numberRegex.test(valueInput.cep)) {
      setErrorMsg((prevValue) => ({
        ...prevValue,
        cep: "O CEP deve conter exatamente 8 dígitos numéricos.",
      }));
      return;
    }

    setErrorMsg({
      name: "",
      email: "",
      cpf: "",
      phone: "",
      cep: "",
    });

    const user = {
      name: valueInput.name,
      email: valueInput.email,
      cpf: valueInput.cpf,
      phone: valueInput.phone,
      cep: valueInput.cep || null,
      public_place: valueInput.public_place || null,
      complement: valueInput.complement || null,
      neighborhood: valueInput.neighborhood || null,
      city: valueInput.city || null,
      state: valueInput.state || null,
    };

    const response = await edityCustomer(personalData.id, user);

    if (response.status === 400) {
      for (const field in response.data.fields) {
        setErrorMsg((prevValue) => ({
          ...prevValue,
          [field]: response.data.fields[field],
        }));
      }
      return;
    }

    setOpenEditModal(false);
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
          Editar Cliente
        </Typography>
        <Box
          onClick={() => setOpenEditModal(false)}
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
                  type="text"
                  inputProps={{
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    maxLength: 11,
                  }}
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
                  id="phone"
                  name="phone"
                  variant="outlined"
                  placeholder="Digite o telefone"
                  error={!!errorMsg.phone}
                  helperText={errorMsg.phone}
                  value={valueInput.phone}
                  onChange={handleInput}
                  inputProps={{
                    pattern: "[0-9]*",
                    inputMode: "numeric",
                    maxLength: 11,
                  }}
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
                  error={!!errorMsg.cep}
                  helperText={errorMsg.cep}
                  inputMode="none"
                  pattern="[0-9]*"
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
                onClick={() => setOpenEditModal(false)}
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
