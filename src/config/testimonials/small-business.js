import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

const imageStyle = ctl(`
  w-full
  h-full
`);

const SmallBusinessTestimonials = [
  {
    name: "Auwal Usman",
    role: "CEO, Auwalus Business Concepts.",
    testimonial:
      "Nomba (Formerly Kudi) is loved here in Adamawa State and the North because Kudi means money in Hausa and with the Money means Numbers (Nomba). All my referrals using Kudi have been so grateful because of numerous services that meet their needs, particularly the agent loan when they are short of funds.",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/auwal-usman.png"
        alt="Auwal Usman"
        className={imageStyle}
      />
    ),
  },
  {
    name: "Azoronyeahu Uchenna Gentle",
    role: "CEO, Akjfintech Solutions Global Resources",
    testimonial:
      "I could speak volumes on the timely responsiveness of the support team, the consistent almost zero network downtime, seamless terminal repairs structure and the down to earth staff. Nomba has blazed the trail for many unique products in the business world, without a shadow of doubt I would choose Nomba over and over.",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/uchenna.png"
        alt="Azoronyeahu Uchenna Gentle"
        className={imageStyle}
      />
    ),
  },
];

export { SmallBusinessTestimonials };
