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

import { useEffect, useState, useContext } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "components/DashboardLayout";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

// Data
import subjectsData from "layouts/subjects/data/subjectsData";

// Custom classes
import { getUserDoc } from "utils/GoogleAPI";

// Global context
import { GlobalContext } from "context";

function Subjects() {
  // Global context
  const ctx = useContext(GlobalContext);

  const [loading, setLoading] = useState(true);
  const [userDoc, setUserDoc] = useState({});

  useEffect(() => {
    async function load() {
      // Fetch timetable
      const doc = await getUserDoc(ctx.userInfo.email);
      setUserDoc(doc);

      setLoading(false);
    }
    load();
  }, []);

  if (loading) return null;

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={7}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Quick Actions
                </MDTypography>
              </MDBox>
              <MDBox pt={6} py={2} lineHeight={1.25} textAlign="center">
                <MDButton variant="gradient" color="error" size="large" px={1}>
                  <Icon fontSize="large">delete</Icon>
                  &nbsp; delete selected
                </MDButton>
              </MDBox>
              <MDBox pt={6} py={2} lineHeight={1.25} textAlign="center">
                <MDButton variant="gradient" color="error" size="large" px={1}>
                  <Icon fontSize="large">delete</Icon>
                  &nbsp; delete all subjects
                </MDButton>
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={5}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Subjects
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={subjectsData(JSON.parse(userDoc.data().subjects))}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
      <MDBox
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="3.25rem"
        height="3.25rem"
        bgColor="success"
        shadow="sm"
        borderRadius="50%"
        position="fixed"
        right="2rem"
        bottom="2rem"
        zIndex={99}
        color="white"
        sx={{ cursor: "pointer" }}
        onClick={() => {}}
      >
        <Icon fontSize="small" color="inherit">
          add
        </Icon>
      </MDBox>
    </DashboardLayout>
  );
}

export default Subjects;
