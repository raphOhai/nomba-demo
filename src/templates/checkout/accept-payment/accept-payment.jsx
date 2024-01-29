import React from "react";
import Rive, { useRive, Layout, Fit } from "@rive-app/react-canvas";
import ctl from "@netlify/classnames-template-literals";

import { acceptPaymentSection } from "config/checkout";
import { Container, Button, Ntext } from "components";

const { title, description } = acceptPaymentSection;

const AcceptPayment = () => {
  const { rive: animator, RiveComponent: ConnectingIcons } = useRive({
    layout: new Layout({ fit: Fit.Cover }),
    stateMachines: 'State Machine 1',
    src: '/plug-in-shopify.riv',
    animations: 'Timeline 1',
    autoplay: true,
  });

  const handleAnimationMouseEnter = () => {
    if (animator) {
      animator.reset();
      animator.play();
    }
  }

  return (
    <section className={wrapperStyle}>
      <Container className={sectionStyle}>
        <ConnectingIcons
          onMouseEnter={handleAnimationMouseEnter}
          className={animationWrapperStyle}
        />
        <section className="flex flex-col items-center lg:items-start lg:w-fit">
          <Ntext
            value={title}
            color="primary-100"
            className="!font-medium md:!leading-[56px] !-tracking-[2px] text-center lg:text-start"
            variant="h2"
          />
          <Ntext
            color="n-silver"
            value={description}
            className="md:!leading-[32px] text-center lg:text-start max-w-[500px] mt-6"
            variant="text3"
          />
          <Button
            className="!font-medium !text-base !min-w-[76vw] lg:!min-w-[198px] mt-10 !h-14"
            href={{ url: "https://dashboard.nomba.com/auth/sign-up-new" }}
            text="Coming Soon"
          />
        </section>
      </Container>
    </section>
  );
};

const animationWrapperStyle = ctl(`
  bg-n-charcoal
  bg-opacity-[0.08]
  lg:rounded-[32px]
  lg:w-[512px]
  lg:h-[508px]
  rounded-3xl
  h-[348px]
  w-full
`);

const sectionStyle = ctl(`
  flex
  flex-col
  space-y-10
  lg:flex-row
  lg:space-y-0
  lg:justify-between
  items-center
`);

const wrapperStyle = ctl(`
  lg:py-[160px]
  bg-n-grey8
  w-screen
  relative
  py-20
`);

export { AcceptPayment };
