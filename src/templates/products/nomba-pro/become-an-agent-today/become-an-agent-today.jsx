import ctl from "@netlify/classnames-template-literals";
import { ReadMore, Ntext } from "components";
import React from "react";
import { SectionWrapper } from "../components";

export function BecomeAnAgentToday() {
  return (
    <div className="bg-n-grey6">
      <SectionWrapper className={sectionContainer}>
        <Ntext variant="text5" color="n-light" className="w-[144px] md:w-fit">
          Become a Nomba Agent Today
        </Ntext>
        <ReadMore
          text="Learn more"
          variant="text3"
          color="n-light"
          to="/products/nomba-pro"
          weight={500}
          defaultStyle={false}
        />
      </SectionWrapper>
    </div>
  );
}

const sectionContainer = ctl(`
flex
justify-center
bg-n-grey6
items-center
lg:gap-[30px]
md:gap-[3%]
h-[100px]
`);
