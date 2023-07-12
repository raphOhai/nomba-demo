import React from "react";

import Visa from "assets/images/svgs/visa.svg";
import Master from "assets/images/svgs/master.svg";
import Wifi from "assets/images/svgs/wifi.svg";
import CisUSb from "assets/images/svgs/usb.svg";
import FourG from "assets/images/svgs/fourg.svg";

import VisaLight from "assets/images/svgs/visa-light.svg";
import MasterLight from "assets/images/svgs/master-light.svg";
import WifiLight from "assets/images/svgs/wifi-light.svg";
import PrinterLight from "assets/images/svgs/printer-light.svg";
import CisUSbLight from "assets/images/svgs/usb-light.svg";
import FourGLight from "assets/images/svgs/fourg-light.svg";
import { StaticImage } from "gatsby-plugin-image";

export const posCardData = [
  {
    isMax: false,
    device: {
      name: "Nomba Lite",
      price: "₦15,000",
      type: "lite",
    },

    features: "Accept all Bank Cards, Connects to WiFi",

    image: (
      <StaticImage width={143} height={287} src="../assets/images/jpegs/homepage/Nomba-Lite.png" alt="Nomba Lite" />
    ),
    icons: [<Visa key="visacard" />, <Master key="mastercard" />, <Wifi key="wifi" />],
    link: "https://dashboard.nomba.com/auth/signup",
  },
  {
    isMax: false,
    device: {
      name: "Nomba Pro",
      price: "₦25,000",
      type: "pro",
    },

    features:
      "Accept all Bank Cards, Pocket Friendly Light and Sleeky, Easy to operate Connects to 4G/3G/2G WiFi Bluetooth Connectivity",

    image: (
      <StaticImage width={193} height={267} src="../assets/images/jpegs/homepage/Nomba-Pro.png" alt="Nomba Lite" />
    ),
    link: "https://dashboard.nomba.com/auth/signup",
    icons: [
      <Visa key="visacard" />,
      <Master key="mastercard" />,
      <Wifi key="wifi" />,
      <FourG key="4g" />,
      <CisUSb key="usb" />,
      // <StaticImage src="../assets/images/verve.png" width={37.5} height={11.4} alt="Verve" key="verve" />,
    ],
  },
  {
    isMax: true,
    device: {
      name: "Nomba MAX",
      price: "₦85,000",
      type: "max",
    },

    features:
      "This device has faster transaction speed, Long lasting battery, High speed printer and is Sleek & Durable to give an overall high speed performance.",

    image: <StaticImage width={124} height={267} src="../assets/images/jpegs/homepage/Nomba-Max.png" alt="Nomba Max" />,
    link: "/max",
    icons: [
      <VisaLight key="visacard" />,
      <MasterLight key="mastercard" />,
      <WifiLight key="wifi" />,
      <PrinterLight key="printer" />,
      <FourGLight key="4g" />,
      <CisUSbLight key="usb" />,
      // <StaticImage src="../assets/images/verve.png" width={37.5} height={11.4} alt="Verve" key="verve" />,
    ],
  },
];
