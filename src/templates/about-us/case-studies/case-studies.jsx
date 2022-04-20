import React from "react";

import { Ntext, SectionHeader, Slider } from "components";
import { aboutPageSliderData } from "config/slider";

const CaseStudies = () => {
  return (
    <div>
      <SectionHeader>
        <Ntext variant="h3">Businesses run their sales with Nomba</Ntext>
      </SectionHeader>
      <Slider slides={aboutPageSliderData} />
    </div>
  );
};

export { CaseStudies };
