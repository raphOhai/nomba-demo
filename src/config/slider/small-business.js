import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const smallBusinessPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/get-nomba-account.jpg"
        alt="person making transaction on a laptop"
        className={imageStyle}
      />
    ),
    heading: "Get a Nomba account with ease",
    text: "Open a business account right where you are, on your phone.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/receive-payment.jpg"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Receive payments from your customers",
    text:
      "Decide how you’ll love to accept payments; you’ve got the transfer, QR code and card.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/reconcile-payment.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Reconcile both offline and online payments",
    text: "Track every cash, card and transfer transaction.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/get-capital.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Get the capital your business needs",
    text:
      "Request loans to buy goods and take your business to the next level.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/receive-payment.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Save, and earn interests    ",
    text:
      "You don’t just manage your money and business. Save your profits, and earn more.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

export { smallBusinessPageSliderData };
