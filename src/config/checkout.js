import React from "react";

import { Br } from "components/br";

import PaymentOptionsIcon from "svgs/checkout/payment-options.svg";
import TransparencyIcon from "svgs/checkout/transparency.svg";
import AtmCardIcon from "svgs/checkout/atm-card.svg";

export const notificationsSection = {
  description: "Stay informed in real-time with our webhook feature for instant transaction notifications.",
  title: "Instant notifications: real-time webhooks",
};

export const acceptPaymentSection = {
  description: "Create your online store and get paid easily via our Checkout plugin on Shopify store and WooCommerce ",
  title: (
    <>
      Accept payment on <Br on="desktop" /> Shopify and WooCommerce
    </>
  ),
};

export const checkoutRateSection = {
  description: "We offer you the best deals on your checkout transactions than any other checkout services in Nigeria",
  title: "Our Checkout rate",
};

export const integrateSection = {
  description:
    "Simplify your payments on our platform — we accept both Naira and International cards, transfers, and provide various payment options",
  title: "Integrate online checkout on your terms",
};

export const benefitsSection = {
  title: (
    <>
      Smooth, secure, <Br on="desktop" /> transparent payments
    </>
  ),
  benefits: [
    {
      icon: <AtmCardIcon className="menuIconOne" />,
      description: "Conveniently process payments with ease, accepting Mastercard, Visa, Verve and AMEX cards.",
      title: "Supports Naira and Int'l cards.",
      tint: "bg-[#FFCC00]",
    },
    {
      icon: <PaymentOptionsIcon className="menuIconTwo" />,
      description:
        "Your payment, your choice! Pick from our options of using cards or bank transfers, to pay the way you want.",
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

export const apiDocsSection = {
  description:
    "A simple, elegant interface so you can start integrating in minutes. Leverage our APIs to transform your businesses and products.",
  title: (
    <>
      Get to Integrate Fast with our <Br on="desktop" /> Checkout API
    </>
  ),
  docs: [
    {
      label: "Node.js",
      language: "js",
      snippet: `var axios = require('axios');
var data = '{
  "order": {
    "orderReference": "testingref090",
    "callbackUrl": "https://www.nomba.com",
    "customerEmail": "ttt@gmail.com",
    "amount": 50,
    "currency": "NGN",
    "customerId": "identify123"
  }
}';

var config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.nomba.com/v1/checkout/order',
  headers: {
    'accountId': 'cb6778b6-207c-41ac-a7fd-c2d1969b6aa6'
  },
  data: data
};

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
      `,
    },
    {
      label: "PHP",
      language: "js",
      snippet: `<?php

$curl = curl_init();

curl_setopt_array($curl, array(
    CURLOPT_URL => '<https://api.nomba.com/v1/checkout/order>',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => '',
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => 'POST',
    CURLOPT_POSTFIELDS => '{
        "order": {
            "orderReference": "testingref090",
            "callbackUrl": "<https://www.nomba.com>",
            "customerEmail": "ttt@gmail.com",
            "amount": 50,
            "currency": "NGN",
            "customerId": "identify123"
        }
    }',
    CURLOPT_HTTPHEADER => array(
        'accountId: cb6778b6-207c-41ac-a7fd-c2d1969b6aa6'
    ),
));

$response = curl_exec($curl);

curl_close($curl);

echo $response;
      `,
    },
  ],
};

export const heroSection = {
  title: (
    <>
      Seamless Online <Br on="desktop" /> Payment, Simplified
    </>
  ),
  description:
    "Seamlessly integrate our product for a smoother checkout process that delights your customers. Elevate your transactions effortlessly.",
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
    content: "Yes, we conveniently process payments with ease, accepting Mastercard, Visa, Verve and AMEX cards",
  },
  {
    id: 2,
    header: "What is the charge for checkout processing?",
    content:
      "We charge a variable fee of 1.4% for checkout processing on Naira transactions; and 3.6% for international transactions.",
    subContent: "Only on Naira transactions, not international transactions.",
  },
  {
    id: 3,
    header: "What payment methods do you support?",
    content: "We support card and bank transfer",
  },
  {
    id: 4,
    header: "How long does it take to get my money?”",
    content:
      "We automatically settle into your account T+1; all transactions today, will be settled automatically into your account the next working day i.e. tomorrow.",
  },
  {
    id: 5,
    header: "Do you offer tailored pricing based on volumes?",
    content:
      "Yes, we are happy to discuss tailored pricing for merchants who aim to process large volumes. Please book a demo and we'll be happy to discuss this.",
  },
];
