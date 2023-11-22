import React, { useContext, useEffect, useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Button, NLink, Ntext } from "components";
import { heroSectionData } from "config/careers"
import { AppContext } from "states/context";

const CareersPageHero = () => {
  const { availableRoles } = useContext(AppContext);

  const [pictureIndex, setPictureIndex] = useState(0);

  useEffect(() => {
    const switcher = setInterval(() => {
      setPictureIndex(1 - pictureIndex);
    }, 4096);

    return () => {
      clearInterval(switcher);
    };
  });

  const { intro, images } = heroSectionData;

  const roleCount = availableRoles.length;

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
          <span>{'We Have '}</span>
          {
            roleCount > 0 &&
            <NLink className="inline underline" href={{ url: "/careers/roles" }}>
              <span>{roleCount}</span>
            </NLink>
          }
          <span>{` Open ${roleCount === 1 ? 'Position' : 'Positions'}`}</span>
        </Ntext>
        <Button
          className="!font-medium !text-sm !min-w-[86px] mb-[72px] !h-10"
          href={{ url: "/careers/roles" }}
          text="Join Us"
        />
      </section>
      <section className={galleryStyle}>
        {[images[0], images[6]][pictureIndex]}
        <article className="flex flex-col space-y-6">
          {[images[1], images[2]][pictureIndex]}
          {[images[2], images[1]][pictureIndex]}
        </article>
        <article className="flex flex-col space-y-6">
          <article className="flex justify-between lg:space-x-5">
            {[images[3], images[4]][pictureIndex]}
            {[images[4], images[3]][pictureIndex]}
          </article>
          {images[5]}
        </article>
        {[images[6], images[0]][pictureIndex]}
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
  lg:-bottom-8
  lg:absolute
  lg:mx-auto
  lg:right-0
  lg:left-0
  w-screen
`);

export { CareersPageHero };
