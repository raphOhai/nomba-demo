import React from "react";
import Payments from "assets/images/svgs/payment.svg";
import Bank from "assets/images/svgs/bank.svg";
import Business from "assets/images/svgs/business.svg";
import Profile from "assets/images/svgs/profile.svg";
import Shop from "assets/images/svgs/outline/shop-1.svg";
import Bag from "assets/images/svgs/outline/bag-5.svg";
import Globe from "assets/images/svgs/globe.svg";
import Audience from "assets/images/svgs/audience-2.svg";
import Pages from "assets/images/svgs/pages.svg";

const headerMenu = {
  Products: [
    {
      title: "Payments",
      icon: <Payments />,
      description: "Accept payments Lorem ipsum dolor",
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
          title: "POS Terminal",
          to: "/products/pos-terminals",
        },
      ],
    },
    {
      title: "Banking",
      icon: <Bank />,
      description: "Accept payments Lorem ipsum dolor",
      subMenu: [
        {
          title: "Capital",
          to: "/banking/capital",
        },
        {
          title: "Savings",
          to: "/banking/savings",
        },
        {
          title: "Cards",
          to: "/banking/cards",
        },
      ],
    },
    {
      title: "Business operations",
      icon: <Business />,
      description: "Accept payments Lorem ipsum dolor",
      subMenu: [
        {
          title: "Customer Directory",
          to: "/business_operations/customer_directory",
        },
        {
          title: "Payroll",
          to: "/business_operations/payroll",
        },
        {
          title: "Inventory",
          to: "/business_operations/inventory",
        },
      ],
    },
  ],
  "Business Types": [
    {
      title: "Mobile Money Agents",
      icon: <Profile />,
      description: "Accept payments Lorem ipsum dolor",
      comingSoon: true,
      to: "/business_types/mobile_money_agents",
    },
    {
      title: "Small Business",
      icon: <Shop />,
      description: "Accept payments Lorem ipsum dolor",
      comingSoon: true,
      to: "/business_types/small_business",
    },
    {
      title: "Large Business",
      icon: <Bag />,
      description: "Accept payments Lorem ipsum dolor",
      comingSoon: true,
      to: "/business_types/large_business",
    },
  ],
  Company: [
    {
      title: "About Us",
      icon: <Globe />,
      description: "Accept payments Lorem ipsum dolor",
      comingSoon: true,
      to: "/about_us",
    },
    {
      title: "Work with Nomba",
      icon: <Audience />,
      description: "Accept payments Lorem ipsum dolor",
      comingSoon: true,
      to: "/careers",
    },
    {
      title: "Blog",
      icon: <Pages />,
      description: "Accept payments Lorem ipsum dolor",
      comingSoon: true,
      to: "/blog",
    },
  ],
  Pricing: {
    to: "/pricing",
    description: "Accept payments Lorem ipsum dolor",
  },
};

export { headerMenu };
