import React from "react";

import Visa from "assets/images/svgs/visa.svg";
import Master from "assets/images/svgs/master.svg";
import Wifi from "assets/images/svgs/wifi.svg";
import CisUSb from "assets/images/svgs/usb.svg";
import FourG from "assets/images/svgs/fourg.svg";
import VisaLight from "assets/images/svgs/visa-light.svg";
import MasterLight from "assets/images/svgs/master-light.svg";
import WifiLight from "assets/images/svgs/wifi-light.svg";
import Printer from "assets/images/svgs/printer.svg";
import CisUSbLight from "assets/images/svgs/usb-light.svg";
import FourGLight from "assets/images/svgs/fourg-light.svg";
import { StaticImage } from "gatsby-plugin-image";

export const terminalData = [
  {
    isHighlight: true,
    device: {
      name: "Nomba Mini",
      price: "₦25,000",
      type: "mini",
      priceType: "Outright purchase",
      ctaText: "Buy now",
    },

    features: "Accept all Bank Cards, the new pocket-sized terminal for swift and successful transactions.",

    image: (
      <StaticImage
        width={233}
        height={405}
        src="../../../assets/images/jpegs/nomba-terminals/mini.png"
        alt="Nomba Mini"
      />
    ),
    icons: [
      <VisaLight key="visacard" />,
      <MasterLight key="mastercard" />,
      <WifiLight key="wifi" />,
      <FourGLight key="4g" />,
      <CisUSbLight key="usb" />,
    ],
    link: "/mini",
    bgColor: "bg-[#717171]",
    textColor: "n-light",
  },
  {
    isHighlight: false,
    device: {
      name: "Nomba Lite",
      price: "₦30,000",
      type: "lite",
      priceType: "Lease Price",
      ctaText: "Lease now",
    },

    features: "Accept all Bank Cards, Connects to WiFi",

    image: (
      <StaticImage
        width={207}
        height={413}
        src="../../../assets/images/jpegs/nomba-terminals/lite.png"
        alt="Nomba Lite"
      />
    ),
    icons: [<Visa key="visacard" />, <Master key="mastercard" />, <Wifi key="wifi" />],
    link: "https://dashboard.nomba.com/auth/signup",

    bgColor: "bg-[#383838]",
    textColor: "primary",
  },
  {
    isHighlight: false,
    device: {
      name: "Nomba Pro",
      price: "₦62,000",
      type: "pro",
      priceType: "Outright purchase",
      ctaText: "Buy now",
    },

    features:
      "Accept all Bank Cards, Pocket Friendly Light and Sleeky, Easy to operate Connects to 4G/3G/2G WiFi Bluetooth Connectivity",

    image: (
      <StaticImage
        width={297}
        height={410}
        src="../../../assets/images/jpegs/nomba-terminals/pro.png"
        alt="Nomba Lite"
      />
    ),
    link: "https://dashboard.nomba.com/auth/signup",
    icons: [
      <Visa key="visacard" />,
      <Master key="mastercard" />,
      <Wifi key="wifi" />,
      <FourG key="4g" />,
      <CisUSb key="usb" />,
      // <StaticImage src="../../../assets/images/verve.png" width={37.5} height={11.4} alt="Verve" key="verve" />,
    ],
    bgColor: "bg-[#EEEEEE]",
    textColor: "n-light",
  },
  {
    isHighlight: false,

    device: {
      name: "Nomba MAX",
      price: "₦85,000",
      type: "max",
      priceType: "Outright purchase",
      ctaText: "Buy now",
    },

    features:
      "This device has faster transaction speed, Long lasting battery, High speed printer and is Sleek & Durable to give an overall high speed performance.",
    image: (
      <StaticImage
        width={217}
        height={414}
        src="../../../assets/images/jpegs/nomba-terminals/max.png"
        alt="Nomba Max"
      />
    ),
    link: "/max",
    icons: [
      <Visa key="visacard" />,
      <Master key="mastercard" />,
      <Wifi key="wifi" />,
      <Printer key="printer" />,
      <FourG key="4g" />,
      <CisUSb key="usb" />,
    ],
    bgColor: "bg-[#FFFFFF]",
    textColor: "primary",
  },
];
