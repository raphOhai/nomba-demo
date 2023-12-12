import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { advantages } from "config/checkout";
import { Ntext } from "components";

const CheckoutAdvantages = () => {
  return (
    <section className={wrapperStyle}>
      <section className={contentStyle}>
        <Ntext
          color="primary-100"
          value={advantages[0]}
          className="!font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center"
          variant="h2"
        />
        <Ntext
          color="n-silver"
          value={advantages[1]}
          className="!font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center"
          variant="h2"
        />
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-checkout-advantages
  bg-[length:100%_100%]
  w-screen
  h-screen
`);

const contentStyle = ctl(`
  flex
  flex-col
  items-center
  justify-center
  space-y-[200px]
  w-full
  h-full
`);

export { CheckoutAdvantages };
