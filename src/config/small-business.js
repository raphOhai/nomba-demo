import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import SingleDashboard from "illustrations/single-dashboard.svg";
import POS from "illustrations/pos.svg";
import PayBills from "illustrations/bills.svg";
import CashWithdrawal from "illustrations/cash-withdrawal.svg";
import { imgClass, imageStyle, imgClassWrapper1, imgClassWrapper2, imgClassWrapper3, gridWrapper } from "./img-clases";

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
    title: "Pharmacies",
    headline: "Over 234 businesses in the Nigeria and Africa uses Nomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Local shops",
    headline: "dffgdf dg dgn dgndg g ndomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Supermarkets",
    headline: "Lorem o voo osiv uses Nomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    images: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Restaurants",
    headline: "gsdf asbpopqrb qpieb pqehi Africa uses Nomba to simplify their payment. ",
    description:
      "Access all the offline and online tools you need to grow your business. Track payment on multiple channels for every item sold in your store",
    respondent: "Mark Jonathan, CMO",
    image: (
      <div className={gridWrapper}>
        <div className={imgClassWrapper1}>
          <StaticImage
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/lady-landscape.jpg"
            alt="Image 1"
          />
        </div>
        <div className={imgClassWrapper2}>
          <StaticImage
            height={299}
            className={imgClass}
            src="../assets/images/jpegs/homepage/max-features/max-payment.jpg"
            alt="Image 2"
          />
        </div>
        <div className={imgClassWrapper3}>
          <StaticImage
            className={imgClass}
            height={299}
            src="../assets/images/jpegs/homepage/max-features/salon-business.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    ),
  },
];

export const perfectPaymentSolution = [
  {
    illustration: <SingleDashboard className="w-[50px]" />,
    title: "View in a single dashboard",
    description: "Creating an account automatically assigns you to a Nomba wallet ",
    link: { to: "/" },
  },
  {
    illustration: <POS className="w-[50px]" />,
    title: "POS Terminal",
    description: "Instantly accept payments, withdrawals and collections on a simple android device. ",
    link: { to: "/" },
  },
  {
    illustration: <PayBills className="w-[50px]" />,
    title: "Pay bills",
    description: "Paying bills on Nomba is super easy. To pay a bill, log into your account, and select a biller.",
    link: { to: "/" },
  },
  {
    illustration: <CashWithdrawal className="w-[50px]" />,
    title: "Cash withdrawal",
    description: "Make money easier by helping people withdraw, using the Nomba Pro POS terminal. ",
    link: { to: "/" },
  },
];
