import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Button, Ntext, NLink } from "components";

const GetMoreStoriesPane = () => {
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <section className={wrapperStyle}>
      <Ntext
        color="n-grey8"
        value="Get more stories and articles like this"
        className="!-tracking-[1px] text-center"
        variant="text6"
      />
      <Ntext
        color="n-liver"
        value="Enter your email to get new articles and posts, directly sent to you."
        className=" text-center mt-4"
        variant="text3"
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
        <article className="mt-8 md:mt-0 md:ml-4">
          <Button
            href="#"
            className="!font-medium rou !text-[14px] !min-w-[164px] !h-16"
            text="Subscribe now"
            size="small"
          />
        </article>
      </section>
      <Ntext
        color="n-grey8"
        className="!leading-5 mt-4"
        variant="text2">
        <span>
          {'You can unsubscribe anytime you want to. Read more about our '}
        </span>
        <NLink
          className="text-secondary-600 inline"
          href={{ url: "/privacy-policy" }}>
          <span>{'Privacy Policy'}</span>
        </NLink>
      </Ntext>
    </section>
  );
};

const newsletterSectionStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  justify-center
  items-center
  mt-16
`);

const inputBoxWrapperStyle = ctl(`
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
  rounded-[32px]
  border-n-yellow4
  border-solid
  bg-n-yellow2
  py-[78px]
  border
`);

export { GetMoreStoriesPane };
