import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const agentsPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/agents/view-earnings.jpg"
        alt="person making transaction on a laptop"
        className={imageStyle}
      />
    ),
    heading: "View all your earnings on a single dashboard",
    text: "Creating an account automatically assigns you a Nomba Wallet.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/agents/go-pro.jpg"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Go pro with the new POS terminal",
    text:
      "Instantly accept payments, withdrawals and collections on a simple android device. ",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/agents/earn.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Earn on every cash withdrawal ",
    text:
      "Make money easier by helping people withdraw, using the Nomba Pro POS terminal. ",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/agents/help-people.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Help people pay bills when they need to",
    text:
      "Paying bills on Nomba is super easy. To pay a bill, log into your account, and select a biller.",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/agents/reduce-cost.jpg"
        alt="pos transaction taking place"
        className={imageStyle}
      />
    ),
    heading: "Reduce the cost of starting out as an agent",
    text: "Make use of the loan feature on your Nomba account to access funds",
    // link: {
    //   text: "Get started",
    //   href: "https://dashboard.nomba.com",
    // },
  },
];

export { agentsPageSliderData };
