import React from "react";

import AcceptBankCards from "illustrations/accept-all-bank-cards.svg";
import TransferToAnAccount from "illustrations/transfer-to-an-account.svg";
import ScanAQrCode from "illustrations/scan-a-qr-code.svg";

export const homePaymentOptions = [
  {
    illustration: <AcceptBankCards className="w-[133px]" />,
    title: "Accept all bank cards",
    description: "Receive your card payments through the Nomba POS terminals",
    link: { to: "/" },
  },
  {
    illustration: <TransferToAnAccount className="w-[133px]" />,
    title: "Transfer to an account",
    description:
      "With an account number, you can take payments into your account through transfers",
    link: { to: "/" },
  },
  {
    illustration: <ScanAQrCode className="w-[133px]" />,
    title: "Scan a QR code",
    description:
      "Accept QR payments through codes and review transactions on your POS  terminal",
    link: { to: "/" },
  },
];
