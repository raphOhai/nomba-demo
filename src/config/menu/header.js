import React from "react";
import Payments from "svgs/payment.svg";
import Bank from "svgs/bank.svg";
// import Business from "svgs/business.svg";
import Shop from "svgs/outline/shop-1.svg";
import Bag from "svgs/outline/bag-5.svg";
import Globe from "svgs/globe.svg";
import Audience from "svgs/audience-2.svg";
import Pages from "svgs/pages.svg";

const headerMenu = {
  Products: [
    {
      title: "Payments",
      icon: <Payments />,
      description: "Accept and make payments on Nomba",
      subMenu: [
        {
          title: "Accept Payments",
          to: "/products/accept-payments",
        },
        {
          title: "Make Payments",
          to: "/products/make-payments",
        },
        {
          title: "POS Terminals",
          to: "/products/pos-terminals",
        },
        {
          title: "Invoicing",
          to: "/invoice",
        },
        {
          title: "Service Status",
          to: "https://dashboard.nomba.com/guest/card-bank-performance",
        },
      ],
    },
    {
      title: "Banking",
      icon: <Bank />,
      description: "Access the financial tools you need",
      subMenu: [
        // {
        //   title: "Capital",
        //   to: "/banking/capital",
        // },
        {
          title: "Savings",
          to: "/banking/savings",
        },
        // {
        //   title: "Cards",
        //   to: "/banking/cards",
        // },
      ],
    },
    // {
    //   title: "Business operations",
    //   icon: <Business />,
    //   description: "Manage your businesses with zero stress",
    //   subMenu: [
    //     {
    //       title: "Customer Directory",
    //       to: "/business_operations/customer_directory",
    //     },
    //     {
    //       title: "Payroll",
    //       to: "/business_operations/payroll",
    //     },
    //     {
    //       title: "Inventory",
    //       to: "/business_operations/inventory",
    //     },
    //   ],
    // },
  ],

  "Business Types": [
    // {
    //   title: "Mobile Money Agents",
    //   icon: <Profile />,
    //   description: "Make financial services accessible",
    //   comingSoon: true,
    //   to: "/business/agents",
    // },
    {
      title: "Small Business",
      icon: <Shop />,
      description: "Track payments and your business",
      comingSoon: true,
      to: "/business/small",
    },
    {
      title: "Large Business",
      icon: <Bag />,
      description: "Manage operations, and track growth",
      comingSoon: true,
      to: "/business/large",
    },
  ],
  Company: [
    {
      title: "About Us",
      icon: <Globe />,
      description: "Get to know the team",
      comingSoon: true,
      to: "/about-us",
    },
    {
      title: "Work with Nomba",
      icon: <Audience />,
      description: "Available roles at Nomba",
      comingSoon: true,
      href: { url: "https://nomba.talentlyft.com/#home" },
    },
    {
      title: "Blog",
      icon: <Pages />,
      description: "Insights and updates from Nomba",
      comingSoon: true,
      href: { url: "https://medium.com/@nombastories" },
    },
  ],
};

export { headerMenu };
