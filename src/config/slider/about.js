import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const aboutPageSliderData = [
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/about/slider/pos-agent.jpg"
        alt="A Nomba POS agent"
        className={imageStyle}
      />
    ),
    heading: "Our agents...",
    text:
      "know what’s best for their customers. They use the Nomba Lite and Pro POS terminals (depending on which best suits them) to accept offline and online payments without any hassle while they process payments for people and provide access to financial services. ",
    caseStudy: {
      businessName: "Mr Isaac",
      aboutBusiness:
        "He uses his POS terminals to help people make payment while he earns.",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/about/slider/business-woman.jpg"
        alt="business owner sitting and holding two bottles"
        className={imageStyle}
      />
    ),
    heading: "Small business owners...",
    text:
      "found it increasingly difficult to track their sales. With Nomba, they now reconcile payments from multiple channels, track all collections in cash and get an overview of total sales across all business outlets on a single portal. ",
    caseStudy: {
      businessName: "Kimberly Services",
      aboutBusiness:
        "This telecom SME manages all forms of payments for its services  while keeping things simple.",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/about/slider/doctor.jpg"
        alt="Man in a pharmacy wearing a lab coat and folding his hands"
        className={imageStyle}
      />
    ),
    heading: "Large businesses...",
    text:
      "experienced issues with organizing and automating business operations. As a result, every company, including corporate firms, restaurants, and fleets, now manages payments, inventories, and other essential activities in one place.",
    caseStudy: {
      businessName: "Gokada",
      aboutBusiness:
        "The leading logistics service provider coordinates payments through over 5000 riders with Nomba.",
    },
  },
];

export { aboutPageSliderData };
