import { Stack, Typography } from "@mui/material";
import React from "react";

function ButtonIcon({ path, text }) {
  return (
    <Stack
      direction="column"
      gap="4px"
      alignItems="center"
      sx={{
        cursor: "pointer",
      }}
    >
      <img src={path} alt="" />
      <Typography
        color="var(--gray-600)"
        component="span"
        fontFamily="var(--font-body)"
        fontSize="10px"
      >
        {text}
      </Typography>
    </Stack>
  );
}

export default ButtonIcon;
