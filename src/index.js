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

import { React, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "App";

// Material Dashboard 2 React Context Provider
import { MaterialUIControllerProvider, GlobalContext } from "context";

// Cookies
import { CookiesProvider } from "react-cookie";

// Google API OAuth
import { GoogleOAuthProvider } from "@react-oauth/google";

const container = document.getElementById("app");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </CookiesProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
