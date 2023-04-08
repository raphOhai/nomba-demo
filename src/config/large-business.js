import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  imgClass,
  imageStyle,
  imgClassWrapper1,
  imgClassWrapper2,
  imgClassWrapper3,
  gridWrapper,
} from "./img-clases";

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
    title:
      "Fleets prefer receiving payments through transfer, POS terminals and QR codes ",
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
    title: "Pharmacies",
    headline:
      "Over 234 businesses in the Nigeria and Africa uses Nomba to simplify their payment. ",
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
    headline:
      "gsdf asbpopqrb qpieb pqehi Africa uses Nomba to simplify their payment. ",
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

export const codeblockSection = {
  headline: "Get realtime notifications",
  description:
    "Streamline your workflow and customers notifications with ease using our powerful Webhook feature",
  link: { href: "/", text: "Get Nomba for your growing business" },
  image: (
    <StaticImage
      src="../assets/images/jpegs/large-business/code-block.png"
      alt="Image Code Block"
      width={545}
      height={420}
    />
  ),
};
