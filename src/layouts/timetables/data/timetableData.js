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
import MDBadge from "components/MDBadge";

import { toTime24 } from "utils/TimetableBuilder";

export default function data(t, w) {
  const renderColumn = () => {
    const ret = [
      { Header: "day", accessor: "day", width: "5%", align: "left" },
    ];
    if (w === 0) {
      ret.push({
        Header: "no data found, go add some now",
        accessor: "n",
        align: "center",
      });
      return ret;
    }
    for (let i = 0; i < w; i++) {
      const h = `${toTime24(t.startTime + i * t.interval)}-${toTime24(
        t.startTime + (i + 1) * t.interval
      )}`;
      ret.push({ Header: h, accessor: i.toString(), align: "center" });
    }
    console.log(ret);
    return ret;
  };

  const Day = ({ name }) => (
    <MDBox textAlign="left" alignItems="center" lineHeight={1}>
      <MDTypography display="block" variant="caption" fontWeight="medium">
        {name}
      </MDTypography>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography
        display="block"
        variant="caption"
        color="text"
        fontWeight="medium"
      >
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: renderColumn(),

    rows: [
      {
        day: <Day name="SUN" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="online"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            23/04/18
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        day: <Day name="MON" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="offline"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            11/01/19
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        day: <Day name="TUE" />,
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="online"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            19/09/17
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        day: <Day name="WED" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="online"
              color="success"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            24/12/08
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        day: <Day name="THU" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="offline"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            04/10/21
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
      {
        day: <Day name="FRI" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge
              badgeContent="offline"
              color="dark"
              variant="gradient"
              size="sm"
            />
          </MDBox>
        ),
        employed: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            14/09/20
          </MDTypography>
        ),
        action: (
          <MDTypography
            component="a"
            href="#"
            variant="caption"
            color="text"
            fontWeight="medium"
          >
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
