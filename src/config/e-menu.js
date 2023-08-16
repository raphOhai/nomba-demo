import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const eMenuTestimonial = [
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

export const businessTool = [
  {
    title: "Robust menu",
    heading: "Robust menu list",
    description: "Enjoy the flexibility to create a detailed menu list that showcases all your offerings.",
    image: (
      <StaticImage
        alt="Robust Menu"
        src="../assets/images/jpegs/e-menu/section4/page1.png"
        width={689}
        height={493}
        className="md:mt-[84px]"
      />
    ),
    color: "bg-[#F7E189]",
  },
  {
    title: "Online access",
    heading: "Guaranteed Customer Satisfaction",
    description:
      "Ensure easy access and convenience for your customers by making your menu available in the form of QR code or URL link",
    image: (
      <StaticImage
        alt="Robust Menu"
        src="../assets/images/jpegs/e-menu/section4/page2.png"
        width={482}
        height={474}
        className="md:my-10"
      />
    ),
    color: "bg-[#D9F2F2]",
  },
  {
    title: "Order management",
    heading: "Receive and process customer orders",
    description: "Manage your customer’s orders through a single, well-organised process.",
    image: (
      <StaticImage
        alt="Robust Menu"
        src="../assets/images/jpegs/e-menu/section4/page3.png"
        width={689}
        height={493}
        className="md:mt-[84px]"
      />
    ),
    color: "bg-[#FCDCCF]",
  },

  {
    title: "Order tracking",
    heading: "Save time on accounting process",
    description: "Accept orders, receive payments and enjoy instant reconciliation all from one device.",
    image: (
      <StaticImage
        alt="Robust Menu"
        src="../assets/images/jpegs/e-menu/section4/page4.png"
        width={556}
        height={471}
        className="md:my-10"
      />
    ),
    color: "bg-[#EFD9F2]",
  },
];

export const howItworks = [
  {
    title: "Create",
    id: "01",
    description: "Add your detailed menu list and create your QR code.",
    color: "bg-[#FAC412]",
  },
  {
    id: "02",
    title: "Receive Order",
    description: "Place customers’ orders on your Nomba POS and automatically send to the kitchen in just one click.",
    color: "bg-[#EFD9F2]",
  },
  {
    id: "03",
    title: "Accept payment",
    description: "With your Nomba POS, you can receive payment from your customers.",
    color: "bg-[#FCDCCF]",
  },
  {
    id: "04",
    title: "Reconcile",
    description:
      "Save time by getting instant reconciliation of all payments, on one device, at the end of every business day.",
    color: "bg-[#D9F2F2]",
  },
  {
    id: "05",
    title: "Generate",
    description:
      "Add a product and customer information to create an invoice. Manually set a tax rate or automatically collect sales taxes. Customise your invoice to.",
    color: "bg-[#F7E189]",
  },
];

export const faqData = [
  {
    id: 1,
    header: "How do I become eligible for the Nomba Menu?",
    content:
      "For Nomba users, simply tap the “Get started now” and follow the simple instructions. For non-Nomba users, you can create a Nomba account under 2 mins and request your preferred POS terminal. Then tap the “Get started Now” button on this page.",
  },
  {
    id: 2,
    header: "Is the Nomba Menu free?",
    content: "Yes it is. All you need is a Nomba account and Nomba POS terminal to be eligible for the menu feature.",
  },
  {
    id: 3,
    header: "Can I update the menu items and prices in real-time?",
    content: "Yes, you can. Nomba Menu items and prices can be updated real-time on your Nomba dashboard.",
  },
  {
    id: 4,
    header: "Can I use the Nomba menu for both online and offline orders?",
    content:
      "Yes, you can. Offline, you can receive payments via cash, card and transfers; online, you can receive payments via transfer only.",
  },
];
