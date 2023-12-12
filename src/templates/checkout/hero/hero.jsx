import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { heroSection } from "config/checkout";

import Placeholder from "svgs/checkout/hero-placeholder.svg";
import Blur from "svgs/checkout/hero-blur.svg";

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
            <section className="flex items-start space-x-4 mt-10">
              <Button
                className="!font-medium !text-base !text-n-smoky !min-w-[184px] !h-14"
                href={{ url: "https://dashboard.nomba.com/auth/login" }}
                text="Get Started"
              />
              <Button
                className="!bg-transparent !border-solid !border-n-charcoal !font-medium !text-base !text-white !min-w-[184px] !h-14"
                text="Try live demo"
              />
            </section>
          </section>
          <Placeholder className="hidden md:block" />
        </section>
      </Container>
      <Blur className="absolute animate-slowBounce left-0 top-[400px] w-[16vw] h-[776px]" />
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-[length:100%_100%]
  bg-checkout-hero
  overflow-clip
  bg-no-repeat
  pb-[200px]
  w-screen
  relative
  pt-20
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
