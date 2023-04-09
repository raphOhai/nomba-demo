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
    location: ["580 California St, 12th Floor, San Francisco, CA 94104"],
    flag: <StaticImage src="../assets/images/jpegs/Flag US.png" alt="Flag US" loading="eager" className={flagStyle} />,
  },
];
