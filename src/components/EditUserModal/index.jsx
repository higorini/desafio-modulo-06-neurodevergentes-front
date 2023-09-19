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

import React from "react";
import CloseIcon from "../../assets/icons/closeIcon.svg";

import { validateEmail, edityUserData, getUserData } from "../../services";
import { useState, useEffect } from "react";

function EditUserModal({ setOpenModal }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [msgError, setMsgError] = useState("")
  const [valueInput, setValueInput] = useState({
    name: "",
    email: "",
    cpf: "",
    telephone: "",
    password1: "",
    password2: "",
    id: ""
  })

  useEffect(() => {
    async function gettingOldData() {
      const response = await getUserData()

      setValueInput((prevValue) => ({ ...prevValue, id: response.id }))
    }
    gettingOldData()
  }, [])

  async function handleValidateEmail() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(valueInput.email)) {
      setMsgError("Por favor, insira um endereço de email válido.")
      return
    }

    const email = valueInput.email
    const response = await validateEmail(email)
    if (response.status === 400) {
      setMsgError(response.data.message)
      return
    }
    setMsgError("")
  }

  function handleInput(e) {
    const valueInputEvent = e.target.value
    const nameInputEvent = e.target.name
    setValueInput((prevValue) => ({ ...prevValue, [nameInputEvent]: valueInputEvent }))
  }

  async function handleSendForm() {

    if (!valueInput.name.length || !valueInput.email.length) {
      setMsgError("Por favor, preencha todos os campos obrigatórios antes de continuar.")
      return
    }

    if (valueInput.password2.length < 6) {
      setMsgError("A senha deve ter pelo menos 6 caracteres.")
      return
    }

    if (valueInput.password1 !== valueInput.password2) {
      setMsgError("As senhas não coincidem. Por favor, tente novamente.")
      return
    }
    setMsgError("")

    const user = {
      name: valueInput.name,
      email: valueInput.email,
      password: valueInput.password2,
      cpf: (valueInput.cpf ? valueInput.cpf : ""),
      telephone: (valueInput.telephone ? valueInput.telephone : ""),
    }

    const response = await edityUserData(user, valueInput.id);
    setOpenModal(false)
    return response.message
  }



  const handleClickShowPassword = () => setShowPassword((show) => !show);

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
                  variant="outlined"
                  placeholder="Digite seu CPF"
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
                  name="telephone"
                  variant="outlined"
                  placeholder="Digite seu Telefone"
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
                Nova Senha*
              </InputLabel>
              <OutlinedInput
                id="senha1"
                name="password1"
                placeholder="Digite sua senha"
                onChange={handleInput}
                sx={{
                  width: "380px",
                  "input:first-of-type": {
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
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
                Confirmar Senha*
              </InputLabel>
              <OutlinedInput
                id="senha2"
                name="password2"
                placeholder="Digite sua senha"
                onChange={handleInput}
                sx={{
                  width: "380px",
                  "input:first-of-type": {
                    color: "var(--gray-600)",
                    padding: "10px 14px",
                    fontFamily: "var(--font-body)",
                  },
                }}
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      // onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
                    </IconButton>
                  </InputAdornment>
                }
              />
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
        {msgError && (<p>{msgError}</p>)}
      </Stack>
    </Stack>
  );
}

export default EditUserModal;