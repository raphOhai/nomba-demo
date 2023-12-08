import React from "react";
import ctl from "@netlify/classnames-template-literals";

import CrossfitJagun from "svgs/sponsors/checkout/crossfit-jagun.svg";
import BuyPower from "svgs/sponsors/checkout/buy-power.svg";
import Reliance from "svgs/sponsors/checkout/reliance.svg";
import GIGM from "svgs/sponsors/checkout/gigm.svg";
import GIGL from "svgs/sponsors/checkout/gigl.svg";

const CheckoutSponsors = () => {
  return (
    <section className={wrapperStyle}>
      <section className={galleryStyle}>
        <GIGM />
        <BuyPower />
        <Reliance />
        <GIGL />
        <CrossfitJagun />
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-n-grey8
  py-[100px]
  lg:-z-10
  w-screen
  px-16
  flex
`);

const galleryStyle = ctl(`
  grid
  grid-cols-1
  place-items-center
  lg:justify-center
  md:grid-cols-3
  grid-flow-row
  lg:space-x-16
  lg:gap-0
  lg:flex
  mx-auto
  gap-16
`);

export { CheckoutSponsors };
