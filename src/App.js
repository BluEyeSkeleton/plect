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

import { useState, useEffect } from "react";

// react-router components
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDSnackbar from "components/MDSnackbar";

// Material Dashboard 2 React example components
import Sidenav from "components/Sidenav";
import Configurator from "examples/Configurator";

// Material Dashboard 2 React themes
import theme from "assets/theme";

// Material Dashboard 2 React Dark Mode themes
import themeDark from "assets/theme-dark";

// Material Dashboard 2 React routes
import routes from "routes";

// Material Dashboard 2 React contexts
import {
  useMaterialUIController,
  setMiniSidenav,
  setOpenConfigurator,
  GlobalContext,
} from "context";

// Cookies
import { useCookies } from "react-cookie";

// Custom classes
import { validateToken } from "utils/GoogleAPI";

// Images
import brandWhite from "assets/images/logo-plect-white.png";
import brandDark from "assets/images/logo-plect-black.png";

export default function App() {
  // Cookies
  const [cookies, setCookie] = useCookies(["access_token"]);

  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  // Custom states (global variables) for authentication purposes
  const [accessToken, setAccessToken] = useState(cookies.access_token);
  const [auth, setAuth] = useState(false);

  // State values for snackbars
  const [reloadWarning, setReloadWarning] = useState(false);
  const openReloadWarning = () => setReloadWarning(true);
  const closeReloadWarning = () => setReloadWarning(false);

  // Get pathname and navigateTo() method
  const { pathname } = useLocation();
  const navigateTo = useNavigate();

  // Render reload warning snackbar
  const renderReloadWarning = (
    <MDSnackbar
      color="warning"
      icon="star"
      title="Warning"
      content={
        "Reloading will cause the web app to lose access " +
        "to your Google account, and you will have to sign in again!"
      }
      dateTime="nope"
      open={reloadWarning}
      onClose={closeReloadWarning}
      close={closeReloadWarning}
      bgWhite
    />
  );

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // Change the openConfigurator state
  const handleConfiguratorOpen = () =>
    setOpenConfigurator(dispatch, !openConfigurator);

  // Handle user reloads
  useEffect(() => {
    const onBeforeUnload = (event) => {
      openReloadWarning();
      event.returnValue = "Are you sure you want to reload?";
      return "Are you sure you want to reload?";
    };
    window.addEventListener("beforeunload", onBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

  // Setting the dir attribute for the body element
  useEffect(() => {
    document.body.setAttribute("dir", direction);
  }, [direction]);

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  // Called after change in auth state
  useEffect(() => {
    navigateTo("/", { replace: true });
  }, [auth]);

  // Called when access token is updated
  useEffect(() => {
    setCookie("access_token", accessToken, {
      maxAge: 3599, // Expires after 1 hour
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
    });
    async function load() {
      const isValid = await validateToken(accessToken);
      setAuth(isValid);
    }
    load();
  }, [accessToken]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return (
          <Route
            exact
            path={route.route}
            element={route.component}
            key={route.key}
          />
        );
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  return (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <GlobalContext.Provider value={{ auth, accessToken, setAccessToken }}>
        <CssBaseline />
        {layout === "plect" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={
                (transparentSidenav && !darkMode) || whiteSidenav
                  ? brandDark
                  : brandWhite
              }
              brandName="plect"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        {renderReloadWarning}
        {!auth && pathname !== "/login" ? (
          // If access token invalid
          <Navigate to="/login" />
        ) : (
          <Routes>
            {getRoutes(routes)}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        )}
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}
