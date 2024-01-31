import React from "react";
import SwitchBox from "../tabSwitch/switch";
import QrSection2 from "templates/QR/section2/QrSection2";

import QrSection4 from "templates/QR/section4/QrSection4";
import QrSection5 from "templates/QR/section5/QrSection5";
import Quotes from "templates/QR/section3/section3";
import { CommonQuestions2 } from "components/common-question2/common-questions2";
import { faqData } from "config/e-menu";
const ScrollContent = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <div className="scroll-sticky">
          <SwitchBox />
        </div>
        <QrSection2 />
        <Quotes
          mainText={
            "Using QR codes for our pop-up galleries lets us sell at any location, anytime. Buyers scan the code for a specific piece of art to see the price and purchase from their phones."
          }
          name={"Anyadike Godwin"}
        />
        <QrSection4 />
        <QrSection5 />
        <div style={{ backgroundColor: "#1A1A1A" }}>
          <CommonQuestions2 questions={faqData} />
        </div>
      </div>
    </div>
  );
};

export default ScrollContent;
