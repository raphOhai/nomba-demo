import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import { Br } from "components";
import EasyAdoption from "assets/images/jpegs/invoice/svgs/receipt-text.svg";
import AllBusinesses from "assets/images/jpegs/invoice/svgs/dcube.svg";
import Scalable from "assets/images/jpegs/invoice/svgs/frame.svg";

export const InvoiceBusinessTools = [
  {
    id: 1,
    title: "Easy to use",
    icon: <EasyAdoption />,
    description: "Create, customise and send invoice to your customers stress-free and in less than 5 minutes.",
  },
  {
    id: 2,
    title: "Suited for all businesses",
    icon: <AllBusinesses />,
    description:
      "Collect one-time or recurring payments. Add line items, discounts, and tax rates directly to your invoices.",
  },
  {
    id: 3,
    title: "Scalable for your needs",
    icon: <Scalable />,
    description: "Nomba APIs help automate your invoicing workflows and accounts receivable processes. ",
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Create an invoice",
    description:
      "Generate invoices with ease by adding product and customer information. Customize the invoice to match your brand and choose manual or automated tax settings. Save your details in the Dashboard for quick and efficient invoicing",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/how-it-works/generate.png"
        alt="How it works"
        width={572}
        height={572}
      />
    ),
  },
  {
    id: 2,
    title: "Share invoice",
    description:
      "Effortlessly send professional invoices to your customers with a simple click. Choose between emailing them a PDF invoice or sharing a link to a hosted invoice page where payment details can be accessed",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/how-it-works/generate.png"
        alt="How it works"
        width={572}
        height={572}
      />
    ),
  },
  {
    id: 3,
    title: "Receive payments",
    description:
      "Unlock the convenience of receiving payments for shared invoices effortlessly. Provide your customers with seamless payment options, allowing them to settle their invoice obligations quickly and conveniently.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/how-it-works/generate.png"
        alt="How it works"
        width={572}
        height={572}
      />
    ),
  },
  {
    id: 4,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/how-it-works/generate.png"
        alt="How it works"
        width={572}
        height={572}
      />
    ),
  },
];

export const howItWorksSlider = [
  {
    id: 1,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage src="../assets/images/jpegs/invoice/slider/image1.jpg" alt="How it works" width={392} height={392} />
    ),
  },
  {
    id: 2,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage src="../assets/images/jpegs/invoice/slider/image2.jpg" alt="How it works" width={392} height={392} />
    ),
  },
  {
    id: 3,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage src="../assets/images/jpegs/invoice/slider/image3.jpg" alt="How it works" width={392} height={392} />
    ),
  },
  {
    id: 4,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage src="../assets/images/jpegs/invoice/slider/image1.jpg" alt="How it works" width={392} height={392} />
    ),
  },
];
