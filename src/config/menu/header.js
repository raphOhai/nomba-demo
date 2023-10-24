import React from "react";

import AcceptPayment from "svgs/navbar/light/accept-payments.svg";
import MakePayment from "svgs/navbar/light/make-payments.svg";
import PosTerminals from "svgs/navbar/light/pos-terminals.svg";
import ServiceStatus from "svgs/navbar/light/service-status.svg";
import MenuSubmenu from "svgs/navbar/light/menu-submenu.svg";
import Invoicing from "svgs/navbar/light/invoicing.svg";
import Savings from "svgs/navbar/light/savings.svg";

import AboutUs from "svgs/navbar/light/about-us.svg";
import BlogIcon from "svgs/navbar/light/blog.svg";
import Career from "svgs/navbar/light/career.svg";
import SmallBusinessIcon from "svgs/navbar/light/small-business.svg";
import LargeBusinessIcon from "svgs/navbar/light/large-business.svg";

import AcceptPaymentDark from "svgs/navbar/dark/accept-payments.svg";
import MakePaymentDark from "svgs/navbar/dark/make-payments.svg";
import PosTerminalsDark from "svgs/navbar/dark/pos-terminals.svg";
import ServiceStatusDark from "svgs/navbar/dark/service-status.svg";
import MenuSubmenuDark from "svgs/navbar/dark/menu-submenu.svg";
import InvoicingDark from "svgs/navbar/dark/invoicing.svg";
import SavingsDark from "svgs/navbar/dark/savings.svg";

import AboutUsDark from "svgs/navbar/dark/about-us.svg";
import BlogIconDark from "svgs/navbar/dark/blog.svg";
import CareerDark from "svgs/navbar/dark/career.svg";
import SmallBusinessIconDark from "svgs/navbar/dark/small-business.svg";
import LargeBusinessIconDark from "svgs/navbar/dark/large-business.svg";

const headerMenu = {
  Products: [
    {
      title: "Accept Payments",
      to: "/products/accept-payments",
      icon: <AcceptPayment className="menuIcon" />,
      iconDark: <AcceptPaymentDark className="menuIcon" />,
      description: "Receive and accept money",
    },
    {
      title: "Make Payments",
      to: "/products/make-payments",
      icon: <MakePayment className="menuIcon" />,
      iconDark: <MakePaymentDark className="menuIcon" />,
      description: "Transfer to everyone with ease",
    },
    {
      title: "POS Terminals",
      to: "/terminals",
      icon: <PosTerminals className="menuIcon" />,
      iconDark: <PosTerminalsDark className="menuIcon" />,
      description: "Payments via our POS Terminals",
    },

    {
      title: "Service Status",
      to: "https://dashboard.nomba.com/guest/card-bank-performance",
      icon: <ServiceStatus className="menuIcon" />,
      iconDark: <ServiceStatusDark className="menuIcon" />,
      description: "Bank’s network updates",
    },
    {
      title: "Menu",
      to: "/menu",
      icon: <MenuSubmenu className="menuIcon" />,
      iconDark: <MenuSubmenuDark className="menuIcon" />,
      description: "Simplify restaurant operations",
    },
    {
      title: "Invoicing",
      to: "/invoice",
      icon: <Invoicing className="menuIcon" />,
      iconDark: <InvoicingDark className="menuIcon" />,
      description: "Easiest invoicing process today",
    },
    {
      title: "Savings",
      to: "/banking/savings",
      icon: <Savings className="menuIcon" />,
      iconDark: <SavingsDark className="menuIcon" />,
      description: "Settle payments effortlessly",
    },
  ],

  "Business Types": [
    {
      title: "Small Business",
      icon: <SmallBusinessIcon className="menuIcon" />,
      iconDark: <SmallBusinessIconDark className="menuIcon" />,
      description: "Track payments and your business",
      comingSoon: true,
      to: "/business/small",
    },
    {
      title: "Large Business",
      icon: <LargeBusinessIcon className="menuIcon" />,
      iconDark: <LargeBusinessIconDark className="menuIcon" />,
      description: "Manage operations, and track growth",
      comingSoon: true,
      to: "/business/large",
    },
  ],
  Company: [
    {
      title: "About Us",
      icon: <AboutUs className="menuIcon" />,
      iconDark: <AboutUsDark className="menuIcon" />,
      description: "Get to know the team",
      comingSoon: true,
      to: "/about-us",
    },
    {
      title: "Work with Nomba",
      icon: <Career className="menuIcon" />,
      iconDark: <CareerDark className="menuIcon" />,
      description: "Available roles at Nomba",
      comingSoon: true,
      href: { url: "https://nomba.talentlyft.com/#home" },
    },
    {
      title: "Blog",
      icon: <BlogIcon className="menuIcon" />,
      iconDark: <BlogIconDark className="menuIcon" />,
      description: "Insights and updates from Nomba",
      comingSoon: true,
      href: { url: "https://medium.com/@nombastories" },
    },
  ],
};

export { headerMenu };
