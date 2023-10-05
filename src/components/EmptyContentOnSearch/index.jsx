import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import NotFoundIcon from "../../assets/icons/emptyContentOnSearchIcon1.svg";
import SearchIcon from "../../assets/icons/emptyContentOnSearchIcon2.svg";

function EmptyContentOnSearch() {
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        overflow: "hidden",
        height: "100%",
        width: "100%",
      }}
    >
      <Box
        component="img"
        alt=""
        src={NotFoundIcon}
        sx={{
          position: "relative",
          top: "48px",
          right: "-140px",
        }}
      />
      <Box component="img" alt="" src={SearchIcon} marginBottom="48px" />
      <Typography
        fontFamily="var(--font-title)"
        fontSize="28px"
        fontWeight="700"
        color="var(--salmon-300)"
        marginBottom="16px"
      >
        Nenhum resultado foi encontrado!
      </Typography>
      <Typography
        fontFamily="var(--font-tile)"
        fontSize="24px"
        fontWeight="700"
        color="var(--gray-400)"
      >
        Verifique se escrita está correta
      </Typography>
    </Stack>
  );
}

export default EmptyContentOnSearch;
