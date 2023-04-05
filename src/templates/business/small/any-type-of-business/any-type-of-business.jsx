import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Br, Ntext, SectionHeader, SliderCard, Container } from "components";

import { easySolutionsForSmallBusiness } from "config/slider";
const AnyTypeOfBusiness = () => {
  return (
    <Container>
      <div className={businessWrapperStyle}>
        <SectionHeader className="!text-left">
          <Ntext variant="h3">
            Solution built for any type
            <Br on="desktop" />
            of business model
          </Ntext>
          <Ntext
            value="Track payment on multiple channels for every item sold in your store. Track payment on multiple channels for every "
            variant="p18"
            className="mt-4 max-w-[533px]"
            color="n-grey6"
          />
        </SectionHeader>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
          {easySolutionsForSmallBusiness.map((item, i) => (
            <SliderCard
              key={i}
              heading={item.heading}
              image={item.image}
              text={item.text}
              link={item?.link}
              caseStudy={item?.caseStudy}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

const businessWrapperStyle = ctl(`
bg-primary-200
md:pb-20
pb-16
`);
export { AnyTypeOfBusiness };
