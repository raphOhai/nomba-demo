import React from "react";
import { Timeline } from "components";
import { StaticImage } from "gatsby-plugin-image";
import { billPayment, fundsTransfer } from "config/timeline/make-payments";
import AcceptPayment from "../../../../assets/images/gifs/accept-payment.gif";

const BillPaymentTimeline = () => {
  return (
    <div className=" py-[100px] mb-[170px] bg-primary-200 ">
      <Timeline
        timelineData={billPayment}
        image={<img src={AcceptPayment} alt="accept payments timeline gif" />}
        heading="Bulky, multiple, or single payments?"
        subHeading="Do it all with Nomba. Follow these steps to make transfers on Nomba"
      />
    </div>
  );
};

const FundTransferTimeline = () => {
  return (
    <Timeline
      timelineData={fundsTransfer}
      image={<img src={AcceptPayment} alt="accept payments timeline gif" />}
      heading="Bulky, multiple, or single payments?"
      subHeading="Do it all with Nomba. Follow these steps to make transfers on Nomba"
    />
  );
};

export { BillPaymentTimeline, FundTransferTimeline };
