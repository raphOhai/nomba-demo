import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
  rounded-t-lg
`);

const homepageSliderData = [
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
      href: "/invoice",
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
      "Manage your stock more efficiently and effectively. you can easily keep track of your products, and sales in real-time, so you always know what's in stock.",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/teams.png"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Teams",
    text:
      "With this feature, you can easily collaborate with your team members, assign tasks, track progress, and communicate in real-time.",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    image: (
      <StaticImage src="../../assets/images/jpegs/business-tools/e-menu.png" alt="E menu" className={imageStyle} />
    ),
    heading: "E-menu",
    text:
      "With Nomba's e-menu, customers can browse your menu, place orders, and pay for their meals all from the convenience of their mobile devices in restaurants. ",
    link: {
      text: "Get Nomba for your growing business",
      href: "/e-menu",
    },
  },
  {
    image: (
      <StaticImage src="../../assets/images/jpegs/business-tools/payments.png" alt="Payments" className={imageStyle} />
    ),
    heading: "Payment",
    text:
      "With Nomba, you can accept payments from customers in a variety of ways, including credit and debit cards, bank transfers, and mobile payments. ",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/settlement.png"
        alt="Settlement"
        className={imageStyle}
      />
    ),
    heading: "Settlement",
    text:
      "Get automated direct settlements to your registered bank account. Don't stress moving funds at the end of every sale, with just a toggle, we'll automate the process for you.",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
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
      "Businesses can generate unique QR codes that customers can scan using their mobile devices to complete their transactions.",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
];

export { homepageSliderData };
