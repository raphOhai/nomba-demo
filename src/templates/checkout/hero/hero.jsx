import React, { useContext } from "react";
import Rive, { Layout, Fit } from "@rive-app/react-canvas";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { heroSection } from "config/checkout";

import RightBlur from "svgs/checkout/hero-right-blur.svg";
import LeftBlur from "svgs/checkout/hero-left-blur.svg";

import { AppContext } from "states/context";

import "./reusables.scss";

const { title, description } = heroSection;

const CheckoutPageHero = () => {
  const { onOpen } = useContext(AppContext);

  return (
    <section className={wrapperStyle}>
      <Container className={heroStyle}>
        <section className="flex flex-col items-center lg:items-start max-w-[740px] z-10">
          <article className={titleBadgeStyle}>
            <Ntext
              color="b-6"
              value="Nomba Checkout"
              className="!font-medium"
              variant="text2"
            />
          </article>
          <Ntext
            value={title}
            color="primary-100"
            className="!font-medium md:!text-[64px] md:!leading-[72px] !-tracking-[2px] text-center lg:text-start min-h-[150px] mt-2.5"
            variant="h1"
          />
          <Ntext
            color="primary-600"
            value={description}
            className="md:!leading-[32px] !-tracking-[0.8px] text-center lg:text-start max-w-[628px] mt-6"
            variant="text4lite"
          />
          <section className={buttonsStyle}>
            <Button
              className="!font-medium !text-base !text-n-smoky !w-[76vw] lg:!w-[246px] !h-14 lg:z-10"
              href={{ url: "https://dashboard.nomba.com/auth/sign-up-new" }}
              text="Get Started for free"
            />
            <Button
              text="Request demo"
              className="!bg-transparent !border-solid !border-n-charcoal !font-medium !text-base !text-white !w-[76vw] lg:!w-[204px] !h-14"
              onClick={onOpen}
            />
          </section>
        </section>
        <Rive
          src="/check-out-with-nomba.riv"
          layout={new Layout({ fit: Fit.Cover })}
          className={animationWrapperStyle}
          animations="Timeline 1"
        />
      </Container>
      <RightBlur className={rightBlurStyle} />
      <LeftBlur className={leftBlurStyle} />
    </section>
  );
};

const animationWrapperStyle = ctl(`
  bg-n-grey8
  bg-opacity-40
  lg:rounded-[32px]
  lg:w-[512px]
  lg:h-[508px]
  rounded-3xl
  h-[348px]
  w-full
`);

const titleBadgeStyle = ctl(`
  rounded-[100px]
  border-n-grey6
  border-solid
  border
  py-2.5
  px-5
`);

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
