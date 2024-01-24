import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { acceptPaymentSection } from "config/checkout";
import { Container, Button, Ntext } from "components";

import plugInShopify from "gifs/plug-in-shopify.gif";

const { title, description } = acceptPaymentSection;

const AcceptPayment = () => {
  return (
    <section className={wrapperStyle}>
      <Container className={sectionStyle}>
        <img
          src={plugInShopify}
          alt="Plug in other stores"
          className="rounded-3xl lg:rounded-[32px] max-h-[480px]"
        />
        <section className="flex flex-col items-center lg:items-start max-w-[555px]">
          <Ntext
            value={title}
            color="primary-100"
            className="!font-medium md:!leading-[56px] !-tracking-[2px] text-center lg:text-start w-full"
            variant="h2"
          />
          <Ntext
            color="n-silver"
            value={description}
            className="md:!leading-[32px] text-center lg:text-start max-w-[500px] mt-6"
            variant="text3"
          />
          <Button
            className="!font-medium !text-base !min-w-[198px] mt-10 !h-14"
            href={{ url: "https://dashboard.nomba.com/auth/login" }}
            text="Coming Soon"
          />
        </section>
      </Container>
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
