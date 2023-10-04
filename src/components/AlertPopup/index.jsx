import Alert from "@mui/material/Alert";
import iconCicleX from "../../assets/icons/circleX.svg";
import iconCicleV from "../../assets/icons/checkCircle.svg";

function AlertPopup({ showAlert, setShowAlert }) {
  const { message, theme, width } = showAlert
  const widthAlert = width === "Large" ? "24.875rem"
    : (width === "Small" ? "22.0625rem" : "20.625rem")
  const themeStyle = theme === "sucess" ? ({
    color: "--blue-700",
    backgroundColor: "--blue-300",
    icon: iconCicleV
  }) : ({
    color: "--red-700",
    backgroundColor: "--red-100",
    icon: iconCicleX
  })

  return (
    < Alert
      icon={< img src={themeStyle.icon} alt="icon alert" />}
      onClose={() => setShowAlert(false)}
      sx={{
        position: "fixed",
        bottom: "4.125rem",
        right: "7rem",

        width: `${widthAlert}`,
        height: "3.375rem",
        paddingTop: "9px",

        fontFamily: "var(--font-subtitle)",
        color: `var(${themeStyle.color})`,

        borderRadius: "10px",
        backgroundColor: `var(${themeStyle.backgroundColor})`,
      }}
    >
      {message}
    </Alert >
  )
}

export default AlertPopup