import React from "react";
import SwitchBox from "../tabSwitch/switch";

const ScrollContent = () => {
  return (
    <div className="scroll-container">
      <div className="scroll-content">
        <div className="scroll-sticky">
          <SwitchBox />
        </div>
      </div>
    </div>
  );
};

export default ScrollContent;
