import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Br } from "components";
import {
  imgClass,
  imgClassWrapper1,
  imgClassWrapper2,
  imgClassWrapper3,
  gridWrapper,
} from "../img-clases";

const heroHomePage = {
  title: (
    <>
      {" "}
      Get better at business <Br on="desktop" /> with Nomba.
    </>
  ),
  description:
    "Trusted by 235,000+ businesses to securely accept any type of payment and grow their business.",
  images: [
    <StaticImage
      width={397}
      height={387}
      src="../../../assets/images/jpegs/homepage/hero-images/hero1.jpg"
      alt="Nomba POS Agent"
    />,
    <StaticImage
      width={397}
      height={387}
      src="../../../assets/images/jpegs/homepage/hero-images/hero2.jpg"
      alt="Woman at the closing store."
    />,
    <StaticImage
      width={397}
      height={387}
      src="../../../assets/images/jpegs/homepage/hero-images/hero3.jpg"
      alt="Woman making payment over POS"
    />,
  ],
};

const businessTypesData = [
  {
    title: "Enterprise business",
    description:
      "With Nomba, enterprises businesses can streamline their workflows, improve collaboration, and gain insights into their business performance",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Small business",
    description:
      "We makes it easy for small businesses to create and send professional invoices and accept payments online. You can also track your invoices and receive notifications when your customers make payments.",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Mobile money agents",
    description:
      "As a mobile money agent, you need reliable tools to help you manage your transactions and finances efficiently, and that's where Nomba comes in.",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../../../../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../../../../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
];

export { heroHomePage, businessTypesData };
