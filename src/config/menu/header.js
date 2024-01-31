import React from "react";

import AcceptPayment from "svgs/navbar/light/accept-payments.svg";
import MakePayment from "svgs/navbar/light/make-payments.svg";
import PosTerminals from "svgs/navbar/light/pos-terminals.svg";
import ServiceStatus from "svgs/navbar/light/service-status.svg";
import MenuSubmenu from "svgs/navbar/light/menu-submenu.svg";
import Invoicing from "svgs/navbar/light/invoicing.svg";
import Outlets from "svgs/navbar/light/outlets.svg";
import Inventory from "svgs/navbar/light/inventory.svg";
import Settlements from "svgs/navbar/light/settlements.svg";
import Savings from "svgs/navbar/light/savings.svg";
import Developers from "svgs/navbar/light/developers.svg";
import Checkout from "svgs/navbar/light/checkout.svg";

import AboutUs from "svgs/navbar/light/about-us.svg";
import BlogIcon from "svgs/navbar/light/blog.svg";
import Career from "svgs/navbar/light/career.svg";
import Overview from "svgs/navbar/light/overview.svg";
import Documentation from "svgs/navbar/light/documentation.svg";
import SmallBusinessIcon from "svgs/navbar/light/small-business.svg";
import LargeBusinessIcon from "svgs/navbar/light/large-business.svg";

import AcceptPaymentDark from "svgs/navbar/dark/accept-payments.svg";
import MakePaymentDark from "svgs/navbar/dark/make-payments.svg";
import PosTerminalsDark from "svgs/navbar/dark/pos-terminals.svg";
import ServiceStatusDark from "svgs/navbar/dark/service-status.svg";
import MenuSubmenuDark from "svgs/navbar/dark/menu-submenu.svg";
import InvoicingDark from "svgs/navbar/dark/invoicing.svg";
import OutletsDark from "svgs/navbar/dark/outlets.svg";
import InventoryDark from "svgs/navbar/dark/inventory2.svg";
import SettlementsDark from "svgs/navbar/dark/settlements.svg";
import SavingsDark from "svgs/navbar/dark/savings.svg";
import DevelopersDark from "svgs/navbar/dark/developers.svg";
import CheckoutDark from "svgs/navbar/dark/checkout.svg";

import AboutUsDark from "svgs/navbar/dark/about-us.svg";
import BlogIconDark from "svgs/navbar/dark/blog.svg";
import CareerDark from "svgs/navbar/dark/career.svg";
import OverviewDark from "svgs/navbar/dark/overview.svg";
import DocumentationDark from "svgs/navbar/dark/documentation.svg";
import SmallBusinessIconDark from "svgs/navbar/dark/small-business.svg";
import LargeBusinessIconDark from "svgs/navbar/dark/large-business.svg";

const headerMenu = {
  Products: [
    {
      title: "Accept Payments",
      to: "https://nomba.com/products/accept-payments",
      icon: <AcceptPayment className="menuIcon" />,
      iconDark: <AcceptPaymentDark className="menuIcon" />,
      description: "Receive and accept money",
    },
    {
      title: "Make Payments",
      to: "https://nomba.com/products/make-payments",
      icon: <MakePayment className="menuIcon" />,
      iconDark: <MakePaymentDark className="menuIcon" />,
      description: "Transfer to everyone with ease",
    },
    {
      title: "POS Terminals",
      to: "https://nomba.com/terminals",
      icon: <PosTerminals className="menuIcon" />,
      iconDark: <PosTerminalsDark className="menuIcon" />,
      description: "Payments via our POS Terminals",
    },

    {
      title: "Service Status",
      to: "https://dashboard.nomba.com/guest/card-bank-performance",
      icon: <ServiceStatus className="menuIcon" />,
      iconDark: <ServiceStatusDark className="menuIcon" />,
      description: "Bank's network updates",
    },
    {
      title: "Menu",
      to: "https://nomba.com/menu",
      icon: <MenuSubmenu className="menuIcon" />,
      iconDark: <MenuSubmenuDark className="menuIcon" />,
      description: "Simplify restaurant operations",
    },
    {
      title: "Invoicing",
      to: "https://nomba.com/invoice",
      icon: <Invoicing className="menuIcon" />,
      iconDark: <InvoicingDark className="menuIcon" />,
      description: "Easiest invoicing process today",
    },
    {
      title: "Outlets",
      to: "https://dashboard.nomba.com/auth/login",
      icon: <Outlets className="menuIcon" />,
      iconDark: <OutletsDark className="menuIcon" />,
      description: "Branches, one control center",
    },
    {
      title: "Inventory",
      to: "https://dashboard.nomba.com/auth/login",
      icon: <Inventory className="menuIcon" />,
      iconDark: <InventoryDark className="menuIcon" />,
      description: "Manage your product easily",
    },
    // {
    //   title: "Settlements",
    //   to: "https://dashboard.nomba.com/auth/login",
    //   icon: <Settlements className="menuIcon" />,
    //   iconDark: <SettlementsDark className="menuIcon" />,
    //   description: "Settle payments effortlessly",
    // },
    // {
    //   title: "Savings",
    //   to: "https://nomba.com/banking/savings",
    //   icon: <Savings className="menuIcon" />,
    //   iconDark: <SavingsDark className="menuIcon" />,
    //   description: "Settle payments effortlessly",
    // },
    {
      title: "Developer API",
      to: "https://nomba.com/developers",
      icon: <Developers className="menuIcon" />,
      iconDark: <DevelopersDark className="menuIcon" />,
      description: "Empower your features",
    },
    {
      title: "Checkout",
      to: "/checkout",
      icon: <Checkout className="menuIcon" />,
      iconDark: <CheckoutDark className="menuIcon" />,
      description: "Accept online payments",
    },
  ],
  "Business Types": [
    {
      title: "Small Business",
      icon: <SmallBusinessIcon className="menuIcon" />,
      iconDark: <SmallBusinessIconDark className="menuIcon" />,
      description: "Track payments and your business",
      comingSoon: true,
      to: "https://nomba.com/business/small",
    },
    {
      title: "Large Business",
      icon: <LargeBusinessIcon className="menuIcon" />,
      iconDark: <LargeBusinessIconDark className="menuIcon" />,
      description: "Manage operations, and track growth",
      comingSoon: true,
      to: "https://nomba.com/business/large",
    },
  ],
  Developers: [
    {
      title: "Overview",
      icon: <Overview className="menuIcon" />,
      iconDark: <OverviewDark className="menuIcon" />,
      to: "/developers",
    },
    {
      title: "Documentation",
      icon: <Documentation className="menuIcon" />,
      iconDark: <DocumentationDark className="menuIcon" />,
      to: "https://docs.nomba.com/api",
    },
  ],
  Company: [
    {
      title: "About Us",
      icon: <AboutUs className="menuIcon" />,
      iconDark: <AboutUsDark className="menuIcon" />,
      description: "Get to know the team",
      comingSoon: true,
      to: "https://nomba.com/about-us",
    },
    {
      title: "Work with Nomba",
      icon: <Career className="menuIcon" />,
      iconDark: <CareerDark className="menuIcon" />,
      description: "Available roles at Nomba",
      comingSoon: true,
      href: { url: "/careers" },
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
