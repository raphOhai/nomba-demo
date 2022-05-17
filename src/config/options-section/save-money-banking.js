import React from "react";

import EmergencySavings from "illustrations/Emergency-Savings.svg";
import BusinessSavings from "illustrations/Business-Savings.svg";

import Regular from "illustrations/Regular-Savings.svg";
import Joint from "illustrations/Joint-Business-savings.svg";

export const saveMoneyBankingCardsData = [
  {
    illustration: <Regular className="w-[133px]" />,
    title: "Regular savings",
    description: "Save money on your terms",
  },
  {
    illustration: <EmergencySavings className="w-[133px]" />,
    title: "Emergency savings",
    description: "Save for rainy days",
  },
  {
    illustration: <BusinessSavings className="w-[133px]" />,
    title: "Business savings",
    description: "Put your idle profits to work",
  },
  {
    illustration: <Joint className="w-[133px]" />,
    title: "Joint business savings",
    description: "Hit your financial goals faster ",
  },
];
