import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";

import Placeholder from "svgs/checkout-hero-placeholder.svg";
import Background from "jpegs/checkout-hero.png";

const PaymentCheckoutHero = () => {
  return (
    <section className="relative w-screen">
      <img
        className="w-screen"
        alt="Checkout Hero"
        src={Background}
      />
      <section className="absolute top-0 left-0 w-full">
        <Container className="pt-20">
          <section className={heroStyle}>
            <section className="w-screen">
              <Ntext
                color="primary-100"
                value="Seamless Online Payment, Simplified"
                className="md:!text-[72px] md:!leading-[80px] !-tracking-[2px]"
                variant="h1"
              />
              <Ntext
                color="primary-600"
                value="Seamlessly integrate our product for a smoother checkout process that delights your customers. Elevate your transactions effortlessly."
                variant="text4lite"
                className="mt-8"
              />
              <Button
                className="!font-medium !text-base !text-n-smoky !min-w-[184px] mt-10 !h-14"
                href={{ url: "https://dashboard.nomba.com/auth/login" }}
                text="Get Started"
              />
            </section>
            <section>
              <Placeholder />
            </section>
          </section>
        </Container>
      </section>
    </section>
  );
};

const heroStyle = ctl(`
  flex
  flex-col
  space-y-4
  lg:flex-row
  lg:space-y-0
  lg:items-center
  lg:justify-between
`);

export { PaymentCheckoutHero };
