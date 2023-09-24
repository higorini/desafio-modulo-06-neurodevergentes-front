import { Box, Stack, Typography, InputLabel } from "@mui/material";
import EditDetails from "../../../../assets/icons/detailsIcons/editDetails.svg";

function DetailsClient() {
  return (
    <Box
      borderRadius="32px"
      backgroundColor="var(--white)"
      sx={{
        boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
        overflow: "hidden",
        padding: "8px 16px",
        borderRadius: "40px",
        maxWidth: "90%",
        marginLeft: "2rem",
      }}
    >
      <Stack direction="row" padding="19px 16px" justifyContent="space-between">
        <Typography
          textAlign="center"
          component="p"
          color="var(--gray-700)"
          fontWeight="700"
          fontFamily="var(--font-title)"
          fontSize="var(--title-s)"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Dados do Cliente
        </Typography>
        <Box padding="0 18px" borderRadius="8px">
          <button className="details__edit-button">
            <img src={EditDetails} /> Editar Cliente
          </button>
        </Box>
      </Stack>

      <Box
        sx={{
          overflow: "hidden",
          padding: "8px 16px",
        }}
      >
        <Stack direction="row" marginBottom="3rem" gap="10rem">
          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              E-mail
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              sarasilva@gmail.com
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Telefone
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              71 9 9462 8654
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              CPF
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              054 365 255 87
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Endereço
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              Rua das Cornélias; nº 512
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Bairro
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              Oliveiras
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Complemento
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              Ap: 502
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              CEP
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              031 654 524 04
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Cidade
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              Salvador
            </Typography>
          </Stack>

          <Stack direction="column">
            <InputLabel
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              UF
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              BA
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default DetailsClient;
