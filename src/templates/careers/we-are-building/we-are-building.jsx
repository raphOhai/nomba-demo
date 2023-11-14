import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { whatWeAreBuilding } from "config/careers"

import { SectionHeader, Container, Ntext } from "components";

const WeAreBuilding = () => {
  const { title, description, images } = whatWeAreBuilding;

  return (
    <Container className={containerStyle}>
      <section className={headingStyle}>
        <Ntext
          variant="h2"
          value={title}
          color="primary-100"
          className={firstHeadingTextStyle}
        />
        <Ntext
          color="primary-100"
          value={description}
          variant="text4lite"
          className={secondHeadingTextStyle}
        />
      </section>
      <section className={galleryStyle}>
        <article className="row-span-2">
          {images[0]}
        </article>
        {
          images.slice(1).map((image, i) => (
            <article key={i}> {image} </article>
          ))
        }
      </section>
    </Container>
  );
};

const secondHeadingTextStyle = ctl(`
  md:max-w-[500px]
  leading-[35px]
`);

const firstHeadingTextStyle = ctl(`
  md:max-w-[593px]
`);

const containerStyle = ctl(`
  flex
  flex-col
  pb-[108px]
`);

const headingStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  lg:justify-between
  space-y-10
  lg:space-y-0
  w-full
`);

const galleryStyle = ctl(`
  grid
  gap-8
  lg:gap-x-12
  grid-cols-1
  lg:grid-cols-2
  lg:grid-rows-2
  lg:grid-flow-col
  mt-[108px]
  w-full
`);

export { WeAreBuilding };
