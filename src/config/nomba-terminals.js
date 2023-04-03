import React from "react";

import { StaticImage } from "gatsby-plugin-image";
// import Visa from "assets/images/svgs/visa.svg";
// import Master from "assets/images/svgs/mastercard.svg";
// import Wifi from "assets/images/svgs/wifi.svg";
// import FourG from "assets/images/svgs/fourg.svg";
// import Printer from "assets/images/svgs/printer.svg";
// import Usb from "assets/images/svgs/cib-usb.svg";
const image = (
  <StaticImage
    width={193}
    height={267}
    src="../assets/images/jpegs/Nomba Pro 2.png"
    alt="Nomba Pro 2"
  />
);
export const posCardData = [
  {
    isMax: false,
    device: {
      name: "Nomba Lite",
      price: "₦15,000",
    },

    features: ["Accept all Bank Cards", "Connects to WiFi"],

    image,
    link: { to: "/" },
  },
  {
    isMax: false,
    device: {
      name: "Nomba Pro",
      price: "₦25,000",
    },

    features: [
      "Accept all Bank Cards",
      "Pocket Friendly Light and Sleeky",
      "Easy to operate",
      "Connects to 4G/3G/2G WiFi",
      "Bluetooth Connectivity",
    ],

    image,
    link: { to: "/" },
  },
  {
    isMax: true,
    device: {
      name: "Nomba MAX",
      price: "₦55,000",
    },

    features: [
      "Accept all Bank Cards",
      "Pocket Friendly Light and Sleeky",
      "Easy to operate",
      "Connects to 4G/3G/2G WiFi",
      "Bluetooth Connectivity",
    ],

    image,
    link: { to: "/" },
  },
];
