import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Alert, Link, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ChargeFilter from "../../assets/icons/chargeIcons/chargeFilter.svg";
import ChargeIcon from "../../assets/icons/chargeIcons/chargeIcon.svg";
import ChargeSearch from "../../assets/icons/chargeIcons/chargeSearch.svg";
import DeleteChargeModal from "../../components/DeleteChargeModal";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import ChargeTable from "./components/ChargeTable";
import iconCicleX from "../../assets/icons/circleX.svg"
import EditChargeModal from "../../components/ChargeModalEdit";
import "./style.css";
function Charge() {
  const [chargeId, setChargeId] = useState("");
  const [chargeStatus, setChargeStatus] = useState("");
  const [delSuccessAlert, setDelChargeSuccessAlert] = useState();
  const [openDeleteChargeModal, setOpenDeleteChargeModal] = useState(false)
  const [delUnsuccessfullyAlert, setDelUnsuccessfullyAlert] = useState();
  const [editChargeSuccessAlert, setEditChargeSuccessAlert] = useState(false);
  const [openEditChargeModal, setOpenEditChargeModal] = useState(false);
  const [chargeData, setChargeData] = useState("")
  const chargeBreadcrubs = [
    <Link
      key="1"
      color="#0e8750"
      fontWeight="400"
      href="/charge"
      sx={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--subtitle)",
      }}
    >
      Cobranças
    </Link>,
  ];

  useEffect(() => {
    if (delSuccessAlert || delUnsuccessfullyAlert || editChargeSuccessAlert) {
      const timer = setTimeout(() => {
        setDelChargeSuccessAlert(false);
        setDelUnsuccessfullyAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [delSuccessAlert, delUnsuccessfullyAlert, editChargeSuccessAlert]);

  return (
    <>
      <Stack width="100%" direction="row">
        <SideNavigation />
        <Stack
          width="100%"
          sx={{
            padding: "40px 32px 40px",
            backgroundColor: "var(--gray-100)",
          }}
          marginLeft="108px"
        >
          {openDeleteChargeModal && (
            <DeleteChargeModal
              setOpenDeleteChargeModal={setOpenDeleteChargeModal}
              setDelUnsuccessfullyAlert={setDelUnsuccessfullyAlert}
              setDelChargeSuccessAlert={setDelChargeSuccessAlert}
              chargeStatus={chargeStatus}
              chargeId={chargeId}
            />
          )}

          {openEditChargeModal && (
            <EditChargeModal
              setEditChargeSuccessAlert={setEditChargeSuccessAlert}
              setOpenEditChargeModal={setOpenEditChargeModal}
              chargeData={chargeData}
            />
          )}

          <Header headerTitle="" breadcrumbs={chargeBreadcrubs} />

          <div className="charge__header">
            <div className="charge__title">
              <img src={ChargeIcon} alt="Icone Cliente" />
              <h1>Cobranças</h1>
            </div>

            <div className="charge__filters">
              <img src={ChargeFilter} />

              <div className="charge__search">
                <input
                  type="text"
                  className="charge__search-box"
                  placeholder="Pesquisa"
                />
                <img src={ChargeSearch} id="searchBtn" alt="Pesquisa" />
              </div>
            </div>
          </div>

          <div className="charge__main">
            <ChargeTable
              setOpenDeleteChargeModal={setOpenDeleteChargeModal}
              setChargeStatus={setChargeStatus}
              setChargeId={setChargeId}
              setChargeData={setChargeData}
              setOpenEditChargeModal={setOpenEditChargeModal}
            />

          </div>
          <Stack position="relative">
            {delSuccessAlert && (
              <Alert
                iconMapping={{
                  success: (
                    <CheckCircleOutlineIcon color="info" fontSize="inherit" />
                  ),
                }}
                onClose={() => setDelChargeSuccessAlert(false)}
                sx={{
                  position: "fixed",
                  bottom: "4.125rem",
                  right: "7rem",

                  width: "20.625rem",
                  height: "3.375rem",
                  paddingTop: "9px",

                  fontFamily: "var(--font-subtitle)",
                  color: "var(--blue-700)",

                  borderRadius: "10px",
                  backgroundColor: "var(--blue-300)",
                }}
              >
                Cobrança excluída com sucesso!
              </Alert>
            )}

            {delUnsuccessfullyAlert && (
              <Alert
                icon={<img src={iconCicleX} alt="icon fechar" />}
                onClose={() => setDelUnsuccessfullyAlert(false)}
                sx={{
                  position: "fixed",
                  bottom: "4.125rem",
                  right: "7rem",

                  width: "22.0625rem",
                  height: "3.375rem",
                  paddingTop: "9px",

                  fontFamily: "var(--font-subtitle)",
                  color: "var(--red-700)",

                  borderRadius: "10px",
                  backgroundColor: "var(--red-100)",
                }}
              >
                Esta cobrança não pode ser excluída!
              </Alert>
            )}

            {editChargeSuccessAlert && (
              <Alert
                iconMapping={{
                  success: (
                    <CheckCircleOutlineIcon color="info" fontSize="inherit" />
                  ),
                }}
                onClose={() => setEditChargeSuccessAlert(false)}
                sx={{
                  position: "fixed",
                  bottom: "4.125rem",
                  right: "7rem",

                  width: "20.625rem",
                  height: "3.375rem",
                  paddingTop: "9px",

                  fontFamily: "var(--font-subtitle)",
                  color: "var(--blue-700)",

                  borderRadius: "10px",
                  backgroundColor: "var(--blue-300)",
                }}
              >
                Cobrança editada com sucesso!
              </Alert>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Charge;
