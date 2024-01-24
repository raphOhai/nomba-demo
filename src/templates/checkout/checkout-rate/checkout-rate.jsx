import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { checkoutRateSection } from "config/checkout";

const { title, description } = checkoutRateSection;

const CheckoutRate = () => {
  return (
    <section className={wrapperStyle}>
      <Container className="flex flex-col">
        <section className="max-w-[560px] text-center mx-auto">
          <Ntext
            value={title}
            color="primary-100"
            className="!font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px]"
            variant="h2"
          />
          <Ntext
            color="primary-600"
            value={description}
            className="md:!leading-[32px] !-tracking-[0.8px] mt-6"
            variant="text4lite"
          />
        </section>
        <section className="relative overflow-clip bg-secondary rounded-2xl mt-[72px] w-full h-fit pt-2">
          <article className="flex flex-col bg-n-grey8 border-2 border-solid border-secondary rounded-2xl">
            <article className="flex border-b border-solid border-n-charcoal">
              <article className="border-r border-solid border-n-charcoal w-[64%] px-4 md:px-8 pb-6 pt-[76px]">
                <Ntext
                  color="n-silver"
                  value="Nomba Online Checkout"
                  className="md:!leading-[24px] !-tracking-[0.8px]"
                  variant="text4"
                />
              </article>
              <article className="w-[36%] px-4 md:px-8 pb-6 pt-[76px]">
                <Ntext
                  color="n-silver"
                  value="Other Providers"
                  className="md:!leading-[24px] !-tracking-[0.8px]"
                  variant="text4"
                />
              </article>
            </article>
            <article className="flex">
              <article className="border-r border-solid border-n-charcoal w-[64%] px-4 md:px-8 pb-12 pt-10">
                <p className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-3">
                  <Ntext
                    value="1.4%"
                    color="primary-100"
                    className="!font-bold !-tracking-[2px]"
                    variant="h3"
                  />
                  <Ntext
                    color="primary-100"
                    value="capped at NGN 2,000"
                    className="!font-normal !-tracking-[1px]"
                    variant="text6"
                  />
                </p>
              </article>
              <article className="w-[36%] px-4 md:px-8 pb-12 pt-10">
                <p className="flex flex-col md:flex-row md:items-center space-y-1 md:space-y-0 md:space-x-3">
                  <Ntext
                    value="1.5%"
                    color="primary-100"
                    className="!font-bold !-tracking-[2px]"
                    variant="h3"
                  />
                  <Ntext
                    value="or more"
                    color="primary-100"
                    className="!font-normal !-tracking-[1px]"
                    variant="text6"
                  />
                </p>
              </article>
            </article>
          </article>
          <article className="absolute top-0 left-0 bg-secondary rounded-br-3xl px-6 md:px-10 py-3">
            <Ntext
              color="n-smoky"
              value="Best Deal"
              className="!font-medium md:!leading-[20px] uppercase"
              variant="text2"
            />
          </article>
        </section>
      </Container>
    </section>
  );
};

const wrapperStyle = ctl(`
  lg:py-[160px]
  bg-n-grey8
  py-[120px]
  w-screen
`);

export { CheckoutRate };
