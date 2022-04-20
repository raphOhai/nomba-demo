import { Br, Ntext, SectionHeader, Slider } from "components";
import React from "react";

import { acceptPaymentsPageSliderData } from "config/slider";
const Features = () => {
  return (
    <div>
      <SectionHeader>
        <div className="mb-[72px] xl:mt-[120px] mt-10 ">
          <Ntext variant="h3">
            More than just getting paid, It’s the best <Br variant="desktop" />
            way to stay in control
          </Ntext>
        </div>
        <Slider slides={acceptPaymentsPageSliderData} />
      </SectionHeader>
    </div>
  );
};

export { Features };
