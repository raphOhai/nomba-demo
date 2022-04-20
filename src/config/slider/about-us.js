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
        src="../../assets/images/jpegs/about/slider/agents-smiling-man.jpg"
        alt="A Nomba POS agent"
        className={imageStyle}
      />
    ),
    heading: "Our agents...",
    text:
      "know what’s best for their customers. They use the Nomba Lite and Pro POS terminals (depending on which best suits them) to accept offline and online payments without any hassle while they process payments for people and provide access to financial services. ",
    caseStudy: {
      businessName: "Mr Goddey Duke",
      aboutBusiness:
        "a Nomba agent, has seen multiple increases in capital since he joined the Nomba community in 2017.",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/about/slider/pos-agent.jpg"
        alt="A Nomba POS agent"
        className={imageStyle}
      />
    ),
    heading: "Small business owners...",
    text:
      "found it increasingly difficult to track their sales. With Nomba, they now reconcile payments from multiple channels, track all collections in cash and get an overview of total sales across all business outlets on a single portal. ",
    caseStudy: {
      businessName: "Mr Salihu Umar",
      aboutBusiness:
        "is a typical example of a small business owner. He receives card payments and keeps tabs on sales using the Nomba POS terminals.",
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
      businessName: "Pinnacle Risk Advisory Limited",
      aboutBusiness:
        "for example, has relied heavily on Nomba to develop solutions for every digital financial risk the company faces.",
    },
  },
  {
    image: (
      <StaticImage
        src="../../assets/images/jpegs/about/slider/supermen.png"
        alt="Man in a pharmacy wearing a lab coat and folding his hands"
        className={imageStyle}
      />
    ),
    heading: "Our supermen...",
    text:
      "are creating opportunities for youths in their various communities by building networks of new agents, hence making sure everyone at the grassroots has access to the financial tools they need.  ",
    caseStudy: {
      businessName: "Mr Uchenna",
      aboutBusiness:
        "a Nomba partner, buys POS terminals in bulk and sells them to individuals at wholesale prices so they can start their own mobile agent banking business.",
    },
  },
];

export { aboutPageSliderData };
