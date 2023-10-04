import { StaticImage } from "gatsby-plugin-image";
import { Br } from "components";
import React from "react";
import VirtualAccount from "jpegs/api/icons/pages.svg";
import VirtualAccountActive from "jpegs/api/icons/pages-active.svg";
import Checkout from "jpegs/api/icons/checkout.svg";
import WebHookActive from "jpegs/api/icons/asterisk-active.svg";
import TransferTo from "jpegs/api/icons/transfer.svg";
import TransferToActive from "jpegs/api/icons/transfer-active.svg";

import VirtualAccountAPI from "jpegs/api/icons/n-icons/virtual-account.svg";
import TransferApi from "jpegs/api/icons/n-icons/transfer-api.svg";
import CheckoutApi from "jpegs/api/icons/n-icons/checkout.svg";
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
  },
  {
    title: "Transfer API",
    description: "Automatically transfer money directly to your customers' bank accounts.",
    icon: <TransferApi />,
  },
  // {
  //   title: "Checkout API",
  //   description: "Process and manage your payments easily and securely wherever you are.",
  //   icon: <CheckoutApi />,
  //   iconMobile: (
  //     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
  //       <ellipse cx="29.3327" cy="9.88808" rx="10.6667" ry="9.41176" fill="#FFCC00" />
  //       <path
  //         fill-rule="evenodd"
  //         clip-rule="evenodd"
  //         d="M22.4103 9.36914L22.41 15.0381L27.3205 12.2041L29.8205 16.5342L24.91 19.3681L29.8205 22.2041L27.3205 26.5342L22.41 23.6991L22.4103 29.3691H17.4103L17.41 23.6991L12.5 26.5342L10 22.2041L14.91 19.3691L10 16.5342L12.5 12.2041L17.41 15.0381L17.4103 9.36914H22.4103Z"
  //         stroke="#FFFAE6"
  //       />
  //     </svg>
  //   ),
  // },
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
    name: "Checkout",
    slug: "checkout",
    icon: <Checkout />,
    icon_active: <WebHookActive />,
    docs: [
      {
        language: "js",
        label: "Node.js",
        snippet: `console.log('Coming soon')`,
      },
      {
        language: "js",
        label: "PHP",
        snippet: `<?php echo 'Coming soon' ?>`,
      },
    ],
  },
];
