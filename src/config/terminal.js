import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Br } from "components";
export const AccordionData = [
  {
    id: 1,
    header: "Who is the Nomba MAX for",
    content:
      "The Nomba MAX was specially designed for businesses that want to improve their payment collection experience and boost their business  growth.",
  },
  {
    id: 2,
    header: "Where can i get the Nomba MAX?",
    content:
      "The Nomba MAX is coming soon. Once you’ve signed up to join the waitlist; you'll be the first to know when it’s available.",
  },
  {
    id: 3,
    header: "How much is the Nomba MAX?",
    content:
      "Prices for the Nomba MAX caution fee and outright purchase will be announced at its launch. You'll be informed via email used in sign up.",
  },
];
export const MaxSponsorList = [
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/buypower-logo.png" loading="lazy" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/lacore-logo.png" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/Sneaklin.png" loading="lazy" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/marios-logo.png" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/abc.png" loading="lazy" />,
];

export const InTheBox = [
  {
    title: "Nomba MAX Terminal",
    image: (
      <StaticImage
        width={321}
        height={350}
        className=""
        alt="Nomba Max Terminal"
        src="../assets/images/jpegs/terminal/max/box/max.png"
      />
    ),
  },
  {
    title: "Charger",
    image: (
      <StaticImage
        width={353}
        height={277}
        className=""
        alt="Charger"
        src="../assets/images/jpegs/terminal/max/box/charger.png"
      />
    ),
  },
  {
    title: "POS Terminal Guide",
    image: (
      <StaticImage
        width={310}
        height={330}
        className=""
        alt="POS guide"
        src="../assets/images/jpegs/terminal/max/box/guide.png"
      />
    ),
  },
  {
    title: "Table stand",
    image: (
      <StaticImage
        width={340}
        height={303}
        className=""
        alt="Table Stand"
        src="../assets/images/jpegs/terminal/max/box/table-stand.png"
      />
    ),
  },
  {
    title: "Envelope",
    image: (
      <StaticImage
        width={340}
        height={303}
        className=""
        alt="Envelop"
        src="../assets/images/jpegs/terminal/max/box/envelope.png"
      />
    ),
  },
  {
    title: "Sticker",
    image: (
      <StaticImage
        width={328}
        height={118}
        className=""
        alt="Sticker"
        src="../assets/images/jpegs/terminal/max/box/stickers.png"
      />
    ),
  },
];
export const maxFeatures = [
  {
    title: (
      <>
        Faster Payment <Br on="all" /> Transactions{" "}
      </>
    ),
    description: "Collect payments successfully in 2 seconds! See workings",
    image: (
      <StaticImage
        width={458}
        height={294}
        className="max-w-[323px] md:max-w-[458px]"
        alt="faster payment"
        src="../assets/images/jpegs/terminal/max/features/fastpayment.png"
      />
    ),
  },
  {
    title: (
      <>
        High Speed <Br on="all" /> Printers{" "}
      </>
    ),
    description:
      "You asked, we've delivered. With Nomba MAX, you can finally experience lightning-fast receipt printing",
    image: (
      <StaticImage
        width={357}
        height={385}
        className="max-w-[200px] md:max-w-[357px]"
        alt="Speed Printers"
        src="../assets/images/jpegs/terminal/max/features/speedprinters.png"
      />
    ),
  },
  {
    title: (
      <>
        Long-lasting <Br on="all" /> Battery{" "}
      </>
    ),
    description:
      "With its extended battery life, you can worry less about power and more about what is important in your business.",
    image: (
      <StaticImage
        width={454}
        height={287}
        className="max-w-[255px] md:max-w-[454px]"
        alt="Long Lasting Battery"
        src="../assets/images/jpegs/terminal/max/features/longlasting.png"
      />
    ),
  },
  {
    title: (
      <>
        Reliable Network <Br on="all" /> Connectivity{" "}
      </>
    ),
    description: "Say goodbye to network downtime and hello to stable and high-speed 4G network.",
    image: (
      <StaticImage
        width={361}
        height={277}
        className="max-w-[223px] md:max-w-[361px]"
        alt="Network Connectivity"
        src="../assets/images/jpegs/terminal/max/features/network.png"
      />
    ),
  },
];

export const maxFeaturesBreakdown = [
  "5.0-inch HD 1280x720 capacitive touchscreen",
  "5 megapixel auto focus rear camera",
  "1GB RAM, 8GB ROM support 32GB external TF card",
  "7.4V/2000mAh rechargeable Li-ion battery",
  "100~240V AC 50/60HzAdapter",
  "1x Micro USB2.0, 1x DC jack",
  "Quad-core CPU",
];

export const maxTestimonial = [
  {
    testimonial:
      "“Besides the speed and reliability of transactions, what’s special about Terminal is that it integrates seamlessly with our system. From a single dashboard, we can easily analyse, reconcile, and make strategic decisions for our business.”    ",
    name: "Cynthia Portable",
    role: "GIG Motors LTD",
    image: (
      <StaticImage
        alt="Testimonial Image"
        src="../assets/images/jpegs/terminal/max/testimonials/image1.png"
        loading="lazy"
      />
    ),
  },
];
