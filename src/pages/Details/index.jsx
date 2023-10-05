import { Link, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientIcon from "../../assets/icons/clients.svg";
import AddCharge from "../../components/ChargeModal";
import EditChargeModal from "../../components/ChargeModalEdit";
import DeleteChargeModal from "../../components/DeleteChargeModal";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import useGlobal from "../../hooks/useGlobal";
import { loadDetailsCustomer } from "../../services";
import DetailsCharge from "./components/DetailsCharge";
import DetailsClient from "./components/DetailsClient";
import EditCustomerModal from "./components/EditCustomerModal";
import AlertPopup from "../../components/AlertPopup";
import "./style.css";

function Details() {
  const { id } = useParams();

  const [openCharge, setOpenCharge] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openEditChargeModal, setOpenEditChargeModal] = useState(false);
  const [openDeleteChargeModal, setOpenDeleteChargeModal] = useState(false);

  const [dataClient, setDataClient] = useState({
    personalData: "",
    charges: "",
  });

  const [chargeData, setChargeData] = useState("");

  const { showAlert, setShowAlert } = useGlobal(false);

  useEffect(() => {
    async function loadDataCustomer() {
      const response = await loadDetailsCustomer(id);
      setDataClient((prevValue) => ({
        ...prevValue,
        personalData: response.personalData,
        charges: response.charges,
      }));
    }
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
    loadDataCustomer();
  }, [
    openCharge,
    showAlert,
    openEditModal,
    openDeleteChargeModal,
  ]);

  const customerDetailsBreadcrubs = [
    <Link
      key="1"
      color="#0e8750"
      fontWeight="400"
      href="/customer"
      sx={{
        fontFamily: "var(--font-body)",
        fontSize: "var(--subtitle)",
      }}
    >
      Clientes
    </Link>,
    <Typography
      key="2"
      fontFamily="var(--font-body)"
      fontSize="var(--subtitle)"
      color="var(--gray-600)"
    >
      Detalhes do cliente
    </Typography>,
  ];

  return (
    <>
      <Stack width="100%" direction="row">
        <SideNavigation />
        <Stack
          width="100%"
          sx={{
            padding: "40px 32px 40px",
            backgroundColor: "var(--gray-100)",
            overflowX: "hidden"
          }}
          marginLeft="108px"
        >
          {openDeleteChargeModal && (
            <DeleteChargeModal
              setOpenDeleteChargeModal={setOpenDeleteChargeModal}
              chargeData={chargeData}
            />
          )}

          {openEditModal && (
            <EditCustomerModal
              setOpenEditModal={setOpenEditModal}
              personalData={dataClient.personalData}
            />
          )}

          {openEditChargeModal && (
            <EditChargeModal
              setOpenEditChargeModal={setOpenEditChargeModal}
              chargeData={chargeData}
            />
          )}

          {openCharge && (
            <AddCharge
              setOpenCharge={setOpenCharge}
              selectedClientId={id}
              selectedClientName={dataClient.personalData.name}
            />
          )}

          <Header headerTitle="" breadcrumbs={customerDetailsBreadcrubs} />

          <div className="details__header">
            <div className="details__title">
              <img src={ClientIcon} alt="Icone Cliente" />
              <h1>{dataClient.personalData.name}</h1>
            </div>
          </div>

          <div className="details__main">
            <div>
              <DetailsClient
                detailsClient={dataClient.personalData}
                setOpenEditModal={setOpenEditModal}
              />
            </div>
            <div>
              <DetailsCharge
                setChargeData={setChargeData}
                detailsCharge={dataClient.charges}
                setDataClient={setDataClient}
                setOpenDeleteChargeModal={setOpenDeleteChargeModal}
                setOpenCharge={setOpenCharge}
                setOpenEditChargeModal={setOpenEditChargeModal}
              />
            </div>
          </div>
          <Stack position="relative">
            {showAlert && <AlertPopup showAlert={showAlert} setShowAlert={setShowAlert} />}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export default Details;
