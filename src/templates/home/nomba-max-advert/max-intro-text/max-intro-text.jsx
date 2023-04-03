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
          Beyond payments, this device can support your business apps; inventory{" "}
          <Br on="desktop" />
          management, food menu, ordering, invoicing and many more.
        </Ntext>
      </div>
    </div>
  );
}

const textSection = ctl(`
text-center
mb-[40px]
`);
