import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full 
  h-[334px]
  lg:h-auto
`);

export const smallBusinessTips = [
  {
    title: "Pharmacies accept payment using Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/man-on-labcoat.png"
        alt="Woman smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title:
      "Local shops  in communities reconcile all cash collections with Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/woman-with-pos.png"
        alt="woman holding POS machine"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title:
      "Supermarkets love to track sales and multiple payments using Nomba ",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/man-in-shop.png"
        alt="man in a shop holding a POS machine"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Restaurants receive card payments with Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/man-on-apron.png"
        alt="man wearing an apron and smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
];
export const heroImage = [
  <StaticImage
    width={530}
    height={530}
    className="rounded-lg drop-shadow-lg"
    src="../assets/images/jpegs/small-business/woman_making_payment.png"
    alt="Small Business"
  />,
  <StaticImage
    width={530}
    height={530}
    className="rounded-lg drop-shadow-lg"
    src="../assets/images/jpegs/small-business/woman-with-pos2.jpg"
    alt="Small Business"
  />,
];
