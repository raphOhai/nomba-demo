import React from "react";
import ctl from "@netlify/classnames-template-literals";
import {
  Br,
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
} from "components";
import { homePaymentOptions } from "config/options-section/home";

const HomepageGotOptions = () => {
  return (
    <section className={gotOptionsWrapperStyle}>
      <Container>
        <SectionHeader className="!pt-[50px]">
          <Ntext variant="h3" color="primary-100">
            You’ve got options. <Br />
            Receive payments on your terms
          </Ntext>
        </SectionHeader>

        <div className={optionsListStyle}>
          {homePaymentOptions.map((paymentOption, index) => (
            <IllustrationCard
              {...paymentOption}
              key={`home_payment_option${index}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

const gotOptionsWrapperStyle = ctl(`
bg-primary
pb-8
md:pb-16
`);

const optionsListStyle = ctl(`
flex
lg:flex-row
flex-col
md:justify-between
items-center
`);

export { HomepageGotOptions };
