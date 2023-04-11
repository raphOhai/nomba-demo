import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SingleDashboard from "illustrations/single-dashboard.svg";
import POS from "illustrations/pos.svg";
import PayBills from "illustrations/bills.svg";
import CashWithdrawal from "illustrations/cash-withdrawal.svg";
import { imgClass, imgClassWrapper1, imgClassWrapper2, imgClassWrapper3, imageStyle, gridWrapper } from "./img-clases";

export const smallBusinessTips = [
  {
    title: "Pharmacies accept payment using Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/man-on-labcoat.png"
        alt="Woman smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Local shops  in communities reconcile all cash collections with Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/woman-with-pos.png"
        alt="woman holding POS machine"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Supermarkets love to track sales and multiple payments using Nomba ",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/man-in-shop.png"
        alt="man in a shop holding a POS machine"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Restaurants receive card payments with Nomba",
    picture: (
      <StaticImage
        src="../assets/images/jpegs/small-business/man-on-apron.png"
        alt="man wearing an apron and smiling"
        loading="eager"
        className={imageStyle}
      />
    ),
  },
];
export const heroImage = [
  <StaticImage
    width={530}
    height={530}
    className="rounded-lg drop-shadow-lg"
    src="../assets/images/jpegs/small-business/woman_making_payment.png"
    alt="Small Business"
  />,
  <StaticImage
    width={530}
    height={530}
    className="rounded-lg drop-shadow-lg"
    src="../assets/images/jpegs/small-business/woman-with-pos2.jpg"
    alt="Small Business"
  />,
];
export const smallBusinesSolutions = [
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
];

export const perfectPaymentSolutionImage = [
  <StaticImage
    src="../assets/images/jpegs/small-business/perfect-solution-1.jpg"
    alt="Image 1"
    className="rounded-lg"
  />,
  <StaticImage
    src="../assets/images/jpegs/small-business/perfect-solution-2.png"
    alt="Image 2"
    className="rounded-lg"
  />,
];
export const perfectPaymentSolution = [
  {
    illustration: <SingleDashboard className="w-[50px]" />,
    title: "View in a single dashboard",
    description: "Creating an account automatically assigns you to a Nomba wallet ",
    link: { to: "https://dashboard.nomba.com/auth/login" },
  },
  {
    illustration: <POS className="w-[50px]" />,
    title: "POS Terminal",
    description: "Instantly accept payments, withdrawals and collections on a simple android device. ",
    link: { to: "https://dashboard.nomba.com/auth/login" },
  },
  {
    illustration: <PayBills className="w-[50px]" />,
    title: "Pay bills",
    description: "Paying bills on Nomba is super easy. To pay a bill, log into your account, and select a biller.",
    link: { to: "https://dashboard.nomba.com/auth/login" },
  },
  {
    illustration: <CashWithdrawal className="w-[50px]" />,
    title: "Cash withdrawal",
    description: "Make money easier by helping people withdraw, using the Nomba Pro POS terminal. ",
    link: { to: "https://dashboard.nomba.com/auth/login" },
  },
];
