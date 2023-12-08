import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { advantages } from "config/payment-checkout";
import { Ntext } from "components";

const CheckoutAdvantages = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  return (
    <section className={wrapperStyle}>
      <section className={contentStyle}>
        {
          advantages.map((advantage, index) => (
            <Ntext
              key={advantage}
              value={advantage}
              color={highlightedIndex === index ? "primary-100" : "n-silver"}
              className="!font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center"
              variant="h2"
            />
          ))
        }
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-checkout-advantages
  bg-[length:100%_100%]
  pb-[120px]
  w-screen
  pt-40
`);

const contentStyle = ctl(`
  flex
  flex-col
  items-center
  justify-center
  space-y-[200px]
  w-full
`);

export { CheckoutAdvantages };
