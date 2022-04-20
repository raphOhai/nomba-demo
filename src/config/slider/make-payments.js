import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const makePaymentsPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/make-payment/Safe and Secure.jpg"
        alt="safe and secure"
        className={imageStyle}
      />
    ),
    heading: "Safe and secure",
    text:
      "Nomba keeps your payments secure and safe. All payments made can only be accessed by account owners.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/make-payment/Fast Payment Processes.jpg"
        alt="fast payment process"
        className={imageStyle}
      />
    ),
    heading: "Fast payment process",
    text:
      "No long procedures. Make payments on your Nomba account within 2 minutes ",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/make-payment/Bill Payment Options.jpg"
        alt="Bill Payment Options."
        className={imageStyle}
      />
    ),
    heading: "Bill payment options ",
    text:
      "Pay bills such as electricity, Cable TV, airtime and many more on Nomba",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/make-payment/instant-transfer.jpg"
        alt="instant transfer"
        className={imageStyle}
      />
    ),
    heading: "Instant transfer to banks",
    text:
      "Make payments through transfers to other bank accounts, or a Nomba business account.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/make-payment/Insights on cash inflow.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Insights on cash-outflow",
    text: "Discover your payment patterns with our powerful analytics.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/make-payment/receive-support.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Receive support 24/7",
    text:
      "Our support team is always a phone call away. Call us anytime you need us.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

export { makePaymentsPageSliderData };
