/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { CheckBox } from "@mui/icons-material";

export default function data(subs) {
  const renderRows = () => {
    let ret = [];
    subs.forEach((sub) => {
      ret.push({
        code: (
          <MDBox textAlign="left" alignItems="center" lineHeight={1}>
            <MDTypography
              display="block"
              variant="caption"
              fontWeight="medium"
              color="text"
            >
              {sub.code}
            </MDTypography>
          </MDBox>
        ),
        name: (
          <MDBox textAlign="left" alignItems="center" lineHeight={1}>
            <MDTypography
              display="block"
              variant="caption"
              fontWeight="medium"
              color="text"
            >
              {sub.name}
            </MDTypography>
          </MDBox>
        ),
        actions: (
          <MDBox textAlign="left" alignItems="center" lineHeight={1}>
            <CheckBox onChange={console.log(sub.code)} />
          </MDBox>
        ),
      });
    });
    return ret;
  };

  return {
    columns: [
      { Header: "code", accessor: "code", width: "10%", align: "left" },
      { Header: "name", accessor: "name", width: "30%", align: "left" },
      { Header: "actions", accessor: "actions", width: "60%", align: "left" },
    ],

    rows: renderRows(),
  };
}
