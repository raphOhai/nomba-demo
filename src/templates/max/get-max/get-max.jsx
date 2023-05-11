import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext } from "components";
import constants from "config/constants.json";
import { MaxButton } from "components/max-button";

const GetMax = ({ title, description }) => {
  const { SIGNUP_URL } = constants;

  return (
    <section className="pb-[100px]">
      <Container>
        <div className={heroTextHeaders}>
          <div className="flex flex-col gap-4">
            <Ntext variant="text8" color="primary-100" className="md:basis-3/5 " data-animation="h">
              {title}
            </Ntext>
            <div className="max-w-[503.85px]">
              <Ntext variant="text3" color="n-grey1" data-animation="h">
                {description}
              </Ntext>
            </div>
          </div>

          <div className={subTextStyle}>
            <div className="btn">
              <MaxButton text="Get your terminal" type="animate-button-reverse" link={SIGNUP_URL} />
            </div>
            <div className="btn">
              <MaxButton text="Contact sales" type="animate-button" link="tel:+23401888899" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

const heroTextHeaders = ctl(`
md:flex
md:flex-row
md:items-start
justify-between
mb-10
gap-5
`);

const subTextStyle = ctl(`
mb-8
mt-6
md:mt-3
md:basis-2/5
flex 
md:flex-row
flex-col
items-stretch
gap-3
overflow-hidden
`);

export { GetMax };