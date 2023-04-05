import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

const flagStyle = ctl(`
w-[20px]
h-[20px]
`);

export const addressList = [
  {
    location: [
      "16 Billings Way Oregun Ikeja, Lagos, Nigeria ",
      "19b Bosun Adekoya Street, Lekki Phase 1, Lagos, Nigeria",
    ],
    flag: (
      <StaticImage
        src="../assets/images/jpegs/Flag Nigeria.png"
        alt="Flag Nigeria"
        loading="eager"
        className={flagStyle}
      />
    ),
  },
  {
    location: ["1776 Sacremento St Apt 311 SAN Francisco CA 94109"],
    flag: (
      <StaticImage
        src="../assets/images/jpegs/Flag US.png"
        alt="Flag US"
        loading="eager"
        className={flagStyle}
      />
    ),
  },
];
