import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";

import Placeholder from "svgs/checkout-hero-placeholder.svg";

const PaymentCheckoutHero = () => {
  return (
    <section className={wrapperStyle}>
      <Container>
        <section className={heroStyle}>
          <section className="flex flex-col items-center lg:items-start max-w-[740px]">
            <Ntext
              color="primary-100"
              value="Seamless Online Payment, Simplified"
              className="md:!text-[72px] md:!leading-[80px] !-tracking-[2px] text-center lg:text-start max-w-[660px] lg:min-h-[168px]"
              variant="h1"
            />
            <Ntext
              color="primary-600"
              value="Seamlessly integrate our product for a smoother checkout process that delights your customers. Elevate your transactions effortlessly."
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
  bg-checkout-hero
  lg:bg-center
  pb-[200px]
  bg-cover
  bg-right
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
