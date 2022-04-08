import React from "react";

import { StaticImage } from "gatsby-plugin-image";
import Visa from "assets/images/svgs/visa.svg";
import Master from "assets/images/svgs/mastercard.svg";
import Wifi from "assets/images/svgs/wifi.svg";
import FourG from "assets/images/svgs/fourg.svg";
import Printer from "assets/images/svgs/printer.svg";
import Usb from "assets/images/svgs/cib-usb.svg";

export const posCardData = [
  {
    isLite: true,
    device: {
      type: "CURRENT DEVICE",
      name: "Nomba Lite",
      price: "₦20,000",
    },

    features: ["Accept all Bank Cards", "Connects to WiFi"],

    image: (
      <StaticImage
        width={220}
        height={430}
        src="../assets/images/jpegs/homepage/Nomba Lite.png"
        alt="Nomba Lite"
      />
    ),
    icons: [<Visa />, <Master />, <Wifi />],
    link: { to: "/" },
  },
  {
    isLite: false,
    device: {
      type: "NEW DEVICE",
      name: "Nomba Pro",
      price: "₦35,000",
    },

    features: [
      "Accept all Bank Cards",
      "Pocket Friendly",
      "Light and Sleeky",
      "Easy to operate",
      "Connects to 4G/3G/2G WiFi",
      "Bluetooth Connectivity",
    ],

    image: (
      <StaticImage
        width={330}
        height={500}
        src="../assets/images/jpegs/homepage/Nomba Pro Terminal.png"
        alt="Nomba Lite"
      />
    ),
    icons: [<Visa />, <Master />, <Wifi />, <FourG />, <Printer />, <Usb />],
    link: { to: "/" },
  },
];
