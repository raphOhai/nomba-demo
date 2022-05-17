import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext, SectionHeader, Slider } from "components";

import { savingsPageSliderData } from "config/slider/savings";
const SavingProfits = () => {
  return (
    <div className={savingProfitsWrapperStyle}>
      <SectionHeader>
        <Ntext variant="h3">
          Saving your profits and putting your idle cash to work
        </Ntext>
        <Ntext
          value="What's better than spending your business money?"
          variant="p18"
          className="mt-2"
        />
      </SectionHeader>
      <Slider slides={savingsPageSliderData} />
    </div>
  );
};

const savingProfitsWrapperStyle = ctl(`
bg-primary-200
md:py-24
py-16
`);
export { SavingProfits };
