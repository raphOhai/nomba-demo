import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { heroSectionData } from "config/careers"
import { Button, Ntext } from "components";

const CareersPageHero = () => {
  const { intro, images } = heroSectionData;

  return (
    <section className={wrapperStyle}>
      <section className={captionStyle}>
        <Ntext
          color="primary-1200"
          className="max-w-[640px] mx-auto px-8 lg:px-0"
          variant="p16"
          value={intro}
        />
        <Ntext
          color="primary-100"
          className="max-w-[640px] mx-auto mt-5 mb-6"
          variant="h1">
          {"We Have "}
          <span className="underline">9</span>
          {" Open Positions"}
        </Ntext>
        <Button
          text="Join Us"
          href={{ url: "/careers/roles" }}
          className="!font-medium !text-[14px] !min-w-[86px] mb-[72px] !h-10"
          withArrow={false}
        />
      </section>
      <section className={galleryStyle}>
        {images[0]}
        <article className="flex flex-col space-y-5">
          {images[1]}
          {images[2]}
        </article>
        <article className="flex flex-col space-y-5">
          <article className="flex justify-between lg:space-x-5">
            {images[3]}
            {images[4]}
          </article>
          {images[5]}
        </article>
        {images[6]}
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  min-h-[880px]
  pt-[88px]
  relative
`);

const captionStyle = ctl(`
  flex
  flex-col
  text-center
  items-center
  justify-center
  w-full
`);

const galleryStyle = ctl(`
  flex
  mb-8
  px-8
  lg:mb-0
  lg:px-0
  flex-col
  relative
  space-y-5
  lg:flex-row
  lg:space-x-5
  lg:space-y-0
  lg:max-w-[1440px]
  justify-between
  lg:-bottom-8
  lg:absolute
  lg:mx-auto
  lg:right-0
  lg:left-0
  w-screen
`);

export { CareersPageHero };
