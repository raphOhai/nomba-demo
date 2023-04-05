import React from "react";
import "./index.scss";
import { AccordionData } from "config/terminal";
import { AccordionTerminal } from "components/accordion";
const CommonQuestions = () => {
  return (
    <div className="c_cmQuestions child_wrap">
      <div className="c_cmQuestions_txt">
        <h1>Common Questions</h1>
      </div>
      <div className="c_cmQuestions_acc">
        {AccordionData.map(item => (
          <AccordionTerminal key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export { CommonQuestions };
