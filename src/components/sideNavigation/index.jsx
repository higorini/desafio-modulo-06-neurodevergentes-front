import { Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import useGlobal from "../../hooks/useGlobal";
import "./style.css";

function LateralMenu() {
  const { charges, setSelectedCharge } = useGlobal();
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="start"
      paddingTop="45px"
      gap="72px"
      position="fixed"
      sx={{
        width: 108,
        height: "100vh",
        backgroundColor: "var(--gray-200)",
      }}
    >
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        <Stack
          alignItems="center"
          sx={{
            width: "108px",
            padding: "20px 0 4px 0",
            color: "inherit",
          }}
        >
          <svg
            className="navicon"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 38.5004H34.9999C37.2091 38.5004 38.9999 36.7096 38.9999 34.5004V19.5005L24.4999 9.50049L10 19.5005V34.5004C10 36.7096 11.7909 38.5004 14 38.5004Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20 31.4985C20 29.2893 21.7909 27.4985 23.9999 27.4985H24.9999C27.2091 27.4985 28.9999 29.2893 28.9999 31.4985V38.4985H20V31.4985Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            content="p"
            sx={{
              fontSize: "var(--subtitle)",
              fontFamily: "var(--font-subtitle)",
              fontWeight: "700",
              color: "inherit",
            }}
          >
            Home
          </Typography>
        </Stack>
      </NavLink>
      <NavLink
        to="/customer"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        <Stack
          alignItems="center"
          sx={{
            width: "108px",
            padding: "20px 0 4px 0",
            color: "inherit",
          }}
        >
          <svg
            className="navicon"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.0638 38.5H26.937C28.066 38.5 28.9544 37.5634 28.7294 36.457C28.1084 33.4024 26.0798 28 19.5004 28C12.921 28 10.8925 33.4024 10.2714 36.457C10.0464 37.5634 10.9348 38.5 12.0638 38.5Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 28C36.1576 28 37.8604 32.2958 38.5478 35.392C38.919 37.064 37.5666 38.5 35.8538 38.5H34"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.5 20.5C22.5376 20.5 25 18.0376 25 15C25 11.9624 22.5376 9.5 19.5 9.5C16.4624 9.5 14 11.9624 14 15C14 18.0376 16.4624 20.5 19.5 20.5Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 20.5C33.0376 20.5 35 18.0376 35 15C35 11.9624 33.0376 9.5 30 9.5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            content="p"
            sx={{
              fontSize: "var(--subtitle)",
              fontFamily: "var(--font-subtitle)",
              fontWeight: "700",
              color: "inherit",
            }}
          >
            Clientes
          </Typography>
        </Stack>
      </NavLink>
      <NavLink
        to="/charge"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        onClick={() => setSelectedCharge(charges)}
      >
        <Stack
          alignItems="center"
          sx={{
            width: "108px",
            padding: "20px 0 4px 0",
            color: "inherit",
          }}
        >
          <svg
            className="navicon"
            width="49"
            height="48"
            viewBox="0 0 49 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 38.5H33C35.2092 38.5 37 36.7092 37 34.5V18L28.5 9.5H16C13.7909 9.5 12 11.2909 12 13.5V34.5C12 36.7092 13.7909 38.5 16 38.5Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M36.5 18.5H28V10"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Typography
            content="p"
            sx={{
              fontSize: "var(--subtitle)",
              fontFamily: "var(--font-subtitle)",
              fontWeight: "700",
              color: "inherit",
            }}
          >
            Cobranças
          </Typography>
        </Stack>
      </NavLink>
    </Stack>
  );
}

export default LateralMenu;
