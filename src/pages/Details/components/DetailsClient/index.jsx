import { Box, Stack, Typography, InputLabel } from "@mui/material";
import EditDetails from "../../../../assets/icons/detailsIcons/editDetails.svg";

function DetailsClient({ detailsClient, setOpenEditModal }) {
  const { address, cpf, email, phone } = detailsClient
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
          <button
            className="details__edit-button"
            onClick={() => setOpenEditModal(true)} >
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
        <Stack direction="row" marginBottom="3rem">
          <Stack direction="column" width="17rem">
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
              {email}
            </Typography>
          </Stack>

          <Stack direction="column" width="14rem">
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
              {phone}
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
              {cpf}
            </Typography>
          </Stack>
        </Stack>

        <Stack direction="row">
          <Stack direction="column" width="20rem">
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
              {address ? address.public_place : ' '}
            </Typography>
          </Stack>

          <Stack direction="column" width="16rem">
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
              {address ? address.neighborhood : ' '}
            </Typography>
          </Stack>

          <Stack direction="column" width="16rem">
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
              {address ? address.complement : ' '}
            </Typography>
          </Stack>

          <Stack direction="column" width="16rem">
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
              {address ? address.cep : ' '}
            </Typography>
          </Stack>

          <Stack direction="column" width="16rem">
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
              {address ? address.city : ' '}
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
              {address ? address.state : ' '}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default DetailsClient;
