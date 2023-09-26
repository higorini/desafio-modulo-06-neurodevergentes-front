import { Box, Typography } from "@mui/material";

function ChargeType({ type }) {
  let content;

  if (type == "paga") {
    content = (
      <Box
        borderRadius="8px"
        sx={{
          backgroundColor: "var(--seagreen-100)",
        }}
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--seagreen-700)"
          fontWeight="600"
          fontFamily="var(--font-body)"
          fontSize="var(--title-xs)"
        >
          Paga
        </Typography>
      </Box>
    );
  } else if (type == "pendente") {
    content = (
      <Box
        borderRadius="8px"
        sx={{
          backgroundColor: "var(--gold-100)",
        }}
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--gold-700)"
          fontWeight="600"
          fontFamily="var(--font-body)"
          fontSize="var(--title-xs)"
        >
          Pendente
        </Typography>
      </Box>
    );
  } else if (type == "vencida") {
    content = (
      <Box
        borderRadius="8px"
        sx={{
          backgroundColor: "var(--ruby-100)",
        }}
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--ruby-700)"
          fontWeight="600"
          fontFamily="var(--font-body)"
          fontSize="var(--title-xs)"
        >
          Vencida
        </Typography>
      </Box>
    );
  }

  return content;
}

export default ChargeType;
