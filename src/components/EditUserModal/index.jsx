import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import React from "react";
import CloseIcon from "../../assets/icons/closeIcon.svg";

function EditUserModal({ setOpenModal }) {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(145, 154, 150, 0.3)",
        zIndex: 1,
        position: "absolute",
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
                variant="outlined"
                placeholder="Digite seu nome"
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
                  name="cpf"
                  variant="outlined"
                  placeholder="Digite seu CPF"
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
                  name="telefone"
                  variant="outlined"
                  placeholder="Digite seu Telefone"
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
              <TextField
                name="senha"
                variant="outlined"
                placeholder="Digite sua senha"
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
              <TextField
                name="confirmarSenha"
                variant="outlined"
                placeholder="Digite sua senha"
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
            <Button
              variant="contained"
              sx={{
                width: "160px",
                fontSize: "var(--title-s)",
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
