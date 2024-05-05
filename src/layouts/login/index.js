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

import { useContext } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar"; // Used for showing logo

// @mui icons
import GoogleIcon from "@mui/icons-material/Google";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// Authentication layout components
import BasicLayout from "components/BasicLayout";

// Images
import bgImage from "assets/images/bg-kmpp-pentadbiran.jpg";
import brand from "assets/images/logo-plect-white.png";

// Google API OAuth
import { useGoogleLogin } from "@react-oauth/google";

// Global context
import { GlobalContext } from "context";

function Login() {
  // Global context
  const ctx = useContext(GlobalContext);

  // When "Sign in with Google button" is clicked
  const onClickLogin = useGoogleLogin({
    scope: process.env.REACT_APP_GOOGLE_OAUTH_SCOPE,
    onSuccess: (res) => {
      console.log(res); //TO BE REMOVED
      ctx.setAccessToken(res.access_token);
    },
  });

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <Grid
            container
            spacing={1}
            justifyContent="center"
            sx={{ mt: 1, mb: 1 }}
          >
            <Grid item>
              <Avatar alt="plect" src={brand} sx={{ width: 64, height: 64 }} />
            </Grid>
          </Grid>
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Login to plect
          </MDTypography>
          <MDTypography variant="h6" fontWeight="medium" color="white" mt={1}>
            with your KM-Pensyarah account
          </MDTypography>
        </MDBox>
        <MDBox pt={2} pb={3} px={3} textAlign="center">
          <MDBox component="form" role="form">
            <MDBox mt={1} mb={1}>
              <MDButton
                variant="gradient"
                color="warning"
                onClick={() => onClickLogin()}
              >
                <GoogleIcon />
                &nbsp; sign in with google
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default Login;
