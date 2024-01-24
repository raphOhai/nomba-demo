import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { notificationsSection, benefitsSection } from "config/checkout";
import { Container, Button, Ntext } from "components";
import { BenefitPane } from "./benefit-pane";

import AlertsGraphic from "svgs/checkout/checkout-alerts.svg";
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
            className="!font-normal md:!leading-[72px] !-tracking-[2px] max-w-[732px] text-center lg:text-start"
            variant="h1"
          />
          <section className={benefitsStyle}>
            {benefits.map(benefit => <BenefitPane key={benefit.title} {...benefit} />)}
          </section>
        </section>
        <section className={notificationsStyle}>
          <section className="flex flex-col items-center lg:items-start max-w-[600px]">
            <Ntext
              color="primary-100"
              value={notificationsLabel}
              className="!font-normal md:!leading-[72px] !-tracking-[2px] text-center lg:text-start"
              variant="h1"
            />
            <Ntext
              color="primary-600"
              value={notificationsDescription}
              className="md:!leading-[32px] !-tracking-[0.8px] text-center lg:text-start mt-10"
              variant="text4lite"
            />
            <Button
              className="!font-medium !text-base !min-w-[184px] mt-10 !h-14"
              href={{ url: "https://dashboard.nomba.com/auth/login" }}
              text="Get Started"
            />
          </section>
          <AlertsGraphic className="max-w-[80vw]" />
        </section>
      </Container>
    </section>
  );
};

const notificationsStyle = ctl(`
  flex
  flex-col
  space-y-10
  lg:flex-row
  lg:space-y-0
  lg:mt-[200px]
  lg:items-start
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
