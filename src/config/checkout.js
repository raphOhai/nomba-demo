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
  title: "Accept payment on Shopify and WooCommerce",
};

export const checkoutRateSection = {
  description: "We offer you the best deals on your checkout transactions than any other checkout services in Nigeria",
  title: "Our Checkout rate",
};

export const integrateSection = {
  description: "Simplify your payments on our platform — we accept both Naira and International cards, transfers, and provide various payment options",
  title: "Integrate online checkout on your terms",
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

export const apiDocsSection = {
  description: "A simple, elegant interface so you can start integrating in minutes. Leverage our APIs to transform your businesses and products.",
  title: <> Get to Integrate Fast with our <Br on="desktop" /> Checkout API </>,
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
