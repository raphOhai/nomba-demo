import React from "react";
import { Timeline } from "components";
import { acceptPaymentsTimeline } from "config/timeline/accept-payment";
import AcceptPayment from "../../../../assets/images/gifs/accept-payment.gif";

const AcceptPaymentsTimeline = () => {
  return (
    <div className="xl:pt-[100px] pt-[62px] ">
      <Timeline
        image={<img src={AcceptPayment} alt="accept payments timeline gif" />}
        heading="Need to accept payment through transfers? Have a look"
        subHeading="First, you need to sign into your Nomba business account..And follow the instructions below.
        "
        timelineData={acceptPaymentsTimeline}
      />
    </div>
  );
};

export { AcceptPaymentsTimeline };
