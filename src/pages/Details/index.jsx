import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link, Stack, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import iconCicleX from "../../assets/icons/circleX.svg";
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
import "./style.css";

function Details() {
  const { id } = useParams();
  const [openCharge, setOpenCharge] = useState(false);
  const [dataClient, setDataClient] = useState({
    personalData: "",
    charges: "",
  });
  const [openEditModal, setOpenEditModal] = useState(false);

  const [chargeData, setChargeData] = useState("");
  const [openEditChargeModal, setOpenEditChargeModal] = useState(false);
  const [chargeId, setChargeId] = useState("");
  const [chargeStatus, setChargeStatus] = useState("");
  const [openDeleteChargeModal, setOpenDeleteChargeModal] = useState(false);
  const [delUnsuccessfullyAlert, setDelUnsuccessfullyAlert] = useState(false);
  const [delChargeSuccessAlert, setDelChargeSuccessAlert] = useState(false);
  const [editChargeSuccessAlert, setEditChargeSuccessAlert] = useState(false);

  const { addChargeSuccessAlert, setAddChargeSuccessAlert } = useGlobal(false);

  useEffect(() => {
    async function loadDataCustomer() {
      const response = await loadDetailsCustomer(id);
      setDataClient((prevValue) => ({
        ...prevValue,
        personalData: response.personalData,
        charges: response.charges,
      }));
    }
    if (
      addChargeSuccessAlert ||
      editChargeSuccessAlert ||
      delChargeSuccessAlert ||
      delUnsuccessfullyAlert
    ) {
      const timer = setTimeout(() => {
        setAddChargeSuccessAlert(false);
        setDelChargeSuccessAlert(false);
        setDelUnsuccessfullyAlert(false);
        setEditChargeSuccessAlert(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
    loadDataCustomer();
  }, [
    addChargeSuccessAlert,
    editChargeSuccessAlert,
    delChargeSuccessAlert,
    delUnsuccessfullyAlert,
    openEditModal,
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

          {openEditModal && (
            <EditCustomerModal
              setOpenEditModal={setOpenEditModal}
              personalData={dataClient.personalData}
            />
          )}

          {openEditChargeModal && (
            <EditChargeModal
              setEditChargeSuccessAlert={setEditChargeSuccessAlert}
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
                setChargeStatus={setChargeStatus}
                setChargeId={setChargeId}
                detailsCharge={dataClient.charges}
                setDataClient={setDataClient}
                setOpenDeleteChargeModal={setOpenDeleteChargeModal}
                setOpenCharge={setOpenCharge}
                setOpenEditChargeModal={setOpenEditChargeModal}
              />
            </div>
          </div>
          <Stack position="relative">
            {addChargeSuccessAlert && (
              <Alert
                iconMapping={{
                  success: (
                    <CheckCircleOutlineIcon color="info" fontSize="inherit" />
                  ),
                }}
                onClose={() => setAddChargeSuccessAlert(false)}
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
                Cobrança cadastrada com sucesso
              </Alert>
            )}
            {delChargeSuccessAlert && (
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

export default Details;
