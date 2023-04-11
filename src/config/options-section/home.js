import React from "react";

import AcceptBankCards from "illustrations/bank-cards.svg";
import TransferToAnAccount from "illustrations/transfer-to.svg";
import ScanAQrCode from "illustrations/scan-qr.svg";

export const homePaymentOptions = [
  {
    illustration: <AcceptBankCards className="w-[50px]" />,
    title: "Accept all bank cards",
    description: "Receive your card payments through the Nomba POS terminals",
    // link: { to: "https://dashboard.nomba.com/auth/login" },
  },
  {
    illustration: <TransferToAnAccount className="w-[50px]" />,
    title: "Transfer to an account",
    description: "With an account number, you can take payments into your account through transfers",
    // link: { to: "https://dashboard.nomba.com/auth/login" },
  },
  {
    illustration: <ScanAQrCode className="w-[50px]" />,
    title: "Scan a QR code",
    description: "Accept QR payments through codes and review transactions on your POS  terminal",
    // link: { to: "https://dashboard.nomba.com/auth/login" },
  },
];
