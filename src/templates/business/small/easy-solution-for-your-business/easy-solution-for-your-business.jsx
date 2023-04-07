import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Br, Ntext, SectionHeader, SliderCard, Container } from "components";

import { easySolutionsForSmallBusiness } from "config/slider";
const EasySolutionsForSmallBusiness = () => {
  return (
    <section className="bg-primary-200">
      <Container>
        <div className={businessWrapperStyle}>
          <SectionHeader className="!text-left md:!pt-[10px] !pt-[38px]">
            <Ntext variant="h3">
              Easy solutions for your
              <Br on="desktop" />
              small businesses
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
    </section>
  );
};

const businessWrapperStyle = ctl(`

md:pb-20
pb-16
`);
export { EasySolutionsForSmallBusiness };
