import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Br, Ntext } from "components";

export default function ProIntroText() {
  return (
    <div className={textSection}>
      {/* main text */}
      <div className="mb-[20px]">
        <Ntext variant="text8" color="c-dark">
          Introducing the <Br on="mobile" />
          Nomba Pro Terminal
        </Ntext>
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
