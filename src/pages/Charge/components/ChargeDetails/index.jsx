import {
  Box,
  Button,
  InputLabel,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "../../../../assets/icons/closeIcon.svg";
import ChargeIcon from "../../../../assets/icons/chargeIcons/chargeIcon.svg";
import ChargeType from "../ChargeType";
import { format } from 'date-fns';

function ChargeDetails({ setOpenChargeDetails, chargeData }) {
  const { costumer_name, description, charge_date, id, value, status } = chargeData
  const dateString = charge_date;
  const dateObject = new Date(dateString);
  const formattedDate = format(dateObject, "dd/MM/yyyy");
  const formattedValue = (value / 100).toFixed(2).replace('.', ',')


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
        width="600px"
        height="461px"
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
          <img src={ChargeIcon} alt="Icone Cliente" />
          Detalhe da cobrança
        </Typography>
        <Box
          onClick={() => setOpenChargeDetails(false)}
          sx={{
            cursor: "pointer",
            position: "absolute",
            top: "24px",
            right: "24px",
          }}
        >
          <img src={CloseIcon} alt="" />
        </Box>
        <Stack gap="8px">
          <Stack direction="column" gap="8px">
            <InputLabel
              htmlFor="clientName"
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Nome
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              {costumer_name}
            </Typography>
            <InputLabel
              htmlFor="clientName"
              sx={{
                fontSize: "var(--title-s)",
                fontFamily: "var(--font-body)",
                fontWeight: "700",
                color: "var(--gray-700)",
              }}
            >
              Descrição
            </InputLabel>
            <Typography
              sx={{
                fontSize: "var(--title-xs)",
                fontFamily: "var(--font-body)",
                fontWeight: "400",
              }}
            >
              {description}
            </Typography>
          </Stack>
          <Stack direction="row" gap="8px">
            <Stack direction="column" width="20rem" gap="8px">
              <InputLabel
                sx={{
                  fontSize: "var(--title-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "700",
                  color: "var(--gray-700)",
                }}
              >
                Vencimento
              </InputLabel>
              <Typography
                sx={{
                  fontSize: "var(--title-xs)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "400",
                }}
              >
                {formattedDate}
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
                Valor
              </InputLabel>
              <Typography
                sx={{
                  fontSize: "var(--title-xs)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "400",
                }}
              >
                {`R$ ${formattedValue}`}
              </Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap="8px">
            <Stack direction="column" width="20rem" gap="8px">
              <InputLabel
                sx={{
                  fontSize: "var(--title-s)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "700",
                  color: "var(--gray-700)",
                }}
              >
                ID cobranças
              </InputLabel>
              <Typography
                sx={{
                  fontSize: "var(--title-xs)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "400",
                }}
              >
                {id}
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
                Status
              </InputLabel>
              <Typography
                sx={{
                  fontSize: "var(--title-xs)",
                  fontFamily: "var(--font-body)",
                  fontWeight: "400",
                  width: "76px",
                  paddingTop: "8px",
                }}
              >
                <ChargeType type={status} />
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ChargeDetails;