import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import EasyAdoption from "assets/images/jpegs/invoice/svgs/receipt-text.svg";
import AllBusinesses from "assets/images/jpegs/invoice/svgs/dcube.svg";
import Scalable from "assets/images/jpegs/invoice/svgs/frame.svg";
import Shareable from "assets/images/jpegs/invoice/svgs/share.svg";
// import GlobalPayment from "assets/images/jpegs/invoice/svgs/global.svg";
import createInvoice from "jpegs/invoice/how-it-works/create.mp4";
import shareInvoice from "jpegs/invoice/how-it-works/share.mp4";
import receivePayment from "jpegs/invoice/how-it-works/receive.mp4";
import { Br } from "components";

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
    title: (
      <>
        Accept payment directly <Br on="desktop" /> from your website
      </>
    ),
    description:
      "Gain access to the Nomba Create a smoother checkout experience for customers with our checkout integation.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/checkout/features/accept.png"
        alt="How it works"
        width={545}
        height={480}
      />
    ),
    // image: (
    //   <video
    //     width={572}
    //     height={572}
    //     muted
    //     playsInline
    //     autoPlay
    //     loop
    //     src={createInvoice}
    //     className="rounded-lg"
    //   ></video>
    // ),
  },
  {
    id: 2,
    title: (
      <>
        No delay, Fast and <Br on="desktop" /> Successful
      </>
    ),
    description: "Effortlessly Establish Your Business Payments with Nomba Checkout and enjoy successful payment.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/checkout/features/no-delay.png"
        alt="How it works"
        width={636}
        height={319}
      />
    ),
    // image: (
    //   <video width={572} height={572} muted playsInline autoPlay loop src={shareInvoice} className="rounded-lg"></video>
    // ),
  },
  {
    id: 3,
    title: "Diverse Payment Options",
    description: "Accept payments from your customers using a variety of payment methods and get paid easily.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/checkout/features/diverse.png"
        alt="How it works"
        width={444}
        height={319}
      />
    ),
    // image: (
    //   <video
    //     width={572}
    //     height={572}
    //     muted
    //     playsInline
    //     autoPlay
    //     loop
    //     className="rounded-lg"
    //     src={receivePayment}
    //   ></video>
    // ),
  },
];

export const everyBusinesses = [
  {
    id: 1,
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
      "Nomba's invoicing system has made it possible for me to collect and reconcile payments from my retailers. I can easily share and set reminders which makes it easy for them to remember.",
    name: "Mrs Unekwu",
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

export const docs = [
  {
    language: "js",
    label: "cURL",
    snippet: `
{
  "id": 67750,
  "userId": 1,
  "vasTransactionRef": "6798201",
  "transactionDetails": {
    "your_reference": "xutzy01690881363158",
    "provider_reference": "6798201",
    "our_reference": "6798201",
    "provider_message": "Successful",
    "value_number": "10430734755",
    "provider_response": {
      "status": "Successful",
      "statusCode": "00",
      "data": {
        "TrxRef": "5856102"
      }
    }
  },
  "status": "CONFIRMED",
  "amount": 9000,
  "packageName": "compact",
  "email": null,
  "createdAt": "2023-08-01T10:16:07.755+01:00",
  "updatedAt": "2023-08-01T10:16:07.755+01:00",
  "customerId": "10430734755",
  "vasProvider": "null",
}
                `,
  },
  {
    language: "js",
    label: "Node.js",
    snippet: `
{
  "id": 7760,
  "userId": 1,
  "vasTransactionRef": "6798201",
  "transactionDetails": {
    "your_reference": "xutzy01690881363158",
    "provider_reference": "6798201",
    "our_reference": "6798201",
    "provider_message": "Successful",
    "value_number": "10430734755",
    "provider_response": {
      "status": "Successful",
      "statusCode": "00",
      "data": {
        "TrxRef": "5856102"
      }
    }
  },
  "status": "CONFIRMED",
  "amount": 9000,
  "packageName": "compact",
  "email": null,
  "createdAt": "2023-08-01T10:16:07.755+01:00",
  "updatedAt": "2023-08-01T10:16:07.755+01:00",
  "customerId": "10430734755",
  "vasProvider": "null",
}
                `,
  },
  {
    language: "js",
    label: "PHP",
    snippet: `
{
  "id": 960,
  "userId": 1,
  "vasTransactionRef": "6798201",
  "transactionDetails": {
    "your_reference": "xutzy01690881363158",
    "provider_reference": "6798201",
    "our_reference": "6798201",
    "provider_message": "Successful",
    "value_number": "10430734755",
    "provider_response": {
      "status": "Successful",
      "statusCode": "00",
      "data": {
        "TrxRef": "5856102"
      }
    }
  },
  "status": "CONFIRMED",
  "amount": 9000,
  "packageName": "compact",
  "email": null,
  "createdAt": "2023-08-01T10:16:07.755+01:00",
  "updatedAt": "2023-08-01T10:16:07.755+01:00",
  "customerId": "10430734755",
  "vasProvider": "null",
}
        `,
  },
];
