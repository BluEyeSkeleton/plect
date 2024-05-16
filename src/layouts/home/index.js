/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";

// @mui icons
import LogoutIcon from "@mui/icons-material/Logout";
import UpdateIcon from "@mui/icons-material/Update";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import DashboardLayout from "components/DashboardLayout";
import Footer from "components/Footer";
import MDButton from "components/MDButton";

// Material Dashboard 2 React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import bgImage from "assets/images/bg-kmpp-pentadbiran.jpg";

// Global context
import { GlobalContext } from "context";

function Home() {
  // Global context
  const ctx = useContext(GlobalContext);

  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  // Header things
  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

  return (
    <DashboardLayout>
      <MDBox mb={2} />
      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          justifyContent="center"
          sx={{
            backgroundImage: ({
              functions: { rgba, linearGradient },
              palette: { gradients },
            }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        >
          <MDTypography variant="h1" fontWeight="medium" color="white" mt={1}>
            Selamat datang! Jom "plect" (pergi lecture)
          </MDTypography>
        </MDBox>
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <MDAvatar
                src={ctx.userInfo.picture}
                alt="profile-image"
                size="xl"
                shadow="sm"
              />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  {ctx.userInfo.name}
                </MDTypography>
                <MDTypography
                  variant="button"
                  color="text"
                  fontWeight="regular"
                >
                  {ctx.userInfo.email}
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <AppBar position="static">
                <Tabs
                  orientation={tabsOrientation}
                  value={tabValue}
                  onChange={handleSetTabValue}
                >
                  <MDButton
                    variant="outlined"
                    color="success"
                    size="small"
                    px={1}
                  >
                    <UpdateIcon fontSize="small" sx={{ mt: -0.25 }} />
                    &nbsp; update timetable
                  </MDButton>
                  <Link to="/logout">
                    <MDButton
                      variant="outlined"
                      color="info"
                      size="small"
                      px={1}
                    >
                      <LogoutIcon fontSize="small" sx={{ mt: -0.25 }} />
                      &nbsp; sign out
                    </MDButton>
                  </Link>
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <MDBox mt={5} mb={3}>
            <MDBox display="flex" justifyContent="center">
              <MDTypography variant="h2" fontWeight="medium" mt={1}>
                How to use?
              </MDTypography>
            </MDBox>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4}>
                <MDBox p={2}>
                  <MDTypography variant="h6" fontWeight="medium">
                    1. Create your timetable
                  </MDTypography>
                </MDBox>
                <Card sx={{ boxShadow: "none" }}>
                  <MDBox p={2}>
                    <MDBox mb={2} lineHeight={1}>
                      <MDTypography
                        variant="button"
                        color="text"
                        fontWeight="light"
                      >
                        Enter your weekly timetable details. Worry not about
                        possible timetable amendments in the future as you can
                        make changes to the timetable saved here.
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <MDBox p={2}>
                  <MDTypography variant="h6" fontWeight="medium">
                    2. Update your Google Calendar
                  </MDTypography>
                </MDBox>
                <Card sx={{ boxShadow: "none" }}>
                  <MDBox p={2}>
                    <MDBox mb={2} lineHeight={1}>
                      <MDTypography
                        variant="button"
                        color="text"
                        fontWeight="light"
                      >
                        Now you have your weekly timetable saved, plect will
                        make updates to your Google Calendar according to your
                        preference. You may choose to update it manually by
                        signing in to plect and click &nbsp;
                        <MDTypography
                          variant="caption"
                          fontWeight="bold"
                          color="success"
                          textTransform="uppercase"
                        >
                          <UpdateIcon fontSize="small" sx={{ m: -0.5 }} />
                          &nbsp; update timetable
                        </MDTypography>
                        , or let plect handle it automatically on a weekly
                        basis.
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </Card>
              </Grid>
              <Grid item xs={12} xl={4}>
                <MDBox p={2}>
                  <MDTypography variant="h6" fontWeight="medium">
                    3. Google Calendar will get the job done!
                  </MDTypography>
                </MDBox>
                <Card sx={{ boxShadow: "none" }}>
                  <MDBox p={2}>
                    <MDBox mb={2} lineHeight={1}>
                      <MDTypography
                        variant="button"
                        color="text"
                        fontWeight="light"
                      >
                        Google Calendar will remind you of your upcoming
                        lectures. Be sure to enable notifications on your phone
                        so that you don't miss any reminders!
                      </MDTypography>
                    </MDBox>
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
          <MDBox pt={2} px={2} lineHeight={1.25} textAlign="center">
            <Link to="/timetables">
              <MDButton variant="gradient" color="success" size="large" px={1}>
                <CalendarMonthIcon fontSize="large" sx={{ mt: -0.25 }} />
                &nbsp; go to timetables
              </MDButton>
            </Link>
          </MDBox>
        </Card>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Home;
