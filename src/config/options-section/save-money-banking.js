import React from "react";

import EmergencySavings from "illustrations/Emergency-Savings.svg";
import BusinessSavings from "illustrations/Business-Savings.svg";

import Regular from "illustrations/Regular-Savings.svg";
import Joint from "illustrations/Joint-Business-savings.svg";

export const saveMoneyBankingCardsData = [
  {
    illustration: <Regular />,

    title: "Regular savings",
    description: "Save money on your terms",
  },
  {
    illustration: <EmergencySavings />,
    title: "Emergency savings",
    description: "Save for rainy days",
  },
  {
    illustration: <BusinessSavings />,
    title: "Business savings",
    description: "Put your idle profits to work",
  },
  {
    illustration: <Joint />,
    title: "Joint business savings",
    description: "Hit your financial goals faster ",
  },
];
