import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const acceptPaymentsPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/accept-payment/swift-and-secure.jpg"
        alt="person making transaction on a laptop"
        className={imageStyle}
      />
    ),
    heading: "Swift and secure",
    text: "Receiving payments  with Nomba is super fast, easy and safe.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/accept-payment/Seamless account creation.jpg"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Seamless account creation",
    text:
      "Signing up on the Nomba app is synonymous with being your own boss. ",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/accept-payment/receive-payment.png"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Get paid with ease",
    text: "Explore your options to accept payments on-the-go.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/accept-payment/Explore payment option.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Explore payment options",
    text:
      "With Nomba, you have different payment acceptance options that suit your business.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/accept-payment/Track cash inflow.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Track cash-inflow",
    text:
      "Get insights of your payments history, on a simple and easy-to-understand dashboard.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

export { acceptPaymentsPageSliderData };
