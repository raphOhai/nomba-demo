import React from "react";
import { Timeline } from "components";
import { requestTerminal, activateTerminal } from "config/timeline/terminal";
import AcceptPayment from "../../../../assets/images/gifs/accept-payment.gif";

const RequestTimeline = () => {
  return (
    <div className="">
      <Timeline
        timelineData={requestTerminal}
        image={<img src={AcceptPayment} alt="accept payments timeline gif" />}
        heading="Requesting a POS terminal on your Nomba account?"
        subHeading="Follow these steps to request for a POS terminal for your business"
      />
    </div>
  );
};

const ActivateTimeline = () => {
  return (
    <Timeline
      reverse
      timelineData={activateTerminal}
      image={<img src={AcceptPayment} alt="accept payments timeline gif" />}
      heading="Steps to activating your new POS terminal"
      subHeading="Follow these steps to activate your POS 
      terminal after request"
    />
  );
};

export { RequestTimeline, ActivateTimeline };
