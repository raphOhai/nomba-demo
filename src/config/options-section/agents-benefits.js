import React from "react";

import Security from "illustrations/security.svg";
import CustomerService from "illustrations/customer-service.svg";
import NombaMerch from "illustrations/nomba-merch.svg";
import Tools from "illustrations/business-tools.svg";

export const agentsBenefitsCardsData = [
  {
    illustration: <Security className="w-[133px]" />,
    title: "Enhanced security",
    description:
      "Using Nomba guarantees peace of mind, and no loss of revenue. ",
  },
  {
    illustration: <CustomerService className="w-[133px]" />,
    title: "24/7 customer support",
    description:
      "We don’t leave our agents hanging. We are always available to render support. ",
  },
  {
    illustration: <NombaMerch className="w-[133px]" />,
    title: "Nomba packed merch",
    description:
      "Our agents are our heartbeats. We give everyone a fully-packed merch item to rock",
  },
  {
    illustration: <Tools className="w-[133px]" />,
    title: "Access to business tools",
    description:
      "Every agent enjoys full access to payments and operational tools to keep a business running. ",
  },
];
