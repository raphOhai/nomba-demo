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
  w-screen
  px-16
`);

const galleryStyle = ctl(`
  grid
  grid-cols-1
  place-items-center
  md:grid-cols-3
  lg:grid-cols-5
  grid-flow-row
  gap-16
`);

export { CheckoutSponsors };
