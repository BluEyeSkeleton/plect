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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "components/DashboardLayout";
import Footer from "components/Footer";
import DataTable from "components/DataTable";

// Data
import timetableData from "layouts/timetables/data/timetableData";

// Custom classes
import { getUserTimetable } from "utils/GoogleAPI";
import { getMaxWidth } from "utils/TimetableBuilder";

// Global context
import { GlobalContext } from "context";

function Timetables() {
  // Global context
  const ctx = useContext(GlobalContext);

  const [loading, setLoading] = useState(true);
  const [timetable, setTimetable] = useState({});

  useEffect(() => {
    async function load() {
      // Fetch timetable
      const t = await getUserTimetable(ctx.userInfo.email);
      setTimetable(t);

      setLoading(false);
    }
    load();
  }, []);

  if (loading) return null;

  return (
    <DashboardLayout>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
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
                  Timetable
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={timetableData(timetable, getMaxWidth(timetable))}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
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
              <MDBox pt={3}>&nbsp;</MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Timetables;
