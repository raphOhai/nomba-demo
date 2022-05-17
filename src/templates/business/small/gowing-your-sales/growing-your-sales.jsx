import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Br, Ntext, SectionHeader, Slider } from "components";

import { smallBusinessPageSliderData } from "config/slider";
const GrowingYourSales = () => {
  return (
    <div className={growingYourBusinessWrapperStyle}>
      <SectionHeader>
        <Ntext variant="h3">
          Growing your sales become
          <Br on="desktop" />
          easier with Nomba
        </Ntext>
        <Ntext
          value="Access all the offline and online tools you need to grow your business"
          variant="p18"
          className="mt-2"
        />
      </SectionHeader>
      <Slider slides={smallBusinessPageSliderData} />
    </div>
  );
};

const growingYourBusinessWrapperStyle = ctl(`
bg-primary-200
md:py-24
py-16
`);
export { GrowingYourSales };