import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
const imageStyle = ctl(`
  rounded-t-lg
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
    heading: "Get a Nomba account for free with ease",

    text: "Open a business account right where you are, on your phone.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
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
    //   href: "https://dashboard.nomba.com/auth/login",
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
    text: "Track every cash, card and transfer transaction using your nomba app.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
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
    //   href: "https://dashboard.nomba.com/auth/login",
    // },
  },
];

const easySolutionsForSmallBusiness = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/invoicing.png"
        alt="Invoicing Image"
        className={imageStyle}
      />
    ),
    heading: "Invoicing",
    text:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you.",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/small",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/payments.png"
        alt="Inventory image"
        className={imageStyle}
      />
    ),
    heading: "Payments",
    text:
      "With Nomba, you can accept payments from customers in a variety of ways, including credit and debit cards, bank transfers, and mobile payments.",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/small",
    },
  },

  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/inventory.png"
        alt="Inventory image"
        className={imageStyle}
      />
    ),
    heading: "Inventory",
    text:
      "Businesses can improve their inventory accuracy, reduce waste and spoilage, and improve their overall supply chain processes.",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/small",
    },
  },

  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/pay-by-qr.png"
        alt="Pay by QR"
        className={imageStyle}
      />
    ),
    heading: "Pay by QR",
    text:
      "Businesses can generate unique QR codes that customers can scan using their mobile devices to complete their transactions",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/large",
    },
  },
];

export { smallBusinessPageSliderData, easySolutionsForSmallBusiness };
