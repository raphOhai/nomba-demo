import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const homepageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/homepage/slider/laptop-image.jpg"
        alt="person making transaction on a laptop"
        className={imageStyle}
      />
    ),
    heading: "Teams",
    text:
      "Track payments on multiple channels for every item sold in your store.",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/small",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/homepage/slider/man-with-pos.jpeg"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Invoice ",
    text:
      "Receive, track and manage payments from hundreds of sources on a single dashboard",
    link: {
      text: "Get Nomba for your large business",
      href: "/business/large",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/homepage/slider/pos-transaction.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Inventory ",
    text:
      "Be the sure padi for every money-related activity people need to make in your area.",
    link: { text: "Become an agent", to: "/business/agents" },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/homepage/slider/man-with-pos.jpeg"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Invoice ",
    text:
      "Receive, track and manage payments from hundreds of sources on a single dashboard",
    link: {
      text: "Get Nomba for your large business",
      href: "/business/large",
    },
  },
];

export { homepageSliderData };
