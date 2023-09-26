import { Box, Stack, Typography } from "@mui/material";

function SummaryCharge({ imageSrc, summaryText, summaryValue, bgColor }) {
  const moneyMask = (value) => {
    value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

    const options = { minimumFractionDigits: 2 };
    const result = new Intl.NumberFormat("pt-BR", options).format(
      parseFloat(value) / 100
    );

    return "R$ " + result;
  };
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
          {moneyMask(summaryValue.toString())}
        </Typography>
      </Box>
    </Stack>
  );
}

export default SummaryCharge;
