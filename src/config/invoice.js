// import { StaticImage } from "gatsby-plugin-image";
import React from "react";
// import { Br } from "components";
import EasyAdoption from "assets/images/jpegs/invoice/svgs/receipt-text.svg";
import AllBusinesses from "assets/images/jpegs/invoice/svgs/dcube.svg";
import Scalable from "assets/images/jpegs/invoice/svgs/frame.svg";

export const InvoiceBusinessTools = [
  {
    id: 1,
    title: "Easy to use",
    icon: <EasyAdoption />,
    description: "Create, customise and send invoice to your customers stress-free and in less than 5 minutes.",
  },
  {
    id: 2,
    title: "Suited for all businesses",
    icon: <AllBusinesses />,
    description:
      "Collect one-time or recurring payments. Add line items, discounts, and tax rates directly to your invoices.",
  },
  {
    id: 3,
    title: "Scalable for your needs",
    icon: <Scalable />,
    description: "Nomba APIs help automate your invoicing workflows and accounts receivable processes. ",
  },
];
