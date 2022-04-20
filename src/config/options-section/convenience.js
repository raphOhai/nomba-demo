import React from "react";

import NoHacking from "illustrations/no-hacking.svg";
import Check from "illustrations/check.svg";
import CustomerService from "illustrations/customer-service.svg";

export const convenienceCardsData = [
  {
    illustration: <NoHacking className="w-[133px]" />,
    title: "No hacking, no third-party access",
    description:
      "We understand how important your financial data is. Nomba enables an end-to-end encryption with a personalized security code.",
  },
  {
    illustration: <Check className="w-[133px]" />,
    title: "User-focused and excellent features",
    description:
      "Nomba has been designed with a user–focused approach to ensure your transactions are smoothly and swiftly made.  ",
  },
  {
    illustration: <CustomerService className="w-[133px]" />,
    title: "Holistic customer experience",
    description:
      "The Nomba team is committed to proffering solutions to any problem you encounter on the Nomba app. Reach out to us, anytime.",
  },
];
