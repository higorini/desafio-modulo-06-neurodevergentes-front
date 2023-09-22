import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";

import CloseIcon from "../../assets/icons/closeIcon.svg";

import iconDoesShowPassword from '../../assets/imgs/SignIn/icon-does-show-password.png';
import iconShowPassword from '../../assets/imgs/SignIn/icon-show-password.png';
import { useEffect, useState } from "react";
import { edityUserData, getUserData, validateEmail } from "../../services";

const MAX_LENGHT = 11;

function EditUserModal({ setOpenModal, openModal }) {
  // const [msgError, setMsgError] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPassword2, setErrorPassword2] = useState("");
  const [errorCpf, setErrorCpf] = useState("");
  const [showPassword, setShowPassword] = useState({
    input1: false,
    input2: false,
  });
  const [valueInput, setValueInput] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    password1: "",
    password2: "",
    id: "",
  });

  useEffect(() => {
    async function gettingOldData() {
      const response = await getUserData();
      Object.entries(response).forEach(([key, value]) => {
        setValueInput((prevValue) => ({
          ...prevValue,
          [key]: value === null ? " " : value,
        }));
      });
    }
    gettingOldData();
  }, [openModal]);

  async function handleValidateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(valueInput.email)) {
      setErrorEmail("Por favor, insira um endereço de email válido.");
      return;
    }

    const email = valueInput.email;
    const name = valueInput.name;
    const response = await validateEmail(email, name);
    if (response.status === 400) {
      setErrorEmail(response.data.message);
      return;
    }
    setErrorEmail("");
  }

  function handleValidatePassword() {
    if (valueInput.password1.length > 0 && valueInput.password1.length < 6) {
      setErrorPassword("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (valueInput.password1 !== valueInput.password2 && valueInput.password2.length > 1) {
      console.log("fasf")
      setErrorPassword2("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }
    setErrorPassword("");
    setErrorPassword2("");
  }

  function handleInput(e) {
    const valueInputEvent = e.target.value;
    const nameInputEvent = e.target.name;
    setValueInput((prevValue) => ({
      ...prevValue,
      [nameInputEvent]: valueInputEvent,
    }));
  }

  async function handleSendForm() {
    // if (!valueInput.name.length || !valueInput.email.length) {
    //   setMsgError(
    //     "Por favor, preencha todos os campos obrigatórios antes de continuar."
    //   );
    //   return;
    // }

    if (!valueInput.name.length) {
      setErrorName("O campo nome é obrigatório");
      return;
    }

    if (valueInput.password1.length > 0 && valueInput.password1.length < 6) {
      setErrorPassword("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (valueInput.password1 !== valueInput.password2) {
      setErrorPassword("As senhas não coincidem. Por favor, tente novamente.");
      return;
    }

    if (errorEmail) {
      return;
    }

    if (errorCpf) {
      setErrorCpf("O cpf possui número de caracteres inválido");
      return;
    }

    const user = {
      name: valueInput.name,
      email: valueInput.email,
      password: valueInput.password2,
      cpf: valueInput.cpf ? valueInput.cpf : "",
      phone: valueInput.phone ? valueInput.phone : "",
    };

    const response = await edityUserData(user, valueInput.id);
    setOpenModal(false);
    return response.message;
  }

  function handleClickShowPassword(input) {
    input
      ? setShowPassword((prevValue) => ({
        ...prevValue,
        input2: !showPassword.input2,
      }))
      : setShowPassword((prevValue) => ({
        ...prevValue,
        input1: !showPassword.input1,
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
        alignItems="center"
        sx={{
          borderRadius: "32px",
          backgroundColor: "white",
          position: "relative",
        }}
      >
        <Typography
          component="h2"
          fontSize="var(--title-l)"
          fontFamily="var(--font-title)"
          fontWeight="700"
          color="var(--gray-800)"
          sx={{
            marginBottom: "32px",
          }}
        >
          Edite seu cadastro
        </Typography>
        <Box
          onClick={() => setOpenModal(false)}
          sx={{
            position: "absolute",
            top: "24px",
            right: "24px",
            cursor: "pointer",
          }}
        >
          <img src={CloseIcon} alt="" />
        </Box>
        <form action="">
          <Stack gap="20px" alignItems="center">
            <Stack direction="column">
              <InputLabel
                htmlFor="name"
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
                placeholder="Digite seu nome"
                error={!!errorName}
                helperText={errorName}
                onBlur={handleValidateEmail}
                value={valueInput.name}
                onChange={handleInput}
                sx={{
                  width: "380px",
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
                htmlFor="email"
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
                placeholder="Digite seu email"
                error={!!errorEmail}
                helperText={errorEmail}
                value={valueInput.email}
                onChange={handleInput}
                onBlur={handleValidateEmail}
                sx={{
                  width: "380px",
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
                  htmlFor="cpf"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  CPF
                </InputLabel>
                <TextField
                  id="cpf"
                  name="cpf"
                  // error={valueInput.cpf > MAX_LENGHT}
                  // helperText={errorCpf}
                  variant="outlined"
                  placeholder="Digite seu CPF"
                  value={valueInput.cpf}
                  onChange={handleInput}
                  sx={{
                    width: "178px",
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
                  htmlFor="telefone"
                  sx={{
                    fontSize: "var(--body-s)",
                    fontFamily: "var(--font-body)",
                    fontWeight: "600",
                    color: "var(--gray-700)",
                  }}
                >
                  Telefone
                </InputLabel>
                <TextField
                  name="phone"
                  variant="outlined"
                  placeholder="Digite seu Telefone"
                  value={valueInput.phone}
                  onChange={handleInput}
                  sx={{
                    width: "178px",
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
                htmlFor="senha"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Nova Senha
              </InputLabel>
              <TextField
                error={!!errorPassword}
                helperText={errorPassword}
                onBlur={handleValidatePassword}
                id="password1"
                name="password1"
                placeholder="Digite sua senha"
                value={valueInput.password1}
                onChange={handleInput}
                sx={{
                  width: "380px",
                  "input:first-of-type": {
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
                type={showPassword.input1 ? "text" : "password"}
              />
              <Box
                sx={{
                  position: "fixed"
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleClickShowPassword(0)}
                  sx={{
                    position: "relative",
                    minWidth: "16px",
                    minHeight: "16px",
                    width: "16px",
                    height: "px",
                    borderRadius: "50%",
                    top: "24px",
                    left: "345px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    ":hover": {
                      boxShadow: "none",
                      backgroundColor: " rgba(0, 0, 0, 0.108)",
                    },
                  }}
                >
                  <img src={showPassword.input1 ? iconShowPassword : iconDoesShowPassword}
                    alt="icone mostrar senha" />
                </Button>
              </Box>
            </Stack>
            <Stack direction="column">
              <InputLabel
                htmlFor="confirmarSenha"
                sx={{
                  fontSize: "var(--body-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "600",
                  color: "var(--gray-700)",
                }}
              >
                Confirmar Senha
              </InputLabel>
              <TextField
                id="password2"
                name="password2"
                placeholder="Digite sua senha"
                value={valueInput.password2}
                onChange={handleInput}
                onBlur={handleValidatePassword}
                error={!!errorPassword2}
                helperText={errorPassword2}
                sx={{
                  width: "380px",
                  "input:first-of-type": {
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
                type={showPassword.input2 ? "text" : "password"}
              />
              <Box
                sx={{
                  position: "fixed"
                }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleClickShowPassword(1)}
                  sx={{
                    position: "relative",
                    minWidth: "16px",
                    minHeight: "16px",
                    width: "16px",
                    height: "px",
                    borderRadius: "50%",
                    top: "24px",
                    left: "345px",
                    backgroundColor: "transparent",
                    boxShadow: "none",
                    ":hover": {
                      boxShadow: "none",
                      backgroundColor: " rgba(0, 0, 0, 0.108)",
                    },
                  }}
                >
                  <img src={showPassword.input2 ? iconShowPassword : iconDoesShowPassword}
                    alt="icone mostrar senha" />
                </Button>
              </Box>
            </Stack>
            <Button
              variant="contained"
              onClick={handleSendForm}
              sx={{
                textTransform: "capitalize",
                width: "160px",
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
        </form>
      </Stack>
    </Stack>
  );
}

export default EditUserModal;
