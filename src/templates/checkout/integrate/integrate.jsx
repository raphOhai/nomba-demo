import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { integrateSection } from "config/checkout";
import { Button, Ntext } from "components";

const { title, description } = integrateSection;

const IntegratePay = () => {
  return (
    <section className={wrapperStyle}>
      <section className={containerStyle}>
        <Ntext
          value={title}
          color="primary-100"
          className="!font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px]"
          variant="h2"
        />
        <Ntext
          color="primary-600"
          value={description}
          className="md:!leading-[32px] !-tracking-[0.6px] mt-8"
          variant="text4lite">
          {description}
        </Ntext>
        <Button
          href={{ url: "https://nombahq.notion.site/nombahq/Nomba-Checkout-API-Documentation-f2dd9979f4d3453886d403f6fee269ae#2bcf6c5d13a84676bf168cdee703cb03" }}
          className="!font-medium !text-base !text-n-smoky !min-w-[324px] mt-10 !h-14"
          text="Go to Checkout Documentation"
        />
      </section>
    </section>
  );
};

const containerStyle = ctl(`
  max-w-[840px]
  text-center
  mx-auto
  py-28
  px-8
`);

const wrapperStyle = ctl(`
  flex
  bg-n-smoky
  border-solid
  border-t-n-grey8
  border-t-2
  w-screen
`);

export { IntegratePay };
