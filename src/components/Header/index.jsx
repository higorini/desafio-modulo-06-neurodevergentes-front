import { Stack, Typography } from "@mui/material";
import ArrowDown from "../../assets/icons/chevron.svg";

function Header({ userName, headerTitle }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      borderBottom="1px solid var(--green-300)"
      marginBottom="19px"
      padding="0 100px 24px 50px"
    >
      <Typography
        component="h1"
        sx={{
          fontFamily: "var(--font-title)",
          fontSize: "var(--title-xl)",
          marginTop: "14px",
        }}
      >
        {headerTitle}
      </Typography>
      <Stack direction="row" alignItems="center" gap="16px">
        <Stack
          width="48px"
          height="48px"
          borderRadius="50%"
          textAlign="center"
          justifyContent="center"
          sx={{
            backgroundColor: "var(--gray-300)",
          }}
        >
          <Typography
            fontFamily="var(--font-subtitle)"
            fontWeight="600"
            fontSize="var(--title-l)"
            color="var(--green-500)"
          >
            LR
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center">
          <Typography
            fontFamily="var(--font-subtitle)"
            fontWeight="600"
            fontSize="var(--title-s)"
            color="var(--green-500)"
          >
            {userName}
          </Typography>
          <img src={ArrowDown} alt="" />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
