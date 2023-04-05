import React, { useState } from "react";
import "./index.scss";
const AccordionTerminal = props => {
  const { data } = props;
  const [isActive, setActive] = useState(false);

  const showAccordionText = () => {
    setActive(!isActive);
  };

  return (
    <div className="c_wrapItem">
      <div onClick={showAccordionText} className="c_wrapItem_head">
        <h3>{data.header}</h3>
        <div className="c_wrapItem_head_toggleView content_btn">
          <span></span>
          <span className={isActive ? "open" : null}></span>
        </div>
      </div>
      <div className={`c_wrapItem_acc ${isActive ? "active" : "inActive"}`}>
        <p>{data.content}</p>
      </div>
      <div className="bottom_line"></div>
    </div>
  );
};

export { AccordionTerminal };
