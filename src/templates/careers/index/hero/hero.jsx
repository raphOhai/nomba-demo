import React, { useContext, useEffect, useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Button, NLink, Ntext } from "components";
import { AppContext } from "states/context";

import HeroImage1 from "jpegs/careers/hero/hero-image-1.jpeg";
import HeroImage2 from "jpegs/careers/hero/hero-image-2.jpeg";
import HeroImage3 from "jpegs/careers/hero/hero-image-3.jpeg";
import HeroImage4 from "jpegs/careers/hero/hero-image-4.jpeg";
import HeroImage5 from "jpegs/careers/hero/hero-image-5.jpeg";
import HeroImage6 from "jpegs/careers/hero/hero-image-6.png";
import HeroImage7 from "jpegs/careers/hero/hero-image-7.png";
import HeroImage8 from "jpegs/careers/hero/hero-image-8.jpeg";
import HeroImage9 from "jpegs/careers/hero/hero-image-9.jpeg";
import HeroImage10 from "jpegs/careers/hero/hero-image-10.jpeg";

import { shuffle } from "lodash";

const CareersPageHero = () => {
  const { availableRoles } = useContext(AppContext);

  const [pictureIndices, setPictureIndices] = useState([0, 1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    const switcher = setInterval(() => {
      const landscapeImageIndices = shuffle([1, 2, 5, 7, 8, 9]);
      const portraitImageIndices = shuffle([0, 3, 4, 6]);

      setPictureIndices([
        portraitImageIndices[0],
        landscapeImageIndices[0],
        landscapeImageIndices[1],
        portraitImageIndices[1],
        portraitImageIndices[2],
        landscapeImageIndices[2],
        portraitImageIndices[3],
      ]);
    }, 8192);

    return () => {
      clearInterval(switcher);
    };
  }, []);

  const roleCount = availableRoles.length;

  const images = [
    HeroImage1,
    HeroImage2,
    HeroImage3,
    HeroImage4,
    HeroImage5,
    HeroImage6,
    HeroImage7,
    HeroImage8,
    HeroImage9,
    HeroImage10,
  ];

  return (
    <section className={wrapperStyle}>
      <section className={captionStyle}>
        <Ntext
          color="primary-1200"
          value="Join our team of exceptional people to build business tools for everybody"
          className="max-w-[640px] mx-auto px-8 lg:px-0"
          variant="p16"
        />
        <Ntext color="primary-100" className="max-w-[640px] mx-auto mt-5 mb-6" variant="h1">
          {/* <span>{"We Have "}</span>
          {roleCount > 0 && (
            <NLink className="inline underline" href={{ url: "/careers/roles" }}>
              <span>{roleCount}</span>
            </NLink>
          )}
          <span>{` Open ${roleCount === 1 ? "Position" : "Positions"}`}</span> */}
          We have open positions
        </Ntext>
        <Button
          className="!font-medium !text-sm !min-w-[86px] mb-[72px] !h-10"
          href={{ url: "https://nomba.zohorecruit.com" }}
          text="Join Us"
        />
      </section>
      <section className={galleryStyle}>
        <img
          key={pictureIndices[0]}
          alt="Three Smiling Guys"
          src={images[pictureIndices[0]]}
          className={`${imageWrapperStyle} w-[300px] h-[504px]`}
          loading="lazy"
        />
        <article className="flex flex-col space-y-6">
          <img
            key={pictureIndices[1]}
            alt="Large Group Of Staff"
            src={images[pictureIndices[1]]}
            className={`${imageWrapperStyle} w-[400px] h-[240px]`}
          />
          <img
            key={pictureIndices[2]}
            alt="Five Smiling Ladies"
            src={images[pictureIndices[2]]}
            className={`${imageWrapperStyle} w-[400px] h-[240px]`}
            loading="lazy"
          />
        </article>
        <article className="flex flex-col space-y-6">
          <article className="flex justify-between lg:space-x-5">
            <img
              key={pictureIndices[3]}
              alt="Two Guys Having Fun"
              src={images[pictureIndices[3]]}
              className={`${imageWrapperStyle} w-[180px] h-[240px]`}
            />
            <img
              key={pictureIndices[4]}
              alt="Lady Showing Peace Sign"
              src={images[pictureIndices[4]]}
              className={`${imageWrapperStyle} w-[180px] h-[240px]`}
            />
          </article>
          <img
            key={pictureIndices[5]}
            alt="Smiling Guy And Lady"
            src={images[pictureIndices[5]]}
            className={`${imageWrapperStyle} w-[380px] h-[240px]`}
            loading="lazy"
          />
        </article>
        <img
          key={pictureIndices[6]}
          alt="Two Smiling Ladies"
          src={images[pictureIndices[6]]}
          className={`${imageWrapperStyle} w-[300px] h-[504px]`}
        />
      </section>
    </section>
  );
};

const imageWrapperStyle = ctl(`
  animate-heroFade
  hover:scale-105
  rounded-[5px]
  duration-500
  transition
`);

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
