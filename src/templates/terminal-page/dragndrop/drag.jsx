import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "./index.scss";

const Drag = () => {
  return (
    <div className="c_drag">
      <div className="img">
        <StaticImage alt="" src="../../../assets/images/svgs/terminal/nomba_pack.png" />
      </div>
    </div>
  );
};

export { Drag };
