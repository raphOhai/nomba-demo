import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import EasyAdoption from "assets/images/jpegs/invoice/svgs/receipt-text.svg";
import AllBusinesses from "assets/images/jpegs/invoice/svgs/dcube.svg";
import Scalable from "assets/images/jpegs/invoice/svgs/frame.svg";
import Shareable from "assets/images/jpegs/invoice/svgs/share.svg";
// import GlobalPayment from "assets/images/jpegs/invoice/svgs/global.svg";
import createInvoice from "jpegs/invoice/how-it-works/create.mp4";
import shareInvoice from "jpegs/invoice/how-it-works/share.webm";
import receivePayment from "jpegs/invoice/how-it-works/receive.webm";

export const InvoiceBusinessTools = [
  {
    id: 1,
    title: "Easy to Use",
    icon: <EasyAdoption />,
    description: "Create, customise and send invoice to your customers stress-free and in less than 5 minutes",
  },
  {
    id: 2,
    title: "Suited for all businesses",
    icon: <AllBusinesses />,
    description:
      "Regardless of your industry, Nomba invoice helps you accept and organise payments, as well as automate reminders",
  },
  {
    id: 3,
    title: "Customise to Your Needs",
    icon: <Scalable />,
    description:
      "Create invoices to suit your business needs. Add item line, tax, available discounts and receive recurring payments, as you wish.",
  },
  {
    id: 4,
    title: "Share easy",
    icon: <Shareable />,
    description:
      "Share your Nomba invoice effortlessly with your clients either via email, sms, or Whatsapp and get paid easily",
  },
];

export const howItWorks = [
  {
    id: 1,
    title: "Create an invoice",
    description:
      "Add product and customer information to create your invoice. Then include a more detailed product description, size, quantity, discount and tax; as needed.",
    // image: (
    //   <StaticImage
    //     src="../assets/images/jpegs/invoice/how-it-works/create.png"
    //     alt="How it works"
    //     width={572}
    //     height={572}
    //   />
    // ),
    image: <video width={572} height={572} muted playsInline autoPlay loop src={createInvoice}></video>,
  },
  {
    id: 2,
    title: "Share invoice",
    description:
      "In only two clicks, you can send professional invoices to your customers by emailing them a PDF invoice or even sharing a link.",
    // image: (
    //   <StaticImage
    //     src="../assets/images/jpegs/invoice/how-it-works/share.png"
    //     alt="How it works"
    //     width={572}
    //     height={572}
    //   />
    // ),
    image: <video width={572} height={572} muted playsInline autoPlay loop src={shareInvoice}></video>,
  },
  {
    id: 3,
    title: "Receive payments",
    description:
      "Enjoy the convenience of receiving payments seamlessly from customers directly into your Nomba account. ",
    // image: (
    //   <StaticImage
    //     src="../assets/images/jpegs/invoice/how-it-works/receive.png"
    //     alt="How it works"
    //     width={572}
    //     height={572}
    //   />
    // ),
    image: <video width={572} height={572} muted playsInline autoPlay loop src={receivePayment}></video>,
  },
  {
    id: 4,
    title: "Manage invoices",
    description:
      "Manage every aspect of your invoice within this single platform; creating, tracking, payment status monitoring, automating payment reminders and auto-settlement.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/how-it-works/manage.png"
        alt="How it works"
        width={572}
        height={572}
      />
    ),
  },
  {
    id: 5,
    title: "Schedule reminders",
    description: "Manage your invoices with scheduled reminders to enhance productivity and never miss a deadline.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/how-it-works/reminders.png"
        alt="How it works"
        width={572}
        height={572}
      />
    ),
  },
];

export const everyBusinesses = [
  {
    id: 1,
    title: "Manage invoices",

    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image1.png"
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

    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image2.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
  {
    id: 3,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image3.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
  {
    id: 4,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image4.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
  {
    id: 5,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image5.png"
        className="rounded-[10px] box-wrapper"
        alt="How it works"
        width={392}
        height={392}
      />
    ),
  },
  {
    id: 6,
    image: (
      <StaticImage
        src="../assets/images/jpegs/invoice/slider/image6.png"
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

export const faqData = [
  {
    id: 1,
    header: "Who can use Nomba invoice?",
    content:
      "Any business owner regardless of size or type (including freelancers) can use the Nomba invoice to organise their business payment.",
  },
  {
    id: 2,
    header: "Can I send the Invoice via Whatsapp?",
    content: "Yes, Nomba invoice enables you send invoices to your customers via WhatsApp and even email.",
  },
  {
    id: 3,
    header: "Can I make an invoice recurring?",
    content: "Yes, you can set an invoice to be sent to your customers periodically.",
  },
  {
    id: 4,
    header: "Can I monitor the status of my invoice?",
    content:
      "Yes, you can easily monitor  the status of invoices on your Nomba dashboard; whether pending or completed.",
  },
  {
    id: 5,
    header: "Is the invoice actually free? ",
    content: "It definitely is, with no hidden charges too! All you need is a Nomba business account.",
  },
];
