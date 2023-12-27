/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { BsCreditCardFill } from "react-icons/bs";
import { SiDropbox } from "react-icons/si";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
         5716 Work Orders Overview
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              5716 Total W/0 
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <TimelineItem
          icon={<FaBell size="16px" color={palette.info.main} />}
          title="300 Work Order Entered"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          icon={<IoLogoCss3 size="16px" color={palette.error.main} />}
          title="789 Needs Vendor Sourcing"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          icon={<FaShoppingCart size="16px" color={palette.lightblue.main} />}
          title=" 356 Vendor Assigned"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          icon={<BsCreditCardFill size="16px" color={palette.warning.main} />}
          title="789 NTE (Not to Exceed) Approval Needed"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title="45 NTE Approved/Rejected"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem icon={<AdobeXD size="20px" />} title="234 Vendor Dispatched" dateTime="17 DEC" />
        <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title=" 678 Technician On Site"
          dateTime="18 DEC 4:54 AM"
        />
        <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title=" 789 Work in Progress"
          dateTime="18 DEC 4:54 AM"
        />
          <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title=" 57 Pending Parts/Materials"
          dateTime="18 DEC 4:54 AM"
        />
           <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title=" 678 Work Order Completed"
          dateTime="18 DEC 4:54 AM"
        />

<TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title=" 1001 Invoicing"
          dateTime="18 DEC 4:54 AM"
        />
   
      <TimelineItem
          icon={<SiDropbox size="16px" color={palette.primary.focus} />}
          title=" 2345 Closed"
          dateTime="18 DEC 4:54 AM"
        />
      </VuiBox>

    </Card>
  );
}

export default OrdersOverview;