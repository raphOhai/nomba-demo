import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Br, Ntext } from "components";
import Max from "svgs/Union-dark.svg";
export default function ProIntroText() {
  return (
    <div className={textSection}>
      {/* main text */}
      <div className="mb-[20px] hidden xs:flex flex-nowrap items-baseline justify-center text-center">
        <Ntext variant="h2" color="c-dark">
          Introducing Nomba &nbsp;
        </Ntext>
        <Max className="h-[22px] w-[80px] md:w-[124px] md:h-[34px]" />
      </div>
      <div className="xs:hidden">
        <Ntext variant="h2" color="c-dark">
          Introducing
        </Ntext>
        <div className="mb-[20px] flex  flex-nowrap items-baseline justify-center text-center">
          <Ntext variant="h2" color="c-dark">
            Nomba&nbsp;
          </Ntext>
          <Max className="h-[22px] w-[80px] md:w-[124px] md:h-[34px]" />
        </div>
      </div>

      {/* sub text */}
      <div>
        <Ntext variant="text3" color="primary-900">
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
