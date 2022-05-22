import React from "react";
import { Timeline } from "components";
import { billPayment, fundsTransfer } from "config/timeline/make-payments";
import AcceptPayment from "assets/images/gifs/accept-payment.gif";
import BulkyMultipleSinglePayments from "assets/images/gifs/bulky-multiple-single-payments.gif";
import HelpYourCommunity from "assets/images/gifs/help-your-community-pay-bills.gif";

const HelpYourCommunityTimeline = () => {
  return (
    <div className=" py-[100px] mb-[170px] bg-primary-200 ">
      <Timeline
        timelineData={fundsTransfer}
        image={
          <img
            src={HelpYourCommunity}
            alt="Help your community pay 
            bills with Nomba gif"
            className="w-[288px]"
          />
        }
        heading="Help your community pay 
        bills with Nomba"
        subHeading="Be the point of contact for every bill payment your customers need to make: electricity, airtime and many more."
      />
    </div>
  );
};

const BillPaymentTimeline = () => {
  return (
    <div className=" py-[100px] mb-[170px] bg-primary-200 ">
      <Timeline
        timelineData={billPayment}
        image={
          <img
            src={BulkyMultipleSinglePayments}
            alt="accept payments timeline gif"
          />
        }
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

export { BillPaymentTimeline, FundTransferTimeline, HelpYourCommunityTimeline };
