import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Br, Ntext, SectionHeader, Slider } from "components";

import { largeBusinessPageSliderData } from "config/slider";
const HandlingBusinessPayments = () => {
  return (
    <div className={creatingWealthWrapperStyle}>
      <SectionHeader>
        <Ntext variant="h3">
          Change how you handle everyday <Br on="h3" />
          business and payments
        </Ntext>
        <Ntext
          value="Access all the offline and online tools you need to grow your business"
          variant="p18"
          className="mt-2"
        />
      </SectionHeader>
      <Slider slides={largeBusinessPageSliderData} />
    </div>
  );
};

const creatingWealthWrapperStyle = ctl(`
bg-primary-200
md:py-24
py-16
`);
export { HandlingBusinessPayments };
