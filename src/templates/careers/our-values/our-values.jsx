import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { SectionHeader, Container, Ntext, Br } from "components";
import { ourValues } from "config/careers"

const OurValues = () => {
  return (
    <section className={sectionStyle}>
      <Container className="flex flex-col">
        <SectionHeader>
          <Ntext className="text-center" variant="h2" data-animation="h" color="c-0">
            Our values support and <Br on="all" /> drive our mission
          </Ntext>
        </SectionHeader>
        <section className={galleryStyle}>
          {
            ourValues.map((value, i) => (
              <article className={`${articleStyle} bg-[${value.colour}]`} key={i}>
                <Ntext variant="h1" color={value.titleColour} value={value.title} />
                <Ntext className="mt-[120px]" variant="p16" value={value.details} />
              </article>
            ))
          }
        </section>
      </Container>
    </section>
  );
};

const sectionStyle = ctl(`
  pb-[160px]
  bg-white
`);

const articleStyle = ctl(`
  lg:max-w-[600px]
  rounded-[5px]
  p-[32px]
`);

const galleryStyle = ctl(`
  grid
  gap-8
  lg:gap-y-8
  lg:gap-x-16
  grid-cols-1
  lg:grid-cols-2
  lg:grid-rows-2
  lg:grid-flow-row
  mt-[72px]
  w-full
`);

export { OurValues };
