import React from "react";
import "./index.scss";
import { Left, Right } from "assets/images/svgs/terminal";

const ZoomInPos = () => {
  return (
    <div className="c_czoom">
      <div className="c_czoom_posLeft abs">
        <Left />
      </div>
      <div className="c_czoom_posRight abs">
        <Right />
      </div>
    </div>
  );
};

export { ZoomInPos };
