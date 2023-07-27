import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Br, Ntext } from "components";
export default function TerminalIntroText() {
  return (
    <div className={textSection}>
      {/* main text */}
      <div className="mb-[20px] hidden md:flex flex-nowrap items-baseline justify-center text-center">
        <Ntext variant="h2" color="c-dark">
          Introducing Nomba <span className=" italic tracking-[0.07em]">M</span>ini
        </Ntext>
      </div>
      <div className="md:hidden">
        <Ntext variant="h2" color="c-dark">
          Introducing
        </Ntext>
        <div className="mb-[20px] flex  flex-nowrap items-baseline justify-center text-center">
          <Ntext variant="h2" color="c-dark">
            Nomba&nbsp;<span className=" italic tracking-[0.07em]">M</span>ini
          </Ntext>
        </div>
      </div>

      {/* sub text */}
      <div>
        <Ntext variant="text3" color="primary-900">
          Nomba mini is your pocket-sized payment padi that guarantees a reliable, fast
          <Br on="desktop" />
          and smooth payment experience.
        </Ntext>
      </div>
    </div>
  );
}

const textSection = ctl(`
text-center
mb-[40px]
`);
