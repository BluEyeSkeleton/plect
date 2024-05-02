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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MuiLink from "@mui/material/Link";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React base styles
import typography from "assets/theme/base/typography";

function LoginFooter({ light }) {
  const { size } = typography;

  return (
    <MDBox position="absolute" width="100%" bottom={0} py={4}>
      <Container>
        <MDBox
          width="100%"
          display="flex"
          flexDirection={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          alignItems="center"
          px={1.5}
        >
          <MDBox
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            color={light ? "white" : "text"}
            fontSize={size.sm}
          >
            &copy; 2024, Created and owned by Ong Yean (
            <Link href="https://github.com/BluEyeSkeleton" target="_blank">
              <MDTypography
                variant="button"
                fontWeight="medium"
                color={light ? "white" : "dark"}
              >
                &nbsp;BluEyeSkeleton&nbsp;
              </MDTypography>
            </Link>
            ). Website template by
            <Link href="https://www.creative-tim.com/" target="_blank">
              <MDTypography
                variant="button"
                fontWeight="medium"
                color={light ? "white" : "dark"}
              >
                &nbsp;Creative Tim.&nbsp;
              </MDTypography>
            </Link>
          </MDBox>
          <MDBox
            component="ul"
            sx={({ breakpoints }) => ({
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              listStyle: "none",
              mt: 3,
              mb: 0,
              p: 0,

              [breakpoints.up("lg")]: {
                mt: 0,
              },
            })}
          >
            <MDBox component="li" px={2} lineHeight={1}>
              <Link
                href="https://github.com/BluEyeSkeleton/plect"
                target="_blank"
              >
                <MDTypography
                  component={MuiLink}
                  variant="body1"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  <GitHubIcon color="inherit" />
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link
                href="https://www.youtube.com/@blueyeskeleton"
                target="_blank"
              >
                <MDTypography
                  component={MuiLink}
                  variant="body1"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  <YouTubeIcon color="inherit" />
                </MDTypography>
              </Link>
            </MDBox>
            <MDBox component="li" px={2} lineHeight={1}>
              <Link
                href="https://www.instagram.com/ong_yean.0131"
                target="_blank"
              >
                <MDTypography
                  component={MuiLink}
                  variant="body1"
                  fontWeight="regular"
                  color={light ? "white" : "dark"}
                >
                  <InstagramIcon color="inherit" />
                </MDTypography>
              </Link>
            </MDBox>
          </MDBox>
        </MDBox>
      </Container>
    </MDBox>
  );
}

// Setting default props for the Footer
LoginFooter.defaultProps = {
  light: false,
};

// Typechecking props for the Footer
LoginFooter.propTypes = {
  light: PropTypes.bool,
};

export default LoginFooter;
