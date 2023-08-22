import { StaticImage } from "gatsby-plugin-image";
import { Br } from "components";
import React from "react";

export const apiTestimonial = [
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

export const faqData = [
  {
    id: 1,
    header: "Who can use Nomba invoice?",
    content:
      "Any business owner regardless of size or type (including freelancers) can use the Nomba invoice to organise their business payment.",
  },
  {
    id: 2,
    header: "Can I send the Api via Whatsapp?",
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

export const apiFeatures = [
  {
    title: (
      <>
        Customizable Virtual <Br on="all" /> Accounts for every user
      </>
    ),
    description: "Enhance user engagement and simplify fund management tailored to each user’s needs.",
    image: (
      <StaticImage
        width={360}
        height={360}
        className="max-w-[280px] md:max-w-[360px]"
        alt="faster payment"
        src="../assets/images/jpegs/api/features/1.png"
      />
    ),
  },
  {
    title: (
      <>
        Swift and Secure Money <Br on="all" /> Transfer around the World
      </>
    ),
    description: "Cutting-Edge Solutions for Seamless and Trusted Global Financial Transactions",
    image: (
      <StaticImage
        width={360}
        height={360}
        className="max-w-[280px] md:max-w-[360px]"
        alt="Speed Printers"
        src="../assets/images/jpegs/api/features/2.png"
      />
    ),
  },
  {
    title: (
      <>
        Real-time Insights and <Br on="all" /> Actions with Webhooks
      </>
    ),
    description:
      "Stay connected to your users in real-time; and receive instant notifications about account activities",
    image: (
      <StaticImage
        width={360}
        height={360}
        className="max-w-[280px] md:max-w-[360px]"
        alt="Long Lasting Battery"
        src="../assets/images/jpegs/api/features/3.png"
      />
    ),
  },
  {
    title: (
      <>
        Triple-layered Security to <Br on="all" /> Safeguard your FinTech
      </>
    ),
    description: "With our comprehensive security approach, your financial ecosystem is shielded at every step.",
    image: (
      <StaticImage
        width={360}
        height={360}
        className="max-w-[280px] md:max-w-[360px]"
        alt="Network Connectivity"
        src="../assets/images/jpegs/api/features/4.png"
      />
    ),
  },
];
