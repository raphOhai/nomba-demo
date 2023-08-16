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
import box6 from "assets/images/jpegs/mini/inthebox/6.png";

export const miniTestimonial = [
  {
    testimonial:
      "I take my Nomba Mini everywhere I go. I’m always on the move to deliver orders, and my Nomba Mini has been very reliable in collecting payments",
    name: "",
    role: "Pati Ifang | Fashion Entrepreneur",
    image: (
      <StaticImage alt="Testimonial Image" src="../assets/images/jpegs/mini/testimonials/main.png" loading="lazy" />
    ),
    side: (
      <StaticImage alt="Testimonial Image" src="../assets/images/jpegs/mini/testimonials/side.png" loading="lazy" />
    ),
  },
];

export const AccordionData = [
  {
    id: 1,
    header: "Is the price for outright purchase?",
    content: "Yes, when you pay for the Nomba mini POS terminal, it fully belongs to you. It is not a caution fee.",
  },
  {
    id: 2,
    header: "Does the Nomba Mini terminal print receipts?",
    content:
      "No, it doesn’t but you can send receipts to customers’ phones for FREE via WhatsApp, email or SMS and you won’t lose it, unlike paper receipts.",
  },
  {
    id: 3,
    header: "Does it connect to WiFi?",
    content: "No, you need to insert a dedicated sim into the sim card slot to access data service.",
  },
  {
    id: 4,
    header: "Do I need to connect it to a phone before I can start to use it?",
    content: "No, the Nomba Mini is a standalone device; this means all you need to transact is on your terminal.",
  },
  {
    id: 5,
    header: "Can I raise complaints on the terminal?",
    content:
      "Yes. In rare cases where a payment is declined on your terminal, you can issue a dispute request and we will initiate a refund.",
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
  "Lowest processing fees in the market",
  "Handy and convenient",
  "Send paperless receipts",
  "Get instant alerts and auto-settlement",
];

export const everyBusinesses = [
  {
    id: 1,
    title: "Restaurant",
    color: "b-1",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image1.jpg"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile1.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
  {
    id: 2,
    title: "Supermarket",
    color: "b-2",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image2.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile2.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
  {
    id: 3,
    title: "Pharmacy",
    color: "b-3",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image3.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile3.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
  {
    id: 4,
    title: "Fashion",
    color: "b-4",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image4.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile4.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
  {
    id: 5,
    title: "Marketplace",
    color: "b-5",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image5.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile5.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
  {
    id: 6,
    title: "Taxi",
    color: "b-6",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image6.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile6.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
  {
    id: 7,
    title: "Bar",
    color: "b-5",
    image: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/image7.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={937}
        height={526}
      />
    ),
    mobileImage: (
      <StaticImage
        src="../assets/images/jpegs/mini/business-types/mobile7.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={369}
        height={461}
      />
    ),
  },
];

export const miniFeatures = [
  {
    title: "Introducing Nomba Mini",
    icon: <BusinessIcon className="mini-svg-1" />,
    description: "Your Payment Padi for on-the-go transactions!",
    more_description: "The Nomba Mini is small enough to carry with you anywhere, anytime.",
  },
  {
    title: "Endless Reliability",
    icon: <Battery className="mini-svg-2" />,
    description: "Nomba Mini Terminal Keeps You Going!",
    more_description:
      "With an initial charge of two hours, your terminal is ready to deliver long-lasting performance that you can rely on.",
  },
  {
    title: "Seamless Payments",
    icon: <Wifi className="mini-svg-3" />,
    description: " Quick Transactions, Instant Alerts, Auto-Settlement!",
    more_description:
      "Enhance your payment process with quick and seamless transactions, instant alerts, and auto-settlement for both you and your customers.",
  },
  {
    title: "Reliable network",
    icon: <Globe className="mini-svg-4" />,
    description: "An uninterrupted connectivity with 4G and WiFi Support",
    more_description:
      "Enjoy uninterrupted connectivity with your Nomba Mini terminal. 4G and WiFi-enabled, it does not require being connected to an android device.",
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
    title: "Sticker Mascot",
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
    id: 21,
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
    id: 7,
    title: "Sticker",
    image: (
      <StaticImage
        width={340}
        height={300}
        className=""
        alt="Sticker"
        src="../assets/images/jpegs/mini/inthebox/6.png"
      />
    ),
    path: box6,
  },
];
