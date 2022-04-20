import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full 
  h-[334px]
  lg:h-auto
`);

export const largeBusinessTips = [
  {
    title: "Multinational companies accept all forms of payment using Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/woman-smiling.png"
        alt="Woman smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Restaurants in cities track payment history with Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/man-with-pos.png"
        alt="man holding POS machine"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title:
      "Fleets prefer receiving payments through transfer, POS terminals and QR codes ",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/man-looking-at-laptop.png"
        alt="man looking at laptop"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Agencies reconcile payments on a single Nomba dashboard",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/woman-on-red.png"
        alt="Woman smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
];
