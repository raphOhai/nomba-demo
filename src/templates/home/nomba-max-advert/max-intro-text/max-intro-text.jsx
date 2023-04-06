import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Br, Ntext } from "components";
import Max from "svgs/Union-dark.svg";
export default function ProIntroText() {
  return (
    <div className={textSection}>
      {/* main text */}
      <div className="mb-[20px] flex items-baseline justify-center text-center">
        <Ntext variant="text8" color="c-dark">
          Introducing Nomba&nbsp;
        </Ntext>
        <Max className="h-[18px] w-[80px] md:w-[124px] md:h-[34px]" />
      </div>

      {/* sub text */}
      <div>
        <Ntext variant="text3" className="c-0">
          Transform the way you do business with the power of Nomba MAX. this
          device has faster
          <Br on="desktop" />
          transaction speed, Long lasting battery, High speed printer and is
          Sleek & Durable to give
          <Br on="desktop" />
          an overall high speed performance.
        </Ntext>
      </div>
    </div>
  );
}

const textSection = ctl(`
text-center
mb-[40px]
`);
