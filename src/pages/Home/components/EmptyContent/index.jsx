import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import EmptyData from "../../../../assets/emptyData.png";

function EmptyContent() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{
        overflow: "hidden",
        minHeight: "270px",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 235,
          width: 231,
          opacity: 0.45,
        }}
        alt="The house from the offer."
        src={EmptyData}
      />
      <Typography
        fontFamily="var(--font-body)"
        fontSize="var(--title-s)"
        fontWeight="700"
        color="var(--gray-500)"
      >
        Ainda sem dados aqui
      </Typography>
    </Stack>
  );
}

export default EmptyContent;
