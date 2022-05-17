import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const savingsPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/savings/Secure and Convenient.jpg"
        alt="Secure and Convenient"
        className={imageStyle}
      />
    ),
    heading: "Secure and convenient",
    text: "Nomba was built with your security in mind. Your funds are safe.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/savings/Quick Withdrawals.jpg"
        alt="Quick Withdrawals"
        className={imageStyle}
      />
    ),
    heading: "Quick Withdrawals",
    text: "Never worry about making withdrawals during an emergency.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/savings/Save Automatically.jpg"
        alt="Save Automatically"
        className={imageStyle}
      />
    ),
    heading: "Save automatically ",
    text:
      "Automate your daily, weekly and monthly savings on your Nomba account.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/savings/No Additional Charges.jpg"
        alt="No Additional Charges"
        className={imageStyle}
      />
    ),
    heading: "No additional charges",
    text: "Topping up your savings is totally free.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/savings/Save multiple Savings Plan.jpg"
        alt="Save multiple Savings Plan"
        className={imageStyle}
      />
    ),
    heading: "Create multiple savings plan",
    text: "Choose the best plan that suits your goals.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/savings/Grow your Savings.jpg"
        alt="Grow your Savings"
        className={imageStyle}
      />
    ),
    heading: "Grow your savings",
    text: "Earn returns on every saving plan.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

export { savingsPageSliderData };
