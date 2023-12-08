import React from "react";

import { Br } from "components/br";
import { StaticImage } from "gatsby-plugin-image";

import PaymentOptionsIcon from "svgs/payment-checkout/payment-options.svg";
import TransparencyIcon from "svgs/payment-checkout/transparency.svg";
import AtmCardIcon from "svgs/payment-checkout/atm-card.svg";

export const notificationsSection = {
  title: "Instant Notifications: Real-Time Webhooks",
  description: "Stay informed in real-time with our webhook feature for instant transaction notifications.",
  screenshot: (
    <StaticImage
      src="../assets/images/jpegs/payment-checkout/payment-notifications.png"
      alt="Notifications Screenshot"
      placeholder="blurred"
      loading="lazy"
      height={465}
      width={453}
    />
  ),
};

export const benefitsSection = {
  title: "Smooth, Secure, Transparent Payments",
  benefits: [
    {
      icon: <AtmCardIcon className="menuIconOne" />,
      description: "Conveniently process payments with ease, accepting Mastercard, Visa, Verve in Nigeria; as well as AmEx.",
      title: "Supports Naira and Int'l cards.",
      tint: "bg-[#FFCC00]",
    },
    {
      icon: <PaymentOptionsIcon className="menuIconTwo" />,
      description: "Your payment, your choice! Pick from our options of using cards or bank transfers, to pay the way you want.",
      title: "Diverse Payment Options.",
      tint: "bg-[#33FF00]",
    },
    {
      icon: <TransparencyIcon className="menuIconThree" />,
      description: "You can only pay when you make a sale. No monthly fees. No setup fees. No other hidden fees.",
      title: "Transparent Pricing.",
      tint: "bg-[#00FFF6]",
    },
  ],
};

export const integrateSection = {
  title: "Integrate Payment on your Terms",
  description: (<>
    <span>Simplify your payments on our platform - we accept both</span> {` `}
    <span className="!text-[#E6E6E6] !font-medium">Naira and International(AmericanExpress and Visa)</span> {` `}
    <span>cards, transfers, and provide various payment options. Transparent pricing, no fees, and timely notifications through web-hook.</span>
  </>),
};

export const apiDocsSection = {
  description: "A simple, elegant interface so you can start integrating in minutes. Leverage our APIs to transform your businesses and products.",
  title: (
    <>
      Get to Integrate Fast with our <Br on="desktop" /> Checkout API
    </>
  ),
  docs: [
    {
      label: "cURL",
      language: "js",
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
      label: "Node.js",
      language: "js",
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
      label: "PHP",
      language: "js",
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
  ],
};

export const heroSection = {
  title: "Seamless Online Payment, Simplified",
  description: "Seamlessly integrate our product for a smoother checkout process that delights your customers. Elevate your transactions effortlessly.",
};

export const advantages = [
  "Maximize sales with better payment experience",
  "Zero delay: fast and swift settlements",
  "Built for all kinds of businesses",
  "Optimized for all kinds of devices",
  "Reduced declines and fraud protection",
];

export const faqs = [
  {
    id: 1,
    header: "Can it handle all card types?",
    content: "Yes, we accept Mastercard, Visa and Verve in Nigeria as well as American Express and Visa in the international borders.",
  },
  {
    id: 2,
    header: "What is the charge for checkout processing?",
    content: "We charge a flat fee of 10% of the total amount.",
  },
  {
    id: 3,
    header: "What payment methods do you support?",
    content: "We support Mastercard, Visa, Verve, and American Express.",
  },
  {
    id: 4,
    header: "How easy is it to use?",
    content: "We have an easy-to-use interface that makes it easy for you to integrate with our API.",
  },
  {
    id: 5,
    header: "How does Nomba Checkout work?",
    content: "We use our API to process payments and integrate with our payment gateway. We also provide you with a simple, intuitive interface to manage your payments.",
  },
];
