import { StaticImage } from "gatsby-plugin-image";
import { Br } from "components";
import React from "react";
import VirtualAccount from "jpegs/api/icons/pages.svg";
import VirtualAccountActive from "jpegs/api/icons/pages-active.svg";
import Checkout from "jpegs/api/icons/checkout.svg";
import CheckoutActive from "jpegs/api/icons/checkout-active.svg";
import WebHookActive from "jpegs/api/icons/asterisk-active.svg";
import TransferTo from "jpegs/api/icons/transfer.svg";
import TransferToActive from "jpegs/api/icons/transfer-active.svg";
import Terminal from "jpegs/api/icons/terminal.svg";
import TerminalActive from "jpegs/api/icons/terminal-active.svg";

import VirtualAccountAPI from "jpegs/api/icons/n-icons/virtual-account.svg";
import TransferApi from "jpegs/api/icons/n-icons/transfer-api.svg";
import TerminalApi from "jpegs/api/icons/n-icons/terminal-api.svg";
import CheckoutApi from "jpegs/api/icons/n-icons/checkout.svg";
export const apiTestimonial = [
  {
    testimonial:
      "Nomba's Developer API system has made it possible for me to   collect and reconcile payments from my retailers. I can easily share and set reminders which makes it easy for them to remember.",
    name: "Mr Paul",
    role: "Co-founder",
    image: (
      <StaticImage alt="Testimonial Image" src="../assets/images/jpegs/api/testimonials/image.png" loading="lazy" />
    ),
  },
];

export const faqData = [
  {
    id: 1,
    header: "How can I get my API keys?",
    content:
      "Your API keys are on your nomba dashboard. Please login to your nomba dashboard, navigate to the settings and click on the API Keys tab to copy your Keys. ",
  },
  {
    id: 2,
    header: "How will I be notified if a payment is made into my virtual account?",
    content:
      "You will receive notifications via webhook. Please login to your nomba dashboard, navigate to the webhook tab within settings to supply your webhook details and select the events you will like to be notified on.",
  },
  {
    id: 3,
    header: "When will I receive settlements if my customers make payment into the virtual account?",
    content: "Successful transactions will be instantly settled into your nomba wallet.",
  },
  {
    id: 4,
    header: "What types of transfers are supported by the API?",
    content: "The transfers supported on the API are bank-to-bank, wallet-to-bank  and wallet-to-wallet transfers.",
  },
  {
    id: 5,
    header: "Is there a limit to the number of virtual accounts I can create for my customers? ",
    content: "There is no fixed limit to the number of virtual accounts you can create for your customers.",
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
        Simplify Transaction with <Br on="desktop" /> our Online Checkout
      </>
    ),
    description: "Effortlessly boost sales, enhance user experiences and increase conversion rates.",
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

export const apiSection = [
  {
    title: "Virtual Account API",
    description: "Manage unique payment accounts of their customers.",
    icon: <VirtualAccountAPI />,
    image: (
      <StaticImage
        alt="Temp Doc"
        className="  rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/virtual-account.png"
      />
    ),
    modalImage: (
      <StaticImage
        alt="Temp Doc"
        width={890}
        height={160}
        className="  rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/modal/virtual-account.png"
      />
    ),
    cta: "Go to Virtual Account Docs",
    subText: (
      <>
        In the world of modern business, efficiency and flexibility in financial management are paramount. The Virtual
        Account API is your gateway to streamlined finances, empowering founders and business owners to optimize their
        operations. Virtual accounts, though not physical entities, provide a digital means to segregate, monitor, and
        manage funds precisely tailored to your business needs.
        <Br on="all" />
        <Br on="all" />
        By integrating the Virtual Account API, you unlock a host of benefits: enhanced funds management, real-time
        monitoring, customization, top-tier security, simplified transactions, and compliance assurance.
      </>
    ),
    link: "https://docs.nomba.com/api#/operations/List%20all%20accounts",
  },
  {
    title: "Transfer API",
    description: "Automatically transfer money directly to your customers' bank accounts.",
    icon: <TransferApi />,
    image: (
      <StaticImage
        alt="Temp Doc"
        className=" rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/transfer.png"
      />
    ),
    modalImage: (
      <StaticImage
        alt="Temp Doc"
        width={890}
        height={160}
        className=" rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/modal/transfer-api.png"
      />
    ),
    cta: "Go to Transfer Docs",
    subText: (
      <>
        Transfer APIs are the digital pathways that facilitate the seamless movement of funds, whether it's for payroll,
        supplier payments, or international transactions. They empower businesses of all sizes to revolutionize their
        financial operations, bringing with them a multitude of benefits that can redefine the way you conduct your
        business.
        <Br on="all" />
        <Br on="all" />
        Our Transfer APIs offer a range of remarkable advantages, from lightning-fast transaction speeds to reduced
        costs associated with traditional methods. These APIs break down the barriers that previously hindered smooth
        financial operations. With the power of our Transfer API, you can connect with your customers, improve their
        experience, and expand your business globally.
      </>
    ),
    link: "https://docs.nomba.com/api#/operations/Fetch%20bank%20codes%20and%20names",
  },
  {
    title: "Terminal API",
    description: "Empower your features and products with our Developer API.",
    icon: <TerminalApi />,
    image: (
      <StaticImage
        alt="Temp Doc"
        className=" rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/terminal-api.png"
      />
    ),
    cta: "Go to Terminal Docs",
    modalImage: (
      <StaticImage
        alt="Temp Doc"
        width={890}
        height={160}
        className=" rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/modal/terminal-api.png"
      />
    ),
    subText: (
      <>
        In today's rapidly evolving business landscape, the efficiency and effectiveness of payment processing are
        crucial to your success. Enter "Our Terminal API," the solution designed to supercharge your payment
        capabilities. With this powerful tool, you can seamlessly integrate payment processing into your applications,
        allowing your business to accept payments in-person, online, or through mobile devices with ease.
        <Br on="all" />
        <Br on="all" />
        Our Terminal API streamlines the payment process, providing a comprehensive solution that enhances the customer
        experience, reduces transaction times, and ensures the security of every payment. Whether you're a startup
        founder or a seasoned business owner, this API opens up a world of possibilities, enabling your business to
        reach new heights in the digital economy.
      </>
    ),
    link: "https://docs.nomba.com/api#/operations/Assign%20terminal%20to%20an%20account",
  },
  {
    title: "Checkout API",
    description: "Process your payments online easily and securely wherever you are.",
    icon: <CheckoutApi />,
    image: (
      <StaticImage
        alt="Temp Doc"
        className=" rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/checkout-api.png"
      />
    ),
    cta: "Go to Checkout Docs",
    modalImage: (
      <StaticImage
        alt="Temp Doc"
        width={890}
        height={160}
        className=" rounded-lg md:rounded-2xl"
        src="../assets/images/jpegs/api/modal/checkout-api.png"
      />
    ),
    subText: (
      <>
        An online checkout API is a set of rules and tools that allow different software applications to communicate and
        exchange information related to the checkout process in an online store. This API facilitates the seamless
        integration of payment and order processing systems, enabling businesses to accept online payments securely.
        <Br on="all" />
        <Br on="all" />
        Our Checkout APIs offer a range of remarkable advantages from conveniently processing payments with ease,
        accepting Mastercard, Visa, Verve in Nigeria; as well as AmEx, you can easily pick from our options of using
        cards or bank transfers to pay the way you want. Users also is optimized for every devices, and has been built
        to ensure reduced declines and fraud protection.
      </>
    ),
    link: "https://docs.nomba.com/api#/operations/Create%20an%20online%20checkout%20order",
  },
];

export const categories = [
  {
    name: "Virtual Account",
    slug: "virtual-account",
    icon: <VirtualAccount />,
    icon_active: <VirtualAccountActive />,
    docs: [
      {
        language: "js",
        label: "Node.js",
        snippet: `const http = require('https');
const options = {
  method: 'POST',
  hostname: 'api.nomba.com',
  port: null,
  path: '/v1/accounts',
  headers: {
    accountId: '',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer undefined'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  accountRef: '1oWbJQQHLyQqqf1SwxjSpudeA21',
  phoneNumber: '2348188667581',
  email: 'ifeol-subaccount@exmple.com',
  bvn: '12234412345',
  pin: '1234',
  accountName: 'Daniel Scorsese',
  currency: 'NGN'
}));
req.end();
        `,
      },
      {
        language: "js",
        label: "PHP",
        snippet: `<?php
        
$curl = curl_init();
        
curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.nomba.com/v1/accounts",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'accountRef' => '1oWbJQQHLyQqqf1SwxjSpudeA21',
    'phoneNumber' => '2348188667581',
    'email' => 'ifeol-subaccount@exmple.com',
    'bvn' => '12234412345',
    'pin' => '1234',
    'accountName' => 'Daniel Scorsese',
    'currency' => 'NGN'
  ]),
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Authorization: Bearer undefined",
    "Content-Type: application/json",
    "accountId: "
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
                `,
      },
    ],
  },

  {
    name: "Transfer",
    slug: "transfer",
    icon: <TransferTo />,
    icon_active: <TransferToActive />,
    docs: [
      {
        language: "js",
        label: "Node.js",
        snippet: `const http = require('https');

const options = {
  method: 'POST',
  hostname: 'api.nomba.com',
  port: null,
  path: '/v1/transfers/bank/2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d',
  headers: {
    accountId: '2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer undefined'
  }
};

const req = http.request(options, function (res) {
  const chunks = [];

  res.on('data', function (chunk) {
    chunks.push(chunk);
  });

  res.on('end', function () {
    const body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({
  amount: 3500,
  accountNumber: '0554772814',
  accountName: 'M.A Animashaun',
  bankCode: '058',
  merchantTxRef: 'UNQ_123abGGhh5546',
  senderName: 'Nightly Post',
  pin: '2222'
}));
req.end();
        `,
      },
      {
        language: "js",
        label: "PHP",
        snippet: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.nomba.com/v1/transfers/bank/2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'amount' => 3500,
    'accountNumber' => '0554772814',
    'accountName' => 'M.A Animashaun',
    'bankCode' => '058',
    'merchantTxRef' => 'UNQ_123abGGhh5546',
    'senderName' => 'Nightly Post',
    'pin' => '2222'
  ]),
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Authorization: Bearer undefined",
    "Content-Type: application/json",
    "accountId: 2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
                `,
      },
    ],
  },
  {
    name: "Terminal",
    slug: "terminal",
    icon: <Terminal />,
    icon_active: <TerminalActive />,
    docs: [
      {
        language: "js",
        label: "Node.js",
        snippet: `const axios = require('axios').default;
        
const options = {
  method: 'POST',
  url: 'https://api.nomba.com/v1/terminals/assign/2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d',  headers: {
    accountId: '2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Bearer ...'
  },
  data: {serialNumber: '55555555', terminalLabel: 'Testing'}
};

try {
  const { data } = await axios.request(options);
  console.log(data);
} catch (error) {
  console.error(error);
}
        `,
      },
      {
        language: "js",
        label: "PHP",
        snippet: `<?php

$curl = curl_init();

curl_setopt_array($curl, [
  CURLOPT_URL => "https://api.nomba.com/v1/terminals/assign/2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode([
    'serialNumber' => '55555555',
    'terminalLabel' => 'Testing'
  ]),
  CURLOPT_HTTPHEADER => [
    "Accept: application/json",
    "Authorization: Bearer ...",
    "Content-Type: application/json",
    "accountId: 2242b79d-f2cf-4ccc-ada1-e890bd1a9f0d"
  ],
]);

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}`,
      },
    ],
  },
  {
    name: "Checkout",
    slug: "checkout",
    icon: <Checkout />,
    icon_active: <CheckoutActive />,
    docs: [
      {
        language: "js",
        label: "Node.js",
        snippet: `
        var axios = require('axios');
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
            .then(function(response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function(error) {
                console.log(error);
            });
        `,
      },
      {
        language: "js",
        label: "PHP",
        snippet: `
        <? php $curl = curl_init();
          curl_setopt_array($curl, array(
              CURLOPT_URL => '<https://api.nomba.com/v1/checkout/order>',
              CURLOPT_RETURNTRANSFER => true,
              CURLOPT_ENCODING => '',
              CURLOPT_MAXREDIRS => 10,
              CURLOPT_TIMEOUT => 0,
              CURLOPT_FOLLOWLOCATION => true,
              CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
              CURLOPT_CUSTOMREQUEST => 'POST',
              CURLOPT_POSTFIELDS => '{  "order": {      "orderReference": "testingref090",      "callbackUrl": "<https://www.nomba.com>",      "customerEmail": "ttt@gmail.com",      "amount": 50,      "currency": "NGN",      "customerId": "identify123"  }}',
              CURLOPT_HTTPHEADER => array(
                  'accountId: cb6778b6-207c-41ac-a7fd-c2d1969b6aa6'
              ) ,
          ));
          $response = curl_exec($curl);
          curl_close($curl);
          echo $response;

        `,
      },
    ],
  },
];
