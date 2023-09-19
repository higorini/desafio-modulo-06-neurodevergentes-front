import { Grid, Stack } from "@mui/material";
import DefaultingCustomer from "../../assets/icons/mainIcons/defaultingCustomerHome.svg";
import LoyalCustomer from "../../assets/icons/mainIcons/loyalCustomerHome.svg";
import OverdueBill from "../../assets/icons/mainIcons/overdueBill.svg";
import PaidBill from "../../assets/icons/mainIcons/paidBill.svg";
import PendingBill from "../../assets/icons/mainIcons/pendingCharge.svg";
import Header from "../../components/Header";
import SideNavigation from "../../components/sideNavigation";
import ChargesCard from "./components/ChargesCard";
import ClientsCard from "./components/ClientsCard";
import SummaryCharge from "./components/SummaryCharge";

import { useState } from "react";

import EditUserModal from "../../components/EditUserModal";
import "./style.css";

function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Stack width="100%" maxWidth="1440px" direction="row">
      {openModal && <EditUserModal setOpenModal={setOpenModal} />}
      <SideNavigation />
      <Stack
        width="100%"
        sx={{
          padding: "40px 32px 40px 32px",
          backgroundColor: "var(--gray-100)",
        }}
        marginLeft="108px"
      >
        <Header
          userName="Lorena"
          headerTitle="Resumo das contas"
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <SummaryCharge
              imageSrc={PaidBill}
              summaryText="Cobranças Pagas"
              summaryValue="R$30.000"
              bgColor="var(--seagreen-100)"
            />
          </Grid>
          <Grid item xs={4}>
            <SummaryCharge
              imageSrc={OverdueBill}
              summaryText="Cobranças Vencidas"
              summaryValue="R$7.000"
              bgColor="var(--ruby-100)"
            />
          </Grid>
          <Grid item xs={4}>
            <SummaryCharge
              imageSrc={PendingBill}
              summaryText="Cobranças Previstas"
              summaryValue="R$10.000"
              bgColor="var(--gold-100)"
            />
          </Grid>
          <Grid item xs={4}>
            <ChargesCard
              chargeTitle="Cobranças Pagas"
              bgIndexColor="var(--seagreen-100)"
              indexColor="var(--seagreen-700)"
              indexNumber="10"
            />
          </Grid>
          <Grid item xs={4}>
            <ChargesCard
              chargeTitle="Cobranças Vencidas"
              bgIndexColor="var(--ruby-100)"
              indexColor="var(--ruby-700)"
              indexNumber="08"
            />
          </Grid>
          <Grid item xs={4}>
            <ChargesCard
              chargeTitle="Cobranças Previstas"
              bgIndexColor="var(--gold-100)"
              indexColor="var(--gold-700)"
              indexNumber="05"
            />
          </Grid>
          <Grid item xs={6}>
            <ClientsCard
              clientTitleIcon={LoyalCustomer}
              clientTableTitle="Clientes em dia"
              bgIndexColor="var(--seagreen-100)"
              indexColor="var(--seagreen-700)"
              indexNumber="10"
            />
          </Grid>
          <Grid item xs={6}>
            <ClientsCard
              clientTitleIcon={DefaultingCustomer}
              clientTableTitle="Clientes inadimplentes"
              bgIndexColor="var(--ruby-100)"
              indexColor="var(--ruby-700)"
              indexNumber="08"
            />
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Home;
