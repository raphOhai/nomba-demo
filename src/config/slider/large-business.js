import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
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
    //   href: "https://dashboard.nomba.com",
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
    //   href: "https://dashboard.nomba.com",
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
    //   href: "https://dashboard.nomba.com",
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
    //   href: "https://dashboard.nomba.com",
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
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

const easySolutionsForLargeBusiness = [
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
export { largeBusinessPageSliderData, easySolutionsForLargeBusiness };
