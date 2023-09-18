import { Box, Stack, Typography } from "@mui/material";

function SummaryCharge({ imageSrc, summaryText, summaryValue, bgColor }) {
  return (
    <Stack
      alignItems="center"
      direction="row"
      justifyContent="center"
      height="110px"
      borderRadius="30px"
      color="var(--gray-700)"
      gap="54px"
      sx={{
        backgroundColor: `${bgColor}`,
      }}
    >
      <img src={imageSrc} alt="" />
      <Box textAlign="center">
        <Typography
          content="h3"
          sx={{
            fontFamily: "var(--font-title)",
            fontSize: "var(--title-s)",
            fontWeight: "700",
          }}
        >
          {summaryText}
        </Typography>
        <Typography
          content="strong"
          sx={{
            fontFamily: "var(--font-title)",
            fontSize: "var(--title-l)",
            fontWeight: "700",
          }}
        >
          {summaryValue}
        </Typography>
      </Box>
    </Stack>
  );
}

export default SummaryCharge;
