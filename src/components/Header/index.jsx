import { Breadcrumbs, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowDown from "../../assets/icons/chevron.svg";
import { getUserData } from "../../services";
import EditUserModal from "../EditUserModal";
import HeaderPopUp from "../HeaderPopUp";

function Header({ headerTitle, pageTitle, breadcrumbs }) {
  const [openUserEditModal, setOpenUserEditModal] = useState(false);

  const [openPopUp, setOpenPopUp] = useState(false);
  const [userName, setUserName] = useState({
    logo: "",
    name: "",
  });

  useEffect(() => {
    async function loadUserName() {
      const response = await getUserData();
      const name = response.name;

      if (name.split(" ").length > 1) {
        const nameLogo =
          name.split(" ")[0].slice(0, 1) + name.split(" ")[1].slice(0, 1);
        setUserName((prevValuer) => ({ ...prevValuer, logo: nameLogo }));
      } else {
        const nameLogo = name.slice(0, 1);
        setUserName((prevValuer) => ({ ...prevValuer, logo: nameLogo }));
      }

      setUserName((prevValuer) => ({
        ...prevValuer,
        name: name.split(" ")[0],
      }));
    }
    loadUserName();
  }, [openUserEditModal]);

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
      {openUserEditModal && (
        <EditUserModal
          openUserEditModal={openUserEditModal}
          setOpenUserEditModal={setOpenUserEditModal}
        />
      )}
      {headerTitle.length > 0 ? (
        <Typography
          component="h1"
          color="var(--gray-800)"
          sx={{
            fontFamily: "var(--font-title)",
            fontSize: "var(--title-xl)",
            marginTop: "14px",
          }}
        >
          {headerTitle}
        </Typography>
      ) : (
        <Breadcrumbs
          separator=">"
          aria-label="breadcrumb"
          sx={{
            alignSelf: "end",
            position: "relative",
            bottom: "-20px",
          }}
        >
          {breadcrumbs}
        </Breadcrumbs>
      )}
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
            {userName.logo}
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
            {userName.name}
          </Typography>
          <img src={ArrowDown} alt="" />
        </Stack>
        {openPopUp && (
          <HeaderPopUp
            openUserEditModal={openUserEditModal}
            setOpenUserEditModal={setOpenUserEditModal}
          />
        )}
      </Stack>
    </Stack>
  );
}

export default Header;
