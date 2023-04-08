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
        src="../../assets/images/jpegs/homepage/slider/laptop-image.jpg"
        alt="person making transaction on a laptop"
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
        src="../../assets/images/jpegs/homepage/slider/man-with-pos-2.png"
        alt="man issuing pos for payment"
        className={imageStyle}
      />
    ),
    heading: "Inventory",
    text:
      "Manage your stock more efficiently and effectively. you can easily keep track of your products, and sales in real-time, so you always know what's in stock.",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/small",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/homepage/slider/man-with-lady.png"
        alt="man holding a pos machine"
        className={imageStyle}
      />
    ),
    heading: "Teams",
    text:
      "With this feature, you can easily collaborate with your team members, assign tasks, track progress, and communicate in real-time.",
    link: {
      text: "Get Nomba for your growing business",
      href: "/business/large",
    },
  },
];

export { homepageSliderData };
