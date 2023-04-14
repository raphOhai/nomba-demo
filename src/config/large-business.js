import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { imgClass, imageStyle, imgClassWrapper1, imgClassWrapper2, imgClassWrapper3, gridWrapper } from "./img-clases";

export const largeBusinessTips = [
  {
    title: "Multinational companies accept all forms of payment using Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/woman-smiling.png"
        alt="Woman smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Restaurants in cities track payment history with Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/man-with-pos.png"
        alt="man holding POS machine"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Fleets prefer receiving payments through transfer, POS terminals and QR codes ",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/man-looking-at-laptop.png"
        alt="man looking at laptop"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Agencies reconcile payments on a single Nomba dashboard",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/large-business/woman-on-red.png"
        alt="Woman smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
];

export const largeBusinessTypes = [
  {
    title: "Restaurants",
    headline: "Restaurants receive card payments with Nomba",
    description:
      "What we really love about Nomba is their QR code payment solution. We've set up unique QR codes at each table, and our customers can simply scan the code with their mobile devices to view our menu, place their order, and complete their transactions.",
    respondent: "Temi Alabi",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/business-size/restaurant-1.png"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/business-size/restaurant-2.png"
            alt="Image 3"
          />
        </div>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            height={146}
            src="../assets/images/jpegs/business-size/restaurant-3.png"
            alt="Image 1"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Supermarkets",
    headline: "Supermarkets love to track sales and multiple payments using Nomba",
    description:
      "We're extremely satisfied with Nomba and how it has made payments easy for our business. It's a reliable and user-friendly payment solution that has improved our cash flow and helped us provide better service to our customers.",
    respondent: "Ayomide Iyawo, Market trader",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/business-size/supermarket-1.png"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/business-size/supermarket-2.png"
            alt="Image 3"
          />
        </div>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            height={146}
            src="../assets/images/jpegs/business-size/supermarket-3.png"
            alt="Image 1"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Pharmacies",
    headline: "Pharmacies in Nigeria accept payment using Nomba. ",
    description:
      "Before we started using Nomba, managing payments at our pharmacy was a real headache. We were constantly dealing with manual errors, delayed payments, and slow processing times. But since we switched to Nomba, things have gotten so much easier",
    respondent: "John Isreal, Pharmacist",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/business-size/pharm-1.png"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/business-size/pharm-2.png"
            alt="Image 3"
          />
        </div>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            height={146}
            src="../assets/images/jpegs/business-size/pharm-3.png"
            alt="Image 1"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Retails",
    headline: "Retails shops  in communities reconcile all cash collections with Nomba.",
    description:
      "With Nomba's payment solutions, we've been able to accept payments in a variety of ways, including credit and debit cards, bank transfers, and mobile payments.r",
    respondent: "Ayomide Iyawo, Market trader",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/business-size/retail-1.png"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/business-size/retail-2.png"
            alt="Image 3"
          />
        </div>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            height={146}
            src="../assets/images/jpegs/business-size/retail-3.png"
            alt="Image 1"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Transport",
    headline: "Nomba provides a secure and reliable payment platform.",
    description:
      "The fact that I can check date range to get proper visibility on our company's performance, is a great joy to me. With Nomba, we've been able to reduce cash suppression drastically in our company across the country.",
    respondent: "Mrs Doris, CFO Ifesinachi Group ",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/business-size/transport-1.png"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/business-size/transport-2.png"
            alt="Image 3"
          />
        </div>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            height={146}
            src="../assets/images/jpegs/business-size/transport-3.png"
            alt="Image 1"
          />
        </div>
      </div>
    ),
  },
];

export const codeblockSection = {
  headline: "Get realtime notifications",
  description: "Streamline your workflow and customers notifications with ease using our powerful Webhook feature",
  link: { href: "https://dashboard.nomba.com/auth/login", text: "Get Nomba for your growing business" },
  image: (
    <StaticImage
      src="../assets/images/jpegs/large-business/code-block.png"
      alt="Image Code Block"
      width={545}
      height={420}
    />
  ),
};
