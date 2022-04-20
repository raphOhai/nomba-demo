import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext, SectionHeader, Slider } from "components";

import { agentsPageSliderData } from "config/slider";
const CreatingWealth = () => {
  return (
    <div className={creatingWealthWrapperStyle}>
      <SectionHeader>
        <Ntext variant="h3">Creating wealth becomes easier with Nomba</Ntext>
        <Ntext
          value="Access all the offline and online tools you need to grow your business"
          variant="p18"
          className="mt-2"
        />
      </SectionHeader>
      <Slider slides={agentsPageSliderData} />
    </div>
  );
};

const creatingWealthWrapperStyle = ctl(`
bg-primary-200
md:py-24
py-16
`);
export { CreatingWealth };
