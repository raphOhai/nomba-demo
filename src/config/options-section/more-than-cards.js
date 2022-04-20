import React from "react";

import AcceptBankCards from "illustrations/accept-all-bank-cards.svg";
import ReceivePayment from "illustrations/receive-payment.svg";
import ScanAQrCode from "illustrations/scan-a-qr-code.svg";

export const aboutMoreThanCardsData = [
  {
    illustration: <ReceivePayment className="w-[133px]" />,
    title: "Receive payment through bank cards",
    description:
      "With the Nomba POS terminal, instantly accept payment from all bank cards with ease.",
    // link: { to: "/" },
  },
  {
    illustration: <AcceptBankCards className="w-[133px]" />,
    title: "Get paid through transfers",
    description:
      "Share your Nomba account number with customers to receive money.",
    // link: { to: "/" },
  },
  {
    illustration: <ScanAQrCode className="w-[133px]" />,
    title: "Accept payments via personalised QR Codes",
    description:
      "With a simple scan, accept money in exchange for your service through an identified QR code.",
    // link: { to: "/" },
  },
];
