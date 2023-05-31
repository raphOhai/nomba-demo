import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import { Br } from "components";
import EasyAdoption from "assets/images/jpegs/invoice/svgs/receipt-text.svg";
import AllBusinesses from "assets/images/jpegs/invoice/svgs/dcube.svg";
import Scalable from "assets/images/jpegs/invoice/svgs/frame.svg";
import GlobalPayment from "assets/images/jpegs/invoice/svgs/global.svg";

export const InvoiceBusinessTools = [
  {
    id: 1,
    title: "Accept global payments",
    icon: <GlobalPayment />,
    description:
      "Nomba online invoices are optimised across mobile, tablet, and desktop. 70% of Stripe invoices are paid within 24 hours.",
  },
  {
    id: 2,
    title: "Easy adoption",
    icon: <EasyAdoption />,
    description: "Create, customise, and send a Nomba-hosted or PDF invoice in minutes – with no code required.",
  },
  {
    id: 3,
    title: "Made for any use case",
    icon: <AllBusinesses />,
    description:
      "Collect one-time or recurring payments. Add line items, discounts, and tax rates directly to your invoices.",
  },
  {
    id: 4,
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
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image1.jpg"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
  {
    id: 2,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image2.jpg"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
  {
    id: 3,
    title: "Manage invoices",
    description:
      "Oversee your invoicing operations directly from the  user-friendly Dashboard. Seamlessly manage every aspect of your invoices, from creation to customization, tracking, and payment status monitoring, all within a single centralized platform.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image3.jpg"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
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
        src="../assets/images/jpegs/invoice/slider/image1.jpg"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
];

export const invoiceTestimonial = [
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

export const resourceData = [
  {
    id: 1,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/resources/image1.png"
        alt="Invoicing Image"
        width={394}
        height={218}
        className=""
      />
    ),
    heading: "Why invoices are the perfect use case for open banking payments",
    text: "Being kind and willing to help others is more important than showing off one's skills or knowledge.",
    link: {
      text: "Read more",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    id: 2,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/resources/image2.png"
        alt="Invoicing Image"
        width={394}
        height={218}
        className=""
      />
    ),
    heading: "Why invoices are the perfect use case for open banking payments",
    text: "Being kind and willing to help others is more important than showing off one's skills or knowledge.",
    link: {
      text: "Read more",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
  {
    id: 3,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/resources/image3.png"
        alt="Invoicing Image"
        width={394}
        height={218}
        className=""
      />
    ),
    heading: "Why invoices are the perfect use case for open banking payments",
    text: "Being kind and willing to help others is more important than showing off one's skills or knowledge.",
    link: {
      text: "Read more",
      href: "https://dashboard.nomba.com/auth/login",
    },
  },
];
