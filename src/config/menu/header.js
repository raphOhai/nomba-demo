import React from "react";
import Payments from "svgs/payment.svg";
import Bank from "svgs/bank.svg";
// import Business from "svgs/business.svg";
import Shop from "svgs/outline/shop-1.svg";
import Bag from "svgs/outline/bag-5.svg";
import Globe from "svgs/globe.svg";
import Audience from "svgs/audience-2.svg";
import Pages from "svgs/pages.svg";
import AcceptPayment from "svgs/accept-payments.svg";
import MakePayment from "svgs/make-payments.svg";
import PosTerminals from "svgs/pos-terminals.svg";
import ServiceStatus from "svgs/service-status.svg";
import MenuSubmenu from "svgs/menu-submenu.svg";
import Invoicing from "svgs/invoicing.svg";
import Savings from "svgs/savings.svg";
const headerMenu = {
  Products: [
    {
      title: "Accept Payments",
      to: "/products/accept-payments",
      icon: <AcceptPayment />,
      description: "Receive and accept money",
    },
    {
      title: "Make Payments",
      to: "/products/make-payments",
      icon: <MakePayment />,
      description: "Transfer to everyone with ease",
    },
    {
      title: "POS Terminals",
      to: "/products/pos-terminals",
      icon: <PosTerminals />,
      description: "Payments via our POS Terminals",
    },

    {
      title: "Service Status",
      to: "https://dashboard.nomba.com/guest/card-bank-performance",
      icon: <ServiceStatus />,
      description: "Bank’s network updates",
    },
    {
      title: "Menu",
      to: "/menu",
      icon: <MenuSubmenu />,
      description: "Simplify restaurant operations",
    },
    {
      title: "Invoicing",
      to: "/invoice",
      icon: <Invoicing />,
      description: "Easiest invoicing process today",
    },
    {
      title: "Savings",
      to: "/banking/savings",
      icon: <Savings />,
      description: "Settle payments effortlessly",
    },
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
