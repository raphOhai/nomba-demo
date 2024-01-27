import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, Ntext } from "components";
import { integrateSection } from "config/checkout";

import checkoutCodeSnippet from "jpegs/checkout/checkout-code-snippet.png";
import Blur from "svgs/checkout/integrate-blur.svg";

const { title, description } = integrateSection;

const IntegratePay = () => {
  return (
    <section className={wrapperStyle}>
      <section className="bg-white py-[90px]">
        <Container className={sectionStyle}>
          <section className="max-w-[562px] z-10">
            <Ntext
              value={title}
              color="n-smoky"
              className="!font-medium md:!text-[56px] md:!leading-[64px] !-tracking-[2px]"
              variant="h2"
            />
            <Ntext
              color="n-smoky"
              value={description}
              className="md:!leading-[32px] !-tracking-[0.8px] mt-6"
              variant="text4lite"
            />
            <Button
              href={{ url: "https://nombahq.notion.site/nombahq/Nomba-Checkout-API-Documentation-f2dd9979f4d3453886d403f6fee269ae#2bcf6c5d13a84676bf168cdee703cb03" }}
              className="!font-medium round !text-base !text-n-smoky !min-w-[324px] mt-10 !h-14"
              text="Go to Checkout Documentation"
            />
          </section>
          <aside className={asideStyle}>
            <img
              src={checkoutCodeSnippet}
              alt="cURL Request Sample"
              className="rounded-xl max-h-[388px]"
            />
          </aside>
        </Container>
      </section>
      <Blur className={blurStyle} />
    </section>
  );
};

const sectionStyle = ctl(`
  flex
  flex-col
  space-y-10
  lg:flex-row
  lg:space-y-0
  lg:justify-between
  lg:text-start
  items-center
  text-center
`);

const wrapperStyle = ctl(`
  overflow-clip
  bg-n-smoky
  pb-[192px]
  w-screen
  relative
`);

const asideStyle = ctl(`
  lg:rounded-[32px]
  bg-opacity-80
  max-h-[500px]
  lg:px-[75px]
  bg-[#F2F2F2]
  lg:scale-90
  rounded-3xl
  lg:py-14
  p-10
`);

const blurStyle = ctl(`
  absolute
  -bottom-[512px]
  lg:-bottom-[192px]
  w-[84vw]
  right-0
  left-0
`);

export { IntegratePay };
