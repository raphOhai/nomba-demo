import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Br, Ntext, SectionHeader, Slider, Container } from "components";

import { smallBusinessPageSliderData } from "config/slider";
const GrowingYourSales = () => {
  return (
    <div className={growingYourBusinessWrapperStyle}>
      <Container>
        <SectionHeader>
          <Ntext variant="h3">
            Growing your sales become
            <Br on="desktop" />
            easier with Nomba
          </Ntext>
          <Ntext
            value="Access all the tools you need to grow your business"
            variant="p18"
            className="mt-2 px-3"
            color="n-grey5"
          />
        </SectionHeader>
      </Container>
      <Slider slides={smallBusinessPageSliderData} />
    </div>
  );
};

const growingYourBusinessWrapperStyle = ctl(`
bg-primary-200
md:pb-24
pb-16
`);
export { GrowingYourSales };
