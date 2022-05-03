import { Br, Ntext, SectionHeader, Slider } from "components";
import React from "react";

import { makePaymentsPageSliderData } from "config/slider";
const Features = () => {
  return (
    <div>
      <SectionHeader>
        <div className="mb-[72px]">
          <Ntext variant="h3">
            What businesses love about making
            <Br on="desktop" /> payments with Nomba
          </Ntext>
        </div>
        <Slider slides={makePaymentsPageSliderData} />
      </SectionHeader>
    </div>
  );
};

export { Features };
