import { Link, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import ChargeFilter from "../../assets/icons/chargeIcons/chargeFilter.svg";
import ChargeIcon from "../../assets/icons/chargeIcons/chargeIcon.svg";
import ChargeSearch from "../../assets/icons/chargeIcons/chargeSearch.svg";
import AlertPopup from "../../components/AlertPopup";
import EditChargeModal from "../../components/ChargeModalEdit";
import DeleteChargeModal from "../../components/DeleteChargeModal";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import useGlobal from "../../hooks/useGlobal";
import { searchCharge } from "../../services";
import ChargeDetails from "./components/ChargeDetails";
import ChargeTable from "./components/ChargeTable";
import "./style.css";

function Charge() {
  const [chargeData, setChargeData] = useState("");

  const { showAlert, setShowAlert, charges, setSelectedCharge, chargesHome } = useGlobal();

  const [openDeleteChargeModal, setOpenDeleteChargeModal] = useState(false);
  const [openEditChargeModal, setOpenEditChargeModal] = useState(false);
  const [openChargeDetails, setOpenChargeDetails] = useState(false);
  const [chargeToSearch, setChargeToSearch] = useState("");

  const chargeBreadcrubs = [
    <RouterLink
      key="1"
      to="/charge"
      style={{
        textDecoration: "none",
      }}
    >
      <Link
        color="#0e8750"
        fontWeight="400"
        sx={{
          fontFamily: "var(--font-body)",
          fontSize: "var(--subtitle)",
        }}
      >
        Cobranças
      </Link>
    </RouterLink>,
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
    chargesHome ? setSelectedCharge(chargesHome) : setSelectedCharge(charges)
  }, [showAlert, charges]);

  async function loadChargeOnSearch(charge) {
    const response = await searchCharge({ searchCharge: charge });
    setSelectedCharge(response.data);
  }

  function handleSearchCharge(e) {
    if (e.target.value === "") {
      setSelectedCharge(charges);
      setChargeToSearch("");
      return;
    }
    setChargeToSearch(e.target.value);
  }

  async function onSearchCharge(e) {
    if (e.keyCode !== 13 || chargeToSearch.length === 0) {
      return;
    }
    await loadChargeOnSearch(chargeToSearch);
  }

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
          {openChargeDetails && (
            <ChargeDetails
              setOpenChargeDetails={setOpenChargeDetails}
              chargeData={chargeData}
            />
          )}

          {openDeleteChargeModal && (
            <DeleteChargeModal
              setOpenDeleteChargeModal={setOpenDeleteChargeModal}
              chargeData={chargeData}
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
                  value={chargeToSearch}
                  onChange={(e) => handleSearchCharge(e)}
                  onBlur={onSearchCharge}
                  onKeyDown={(e) => onSearchCharge(e)}
                />
                <img src={ChargeSearch} id="searchBtn" alt="Pesquisa" />
              </div>
            </div>
          </div>

          <div className="charge__main">
            <ChargeTable
              setChargeData={setChargeData}
              setOpenEditChargeModal={setOpenEditChargeModal}
              setOpenDeleteChargeModal={setOpenDeleteChargeModal}
              setOpenChargeDetails={setOpenChargeDetails}
            />
          </div>
          <Stack position="relative">
            {showAlert && (
              <AlertPopup showAlert={showAlert} setShowAlert={setShowAlert} />
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Charge;
