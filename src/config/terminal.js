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
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/sneaklin-logo.png" loading="lazy" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/marios-logo.png" />,
  <StaticImage alt="buy power" src="../assets/images/jpegs/terminal/abc-logo.png" loading="lazy" />,
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

export const spiningTerminal = <h1>Heloo</h1>;
