import { Box, Stack, Typography } from "@mui/material";
import ChargesTable from "../ChargesTable";
import EmptyContent from "../EmptyContent";

function ChargesCard({
  chargeTitle,
  bgIndexColor,
  indexColor,
  indexNumber,
  chargeTableContent,
}) {
  return (
    <Box
      borderRadius="32px"
      sx={{
        boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
        backgroundColor: "white",
      }}
    >
      <Stack
        borderBottom="1px solid var(--gray-300)"
        direction="row"
        padding="19px 16px"
      >
        <Typography
          textAlign="center"
          component="p"
          color="var(--gray-700)"
          fontWeight="700"
          fontFamily="var(--font-title)"
          fontSize="var(--title-s)"
          flex="1"
        >
          {chargeTitle}
        </Typography>
        <Box
          padding="0 18px"
          borderRadius="8px"
          sx={{
            backgroundColor: `${bgIndexColor}`,
          }}
        >
          <Typography
            textAlign="center"
            component="p"
            color={indexColor}
            fontWeight="700"
            fontFamily="var(--font-title)"
            fontSize="var(--title-s)"
          >
            {indexNumber}
          </Typography>
        </Box>
      </Stack>
      {chargeTableContent.length === 0 ? (
        <EmptyContent />
      ) : (
        <ChargesTable chargeContent={chargeTableContent} />
      )}
      <Box>
        <Typography
          textAlign="center"
          component="p"
          color="var(--pink-500)"
          fontFamily="var(--font-body)"
          fontWeight="400"
          fontSize="18px"
          padding="13px 0"
          borderTop="1px solid var(--gray-300)"
        >
          Ver Todos
        </Typography>
      </Box>
    </Box>
  );
}

export default ChargesCard;
