import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Alert, Link, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import ChargeFilter from "../../assets/icons/chargeIcons/chargeFilter.svg";
import ChargeIcon from "../../assets/icons/chargeIcons/chargeIcon.svg";
import ChargeSearch from "../../assets/icons/chargeIcons/chargeSearch.svg";
import iconCicleX from "../../assets/icons/circleX.svg";
import EditChargeModal from "../../components/ChargeModalEdit";
import DeleteChargeModal from "../../components/DeleteChargeModal";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import ChargeTable from "./components/ChargeTable";
import useGlobal from "../../hooks/useGlobal";
import AlertPopup from "../../components/AlertPopup";
import "./style.css";

function Charge() {
  const [chargeId, setChargeId] = useState("");
  const [chargeStatus, setChargeStatus] = useState("");
  const [chargeData, setChargeData] = useState("");

  const { showAlert, setShowAlert } = useGlobal();

  const [openDeleteChargeModal, setOpenDeleteChargeModal] = useState(false);
  const [openEditChargeModal, setOpenEditChargeModal] = useState(false);

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
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [showAlert]);

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
              chargeStatus={chargeStatus}
              chargeId={chargeId}
            />
          )}

          {openEditChargeModal && (
            <EditChargeModal
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
              setChargeStatus={setChargeStatus}
              setChargeId={setChargeId}
              setChargeData={setChargeData}
              setOpenEditChargeModal={setOpenEditChargeModal}
              setOpenDeleteChargeModal={setOpenDeleteChargeModal}
            />
          </div>
          <Stack position="relative">
            {showAlert && <AlertPopup showAlert={showAlert} setShowAlert={setShowAlert} />}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Charge;
