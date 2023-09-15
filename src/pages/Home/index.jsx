import { Box, Grid, Stack, Typography } from "@mui/material";
import OverdueBill from "../../assets/icons/mainIcons/overdueBill.svg";
import PaidBill from "../../assets/icons/mainIcons/paidBill.svg";
import PendingBill from "../../assets/icons/mainIcons/pendingCharge.svg";
import SideNavigation from "../../components/sideNavigation";
import SummaryCharge from "./components/SummaryCharge";
import "./style.css";

function Home() {
  return (
    <Stack width="100%" maxWidth="1440px" direction="row">
      <SideNavigation />
      <Stack
        // alignItems="center"
        width="100%"
        sx={{
          padding: "40px 32px 0 32px",
        }}
      >
        <Stack height="72px" direction="row" justifyContent="space-between">
          <Typography
            component="h1"
            sx={{
              fontFamily: "var(--font-title)",
              fontSize: "var(--title-xl)",
            }}
          >
            Resumo das contas
          </Typography>
          <Box>
            <Typography>Nome</Typography>
          </Box>
        </Stack>
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
            <Box
              // width="100%"
              height="400px"
              sx={{
                boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
              }}
            >
              1
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              // width="100%"
              height="400px"
              sx={{
                boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
              }}
            >
              1
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              // width="100%"
              height="400px"
              sx={{
                boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
              }}
            >
              1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              // width="100%"
              height="400px"
              sx={{
                boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
              }}
            >
              1
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              // width="100%"
              height="400px"
              sx={{
                boxShadow: "0px 4px 4px rgba(172, 217, 197, 0.25)",
              }}
            >
              1
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Stack>
  );
}

export default Home;
