import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { heroSection } from "config/payment-checkout";

import Placeholder from "svgs/checkout-hero-placeholder.svg";

const { title, description } = heroSection;

const PaymentCheckoutHero = () => {
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
              className="md:!leading-[32px] !-tracking-[0.8px] text-center lg:text-start max-w-[628px] mt-8"
              variant="text4lite"
            />
            <Button
              className="!font-medium !text-base !text-n-smoky !min-w-[184px] mt-10 !h-14"
              href={{ url: "https://dashboard.nomba.com/auth/login" }}
              text="Get Started"
            />
          </section>
          <Placeholder className="hidden md:block" />
        </section>
      </Container>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-[length:100%_100%]
  bg-checkout-hero
  bg-no-repeat
  pb-[200px]
  w-screen
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

export { PaymentCheckoutHero };
