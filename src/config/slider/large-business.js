import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  rounded-t-lg
  w-full
  h-full
`);

const largeBusinessPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/large-business/create-business.jpg"
        alt="person making transaction on a laptop"
        className={imageStyle}
      />
    ),
    heading: "Create a business account in minutes",
    text: "Open a business bank account in minutes from the convenience of your office",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/large-business/record-payment.jpg"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Accept and record all payment types",
    text: "Explore omni-channel payment methods for online and offline payments. ",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/large-business/organise-business.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Organize your business in one place ",
    text: "Manage business operations, banking and payments on a single platform. ",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/large-business/view-sales.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "View sales on one portal",
    text: "Get real-time insights on total sales across multiple business outlets.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/large-business/integrate-cash.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Integrate cash and other collection types",
    text: "Reconcile and track all your collections in cash and other payment channels.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com/auth/login",
    // },
  },
];

const easySolutionsForLargeBusiness = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/teams.png"
        alt="person making transaction on a laptop"
        className={imageStyle}
      />
    ),
    heading: "Teams",
    text:
      "You can streamline your team's work and improve productivity, allowing you to focus on growing your business.",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    image: (
      <StaticImage src="../../assets/images/jpegs/business-tools/outlet.png" alt="Settlement" className={imageStyle} />
    ),
    heading: "Outlet",
    text:
      "Streamline operations, improve efficiency, manage, and receive payment across your different business outlets or branches easily.",
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
      "Nomba settlement is designed to help businesses of all sizes manage their payments and cash flow more efficiently, reduce errors and fraud, and improve customer satisfaction.",
    link: {
      text: "Get Nomba for your growing business",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/business-tools/inventory.png"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Invoicing",
    text:
      "Create and send invoices to collect payments stress-free. Automate reminders to customers/clients. We'll prioritise your payment collection for you.",
    link: {
      text: "Get Nomba for your large business",
      href: "/invoice",
    },
  },
  {
    image: (
      <StaticImage src="../../assets/images/jpegs/business-tools/e-menu.png" alt="E menu" className={imageStyle} />
    ),
    heading: "E-menu",
    text:
      "With Nomba's e-menu, customers can browse your menu, place orders, and pay for their meals all from the convenience of their mobile devices in restaurants ",
    link: {
      text: "Get Nomba for your growing business",
      href: "/e-menu",
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
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
];
export { largeBusinessPageSliderData, easySolutionsForLargeBusiness };
