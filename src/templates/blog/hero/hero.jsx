import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Button, Ntext } from "components";

import NoSpammingBadge from "svgs/blog/no-spamming.svg";

const BlogPageHero = () => {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <section className={wrapperStyle}>
      <Ntext
        color="n-grey0"
        value="Welcome To Nomba Blog"
        className="uppercase !font-bold !tracking-[3.84px]"
        variant="text3"
      />
      <Ntext
        color="n-grey8"
        value="What do you want to read today?"
        className="md:!leading-[56px] !-tracking-[2px] text-center mt-4"
        variant="h2"
      />
      <section className={newsletterSectionStyle}>
        <article className={inputBoxWrapperStyle}>
          <input
            onChange={event => setEmailAddress(event.target.value)}
            placeholder="Enter your email"
            defaultValue={emailAddress}
            className={inputBoxStyle}
            type="text"
          />
        </article>
        <article className="relative mt-8 md:mt-0 -ml-40 md:ml-5">
          <Button
            href="#"
            className="!font-medium !text-[14px] !min-w-[148px] !h-16"
            text="Subscribe"
            size="small"
          />
          <NoSpammingBadge className="absolute -right-[164px] -top-[22px]" />
        </article>
      </section>
    </section>
  );
};

const newsletterSectionStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  justify-center
  items-center
  mt-8
`);

const inputBoxWrapperStyle = ctl(`
  shadow-[0_4px_4px_-2px_rgba(24,39,75,0.08),0_2px_4px_-2px_rgba(24,39,75,0.12)]
  border-n-platinum
  border-solid
  md:w-[480px]
  rounded-lg
  bg-white
  w-[90vw]
  border
  px-6
  py-5
`);

const inputBoxStyle = ctl(`
  placeholder-primary-1200
  focus:outline-none
  text-primary
  bg-white
  w-full
`);

const wrapperStyle = ctl(`
  flex
  flex-col
  items-center
  pb-[100px]
  pt-16
  px-4
`);

export { BlogPageHero };