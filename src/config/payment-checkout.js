import React from "react";

export const integrateSection = {
  title: "Integrate Payment on your Terms",
  description: (<>
    <span>Simplify your payments on our platform - we accept both</span> {` `}
    <span className="!text-[#E6E6E6] !font-medium">Naira and International(AmericanExpress and Visa)</span> {` `}
    <span>cards, transfers, and provide various payment options. Transparent pricing, no fees, and timely notifications through web-hook.</span>
  </>),
};

export const heroSection = {
  title: "Seamless Online Payment, Simplified",
  description: "Seamlessly integrate our product for a smoother checkout process that delights your customers. Elevate your transactions effortlessly.",
};

export const faqData = [
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

export const benefits = [
  "Maximize sales with better payment experience",
  "Zero delay: fast and swift settlements",
  "Built for all kinds of businesses",
  "Optimized for all kinds of devices",
  "Reduced declines and fraud protection",
];

export const docs = [
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
];
