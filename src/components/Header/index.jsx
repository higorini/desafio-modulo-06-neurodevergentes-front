import { Stack, Typography } from "@mui/material";
import { useState } from "react";
import ArrowDown from "../../assets/icons/chevron.svg";
import HeaderPopUp from "../HeaderPopUp";

function Header({ userName, headerTitle, openModal, setOpenModal }) {
  const [openPopUp, setOpenPopUp] = useState(false);

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      borderBottom="1px solid var(--green-300)"
      marginBottom="19px"
      padding="40px 100px 24px 50px"
      position="sticky"
      top="0px"
      backgroundColor="var(--gray-100)"
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
        <Stack
          direction="row"
          alignItems="center"
          onClick={() => setOpenPopUp(!openPopUp)}
          sx={{
            cursor: "pointer",
          }}
        >
          <Typography
            fontFamily="var(--font-subtitle)"
            fontWeight="600"
            fontSize="var(--title-s)"
            color="var(--green-500)"
          >
            {userName}
          </Typography>
          <img src={ArrowDown} alt="" />
          {openPopUp && (
            <HeaderPopUp openModal={openModal} setOpenModal={setOpenModal} />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
