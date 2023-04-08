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
        width={480}
        height={290}
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
        width={480}
        height={290}
        className={imageStyle}
      />
    ),
    heading: "Receive payments from your customers",
    text: "Decide how you’ll love to accept payments; you’ve got the transfer, QR code and card.",
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
        width={480}
        height={290}
      />
    ),
    heading: "Get the capital your business needs",
    text: "Request loans to buy goods and take your business to the next level.",
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
        width={480}
        height={290}
      />
    ),
    heading: "Save, and earn interests    ",
    text: "You don’t just manage your money and business. Save your profits, and earn more.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

const easySolutionsForSmallBusiness = [
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
      "Track payments on multiple channels for every item sold in your store.Track payment on multiple channels for every item sold in your store.",
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
      "Track payment on multiple channels for every item sold in your store. Track payment on multiple channels for every item sold in your store",
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
      "Track payment on multiple channels for every item sold in your store. Track payment on multiple channels for every item sold in your store",
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
      "Track payment on multiple channels for every item sold in your store. Track payment on multiple channels for every item sold in your store",
    link: {
      text: "Get Nomba for your large business",
      href: "/business/large",
    },
  },
];

export { smallBusinessPageSliderData, easySolutionsForSmallBusiness };
