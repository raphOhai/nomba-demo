import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Br, Container, SolutionCard, Ntext, SectionHeader } from "components";
import { perfectPaymentSolution } from "config/small-business";
import SubFooterRight from "svgs/section-right.svg";
const PerfectSolutions = () => {
  return (
    <section className={gotOptionsWrapperStyle}>
      <Container>
        <SectionHeader className="!text-left">
          <Ntext variant="text7" color="primary-100">
            Perfect solution built for Mobile <Br />
            Money Agents
          </Ntext>
        </SectionHeader>

        <div className={optionsListStyle}>
          {perfectPaymentSolution.map((paymentOption, index) => (
            <SolutionCard {...paymentOption} key={`home_payment_option${index}`} />
          ))}
        </div>
        <SubFooterRight className={subFooterRightImage} />
      </Container>
    </section>
  );
};

const gotOptionsWrapperStyle = ctl(`
relative
bg-primary
pb-8
md:pb-16
`);

const optionsListStyle = ctl(`
grid
grid-cols-1
md:grid-cols-2

`);
const subFooterRightImage = ctl(`
  absolute 
  hidden
  md:block
  -right-5
  bottom-0
`);
export { PerfectSolutions };