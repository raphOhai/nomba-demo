import React from "react";
import Rive, { Layout, Fit } from "@rive-app/react-canvas";
import ctl from "@netlify/classnames-template-literals";

import { notificationsSection, benefitsSection } from "config/checkout";
import { Container, Button, Ntext } from "components";
import { BenefitPane } from "./benefit-pane";

import Gradient from "svgs/checkout/gradient.svg";

const { title: benefitsLabel, benefits } = benefitsSection;

const {
  title: notificationsLabel,
  description: notificationsDescription,
} = notificationsSection;

const CheckoutBenefits = () => {
  return (
    <section className={wrapperStyle}>
      <Gradient className="absolute right-0 top-[658px] w-[40vw] h-[1700px]" />
      <Container className="flex flex-col">
        <section className="flex flex-col space-y-20 w-full">
          <Ntext
            color="primary-100"
            value={benefitsLabel}
            className="!font-medium md:!text-[56px] md:!leading-[64px] !-tracking-[2px] min-h-[132px] text-center lg:text-start"
            variant="h1"
          />
          <section className={benefitsStyle}>
            {benefits.map(benefit => (<BenefitPane key={benefit.title} {...benefit} />))}
          </section>
        </section>
        <section className={notificationsStyle}>
          <section className="flex flex-col items-center lg:items-start max-w-[450px]">
            <Ntext
              color="primary-100"
              value={notificationsLabel}
              className="!font-medium md:!leading-[56px] !-tracking-[2px] text-center lg:text-start"
              variant="h2"
            />
            <Ntext
              color="primary-600"
              value={notificationsDescription}
              className="md:!leading-[32px] !-tracking-[0.8px] text-center lg:text-start mt-10"
              variant="text4lite"
            />
            <Button
              className="!font-medium !text-base !min-w-[272px] mt-10 !h-14"
              href={{ url: "https://dashboard.nomba.com/auth/sign-up-new" }}
              text="Get started for free"
            />
          </section>
          <Rive
            src="/payment-notifications.riv"
            layout={new Layout({ fit: Fit.Cover })}
            className={animationWrapperStyle}
            animations="Timeline 1"
          />
        </section>
      </Container>
    </section>
  );
};

const animationWrapperStyle = ctl(`
  bg-n-grey8
  bg-opacity-[0.16]
  lg:rounded-[32px]
  lg:w-[512px]
  lg:h-[508px]
  rounded-3xl
  h-[348px]
  w-full
`);

const notificationsStyle = ctl(`
  flex
  flex-col
  space-y-10
  lg:flex-row
  lg:space-y-0
  lg:mt-[200px]
  lg:justify-between
  items-center
  mt-[100px]
`);

const benefitsStyle = ctl(`
  grid
  lg:flex
  grid-cols-1
  md:grid-cols-2
  lg:justify-between
  grid-flow-row
  mx-auto
  gap-10
  w-full
`);

const wrapperStyle = ctl(`
  bg-n-smoky
  overflow-clip
  lg:pt-[200px]
  lg:pb-[164px]
  py-[100px]
  w-screen
  relative
`);

export { CheckoutBenefits };
