import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Br } from "components";
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
export const MaxSponsorList = [
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/buypower-logo.png" loading="lazy" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/lacore-logo.png" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/Sneaklin.png" loading="lazy" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/marios-logo.png" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/abc.png" loading="lazy" />,
];

export const InTheBox = [
  {
    id: 1,
    title: "Nomba MAX Terminal",
    image: (
      <StaticImage
        width={321}
        height={300}
        className=""
        alt="Nomba Max Terminal"
        src="../assets/images/jpegs/terminal/max/box/max.png"
      />
    ),
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
        src="../assets/images/jpegs/terminal/max/box/charger.png"
      />
    ),
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
        src="../assets/images/jpegs/terminal/max/box/guide.png"
      />
    ),
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
        src="../assets/images/jpegs/terminal/max/box/table-stand.png"
      />
    ),
  },
  {
    id: 5,
    title: "Envelope",
    image: (
      <StaticImage
        width={310}
        height={300}
        className=""
        alt="Envelop"
        src="../assets/images/jpegs/terminal/max/box/envelope.png"
      />
    ),
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
  "Android 11.0 with 1GB RAM, 8GB ROM support 32GB external TF card",
  "7.4V/2000mAh rechargeable Li-ion battery",
  "100~240V AC 50/60HzAdapter",
  "1x Micro USB2.0, 1x DC jack",
  "Quad-core CPU",
  "Type-C charger",
];

export const maxTestimonial = [
  {
    testimonial:
      "“I like their products and I’ve even introduced them to others like my hotelier colleagues; the speed and lack of network error especially. Anytime we use them - we see the alert, we get our money. Also, for every transaction, I see it on my POS and I see it on my phone.”",
    name: "Alhaji Hassan Musaibu",
    role: "Owner of Ghatsview Supermarket",
    image: (
      <StaticImage
        alt="Testimonial Image"
        src="../assets/images/jpegs/terminal/max/testimonials/image1.jpg"
        loading="lazy"
      />
    ),
  },
];
