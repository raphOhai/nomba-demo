import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import BusinessIcon from "svgs/n-icons/outline/business.svg";
import Wifi from "svgs/n-icons/outline/wifi.svg";
import Globe from "svgs/n-icons/outline/globe.svg";
import Battery from "svgs/battery-charging.svg";
import box1 from "assets/images/jpegs/mini/inthebox/1.png";
import box2 from "assets/images/jpegs/mini/inthebox/2.png";
import box3 from "assets/images/jpegs/mini/inthebox/3.png";
import box4 from "assets/images/jpegs/mini/inthebox/4.png";
import box5 from "assets/images/jpegs/mini/inthebox/5.png";
export const Testimonial = [
  {
    testimonial:
      "We’ve been able to build something in 3 years that a lot of brands haven’t actually gotten to in 10 years.",
    name: "Adeuche",
    role: "Co-founder & CEO Randle Inc",
    image: (
      <StaticImage
        alt="Testimonial Image"
        src="../assets/images/jpegs/invoice/testimonials/image1.png"
        loading="lazy"
      />
    ),
  },
];
export const AccordionData = [
  {
    id: 1,
    header: "Who is the Nomba MAX for?",
    content:
      "The Nomba MAX was specially designed for businesses that want to improve their payment experience and boost their business growth.",
  },
  {
    id: 2,
    header: "Does Nomba MAX print receipts?",
    content: "Nomba MAX prints receipts and also allows for several re-prints.",
  },
  {
    id: 3,
    header: "What else can I do with my Nomba MAX?",
    content:
      "We are constantly working on updates and improvements for the Nomba MAX to improve your experience; please stay tuned to your email and our social media to keep up.",
  },
];
export const miniFeaturesBreakdown = [
  "5.0-inch HD 1280x720 capacitive touchscreen",
  "5 megapixel auto focus rear camera",
  "1GB RAM, 8GB ROM support 32GB external TF card",
  "7.4V/2000mAh rechargeable Li-ion battery",
  "100~240V AC 50/60HzAdapter",
  "1x Micro USB2.0, 1x DC jack",
];

export const miniBenefits = [
  "Lower transaction charges",
  "Handy and convenient",
  "Send paperless receipts",
  "Get instant alerts and auto-settlement",
];

export const everyBusinesses = [
  {
    id: 1,
    title: "Restaurant",
    color: "n-yellow2",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image1.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={821}
      />
    ),
  },
  {
    id: 2,
    title: "Pharmacy",
    color: "n-green2",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image1.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={821}
      />
    ),
  },
  {
    id: 3,
    title: "Bolt driving",
    color: "n-pink1",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image1.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={821}
      />
    ),
  },
  {
    id: 3,
    title: "Bolt driving",
    color: "n-pink1",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image1.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={821}
      />
    ),
  },
  {
    id: 3,
    title: "Bolt driving",
    color: "n-pink1",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image1.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={821}
      />
    ),
  },
];

export const miniFeatures = [
  {
    title: "Portablity",
    icon: <BusinessIcon />,
    description: "A new portable medium to collect physical payments",
    more_description: "Collect payment anywhere, anytime and seamlessly",
  },
  {
    title: "Long lasting battery",
    icon: <Battery />,
    description: "A new portable medium to collect physical payments",
    more_description: "Collect payment anywhere, anytime and seamlessly",
  },
  {
    title: "Faster Transactions",
    icon: <Wifi />,
    description: "A new portable medium to collect physical payments",
    more_description: "Collect payment anywhere, anytime and seamlessly",
  },
  {
    title: "Reliable network",
    icon: <Globe />,
    description: "A new portable medium to collect physical payments",
    more_description: "Collect payment anywhere, anytime and seamlessly",
  },
];

export const InTheBox = [
  {
    id: 1,
    title: "Nomba Mini Terminal",
    image: (
      <StaticImage
        width={321}
        height={300}
        className=""
        alt="Nomba Max Terminal"
        src="../assets/images/jpegs/mini/inthebox/1.png"
      />
    ),
    path: box1,
  },
  {
    id: 2,
    title: "Charger",
    image: (
      <StaticImage
        width={353}
        height={300}
        className=""
        alt="Charger"
        src="../assets/images/jpegs/mini/inthebox/2.png"
      />
    ),
    path: box2,
  },
  {
    id: 3,
    title: "POS Terminal Guide",
    image: (
      <StaticImage
        width={310}
        height={300}
        className=""
        alt="POS guide"
        src="../assets/images/jpegs/mini/inthebox/3.png"
      />
    ),
    path: box3,
  },
  {
    id: 4,
    title: "Table stand",
    image: (
      <StaticImage
        width={340}
        height={300}
        className=""
        alt="Table Stand"
        src="../assets/images/jpegs/mini/inthebox/4.png"
      />
    ),
    path: box4,
  },
  {
    id: 6,
    title: "Nomba Mini Terminal",
    image: (
      <StaticImage
        width={321}
        height={300}
        className=""
        alt="Nomba Mini Terminal"
        src="../assets/images/jpegs/mini/inthebox/1.png"
      />
    ),
    path: box1,
  },

  {
    id: 6,
    title: "Sticker",
    image: (
      <StaticImage
        width={328}
        height={300}
        className=""
        alt="Sticker"
        src="../assets/images/jpegs/mini/inthebox/5.png"
      />
    ),
    path: box5,
  },
  {
    id: 7,
    title: "Table stand",
    image: (
      <StaticImage
        width={340}
        height={300}
        className=""
        alt="Table Stand"
        src="../assets/images/jpegs/mini/inthebox/4.png"
      />
    ),
    path: box4,
  },
];
