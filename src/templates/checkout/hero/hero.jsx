import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { heroSection } from "config/checkout";

import RightBlur from "svgs/checkout/hero-right-blur.svg";
import LeftBlur from "svgs/checkout/hero-left-blur.svg";

import checkoutGif from "gifs/check-out.gif";
import WhiteLogo from "svgs/logo-white.svg";

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
              className="md:!leading-[32px] !tracking-normal text-center lg:text-start max-w-[628px] mt-6 lg:mt-8"
              variant="text4lite"
            />
            <section className={buttonsStyle}>
              <Button
                className="!font-medium !text-base !text-n-smoky !w-[76vw] lg:!w-[184px] !h-14 lg:z-10"
                href={{ url: "https://dashboard.nomba.com/auth/login" }}
                text="Get Started"
              />
              <Button
                className="!bg-transparent !border-solid !border-n-charcoal !font-medium !text-base !text-white !w-[76vw] lg:!w-[184px] !h-14"
                text="Try live demo"
              />
            </section>
          </section>
          <aside className={asideStyle}>
            <img
              src={checkoutGif}
              alt="Check out with Nomba"
              className="rounded-2xl"
            />
            <p className="flex items-center mt-3">
              <Ntext
                value="Secured by"
                color="primary-100"
                variant="text0"
              />
              {' '}
              <WhiteLogo className="ml-1 w-10" />
            </p>
          </aside>
        </section>
      </Container>
      <RightBlur className={rightBlurStyle} />
      <LeftBlur className={leftBlurStyle} />
    </section>
  );
};

const rightBlurStyle = ctl(`
  absolute
  lg:top-[80px]
  lg:w-[24vw]
  top-[512px]
  h-[92vh]
  w-[48vw]
  right-0
`);

const leftBlurStyle = ctl(`
  absolute
  opacity-[.56]
  lg:animate-slowBounce
  lg:opacity-100
  lg:top-[400px]
  lg:w-[16vw]
  top-[80px]
  h-[776px]
  w-[56vw]
  left-0
`);

const wrapperStyle = ctl(`
  overflow-clip
  lg:pb-[200px]
  bg-n-smoky
  w-screen
  relative
  lg:py-20
  pt-10
  pb-20
`);

const buttonsStyle = ctl(`
  flex
  flex-col
  items-start
  lg:flex-row
  lg:space-y-0
  lg:space-x-4
  space-y-6
  mt-10
  w-fit
`);

const asideStyle = ctl(`
  flex
  flex-col
  items-center
  lg:rounded-[40px]
  bg-opacity-40
  lg:scale-90
  rounded-3xl
  bg-n-grey8
  lg:p-16
  lg:z-0
  p-10
  z-10
`);

const heroStyle = ctl(`
  flex
  flex-col
  space-y-10
  lg:flex-row
  lg:space-y-0
  lg:justify-between
  items-center
`);

export { CheckoutPageHero };
