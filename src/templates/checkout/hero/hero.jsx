import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { heroSection } from "config/checkout";

import RightBlur from "svgs/checkout/hero-right-blur.svg";
import LeftBlur from "svgs/checkout/hero-left-blur.svg";

import checkoutGif from "gifs/check-out.gif";

const { title, description } = heroSection;

const CheckoutPageHero = () => {
  return (
    <section className={wrapperStyle}>
      <Container>
        <section className={heroStyle}>
          <section className="flex flex-col items-center lg:items-start max-w-[740px]">
            <Ntext
              value={title}
              color="primary-100"
              className="md:!text-[72px] md:!leading-[80px] !-tracking-[2px] text-center lg:text-start max-w-[660px] lg:min-h-[168px]"
              variant="h1"
            />
            <Ntext
              color="primary-600"
              value={description}
              className="md:!leading-[32px] !tracking-normal text-center lg:text-start max-w-[628px] mt-8"
              variant="text4lite"
            />
            <section className={buttonsStyle}>
              <Button
                className="!font-medium !text-base !text-n-smoky !w-[84vw] lg:!w-[184px] !h-14 z-10"
                href={{ url: "https://dashboard.nomba.com/auth/login" }}
                text="Get Started"
              />
              <Button
                className="!bg-transparent !border-solid !border-n-charcoal !font-medium !text-base !text-white !w-[84vw] lg:!w-[184px] !h-14"
                text="Try live demo"
              />
            </section>
          </section>
          <aside className={asideStyle}>
            <img
              src={checkoutGif}
              alt="Check out with Nomba"
              className="rounded-xl w-full h-full"
            />
          </aside>
        </section>
      </Container>
      <RightBlur className={rightBlurStyle} />
      <LeftBlur className={leftBlurStyle} />
    </section>
  );
};

const rightBlurStyle = ctl(`
  hidden
  lg:block
  absolute
  lg:top-[80px]
  top-[40px]
  h-[858px]
  w-[24vw]
  right-0
`);

const leftBlurStyle = ctl(`
  hidden
  lg:block
  absolute
  animate-slowBounce
  lg:top-[400px]
  top-[200px]
  h-[776px]
  w-[16vw]
  left-0
`);

const wrapperStyle = ctl(`
  overflow-clip
  lg:pb-[200px]
  bg-n-smoky
  w-screen
  relative
  py-20
`);

const buttonsStyle = ctl(`
  flex
  flex-col
  items-start
  lg:flex-row
  lg:space-y-0
  lg:space-x-4
  space-y-4
  w-fit
  mt-10
`);

const asideStyle = ctl(`
  hidden
  md:block
  bg-n-grey8
  bg-opacity-40
  rounded-[40px]
  w-[596px]
  h-[560px]
  p-16
`);

const heroStyle = ctl(`
  flex
  flex-col
  space-y-20
  lg:flex-row
  lg:space-y-0
  lg:justify-between
  items-center
`);

export { CheckoutPageHero };
