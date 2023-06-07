import React from "react";
import { Container, Ntext, SectionHeader, Button } from "components";
import constants from "config/constants.json";
import ctl from "@netlify/classnames-template-literals";
const GetStarted = ({ title }) => {
  const { SIGNUP_URL } = constants;
  return (
    <section className=" py-[100px] bg-primary-200">
      <Container>
        <SectionHeader className=" md:mx-auto header-text-every-businesses md:text-center">
          <Ntext variant="h2" className="text-center" color="c-0" data-animation="h">
            {title}
          </Ntext>
        </SectionHeader>
        <div className={heroButtonsContainer}>
          <Button
            className="!font-medium !text-[16px]"
            text="Get Started"
            href={{ url: SIGNUP_URL }}
            withArrow={true}
          />
        </div>
      </Container>
    </section>
  );
};
const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
md:justify-center
mb-10
md:items-center
w-full items-stretch 
`);
export { GetStarted };
