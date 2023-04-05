import React from "react";
import "./index.scss";
import { AccordionData } from "config/terminal";

const CommonQuestions = () => {
  return (
    <div className="c_cmQuestions child_wrap">
      <div className="c_cmQuestions_txt">
        <h1>Common Questions</h1>
      </div>
      <div className="c_cmQuestions_acc">
        {AccordionData.map(item => (
          <div className="c_wrapItem">
            <div className="c_wrapItem_head">
              <h3>{item.header}</h3>
              <div class="c_wrapItem_head_toggleView content_btn">
                <span></span>
                <span></span>
              </div>
            </div>
            <div className="c_wrapItem_acc">
              <p>{item.content}</p>
            </div>
            <div class="bottom_line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { CommonQuestions };
