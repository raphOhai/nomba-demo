import React from "react";
import "./index.scss";
import "loconative-scroll/dist/loconative-scroll.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import { Br } from "components/br";
import { PosSkeletonX, ExperienceTerminal } from "assets/images/svgs/terminal";
const TerminalSectionInteractions = () => {
  return (
    <div className="c_terminal_sectInt">
      <div className="c_terminal_sectInt_paySol">
        <h1 data-animation="h">The perfect payment solution for smooth business transaction</h1>
        <PosSkeletonX />
      </div>
      <div className="c_terminal_sectInt_experience">
        <ExperienceTerminal />
        <div className="c_terminal_sectInt_experience_txt">
          <h1 data-animation="h">
            Experience the MAX in your <Br on="desktop" /> payment collection
          </h1>
          <p data-animation="p">
            Designed to the last pixel to give you the max performance - faster transaction, long lasting battery, high
            speed printer, durable and reliable POS terminal
          </p>
        </div>
      </div>
    </div>
  );
};

export { TerminalSectionInteractions };
