import React from "react";

import { StaticImage } from "gatsby-plugin-image";

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

    features: "Accept all Bank Cards, Connects to WiFi",

    image: (
      <StaticImage
        width={143}
        height={287}
        src="../assets/images/jpegs/homepage/Nomba-Lite.png"
        alt="Nomba Lite"
      />
    ),
    link: { to: "/" },
  },
  {
    isMax: false,
    device: {
      name: "Nomba Pro",
      price: "₦25,000",
    },

    features:
      "Accept all Bank Cards, Pocket Friendly Light and Sleeky, Easy to operate Connects to 4G/3G/2G WiFi Bluetooth Connectivity",

    image: (
      <StaticImage
        width={193}
        height={267}
        src="../assets/images/jpegs/homepage/Nomba-Pro.png"
        alt="Nomba Lite"
      />
    ),
    link: { to: "/" },
  },
  {
    isMax: true,
    device: {
      name: "Nomba MAX",
      price: null,
    },

    features:
      "This device has faster transaction speed, Long lasting battery, High speed printer and is Sleek & Durable to give an overall high speed performance.",

    image: (
      <StaticImage
        width={248}
        height={267}
        src="../assets/images/jpegs/homepage/Nomba-Max.png"
        alt="Nomba Max"
      />
    ),
    link: { to: "/" },
  },
];
