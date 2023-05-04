import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Button, Container, Ntext, ReadMore } from "components";
import constants from "config/constants.json";
import ArrowLeft from "svgs/arrow-left.svg";

const MaxpageHero = ({ title, description }) => {
  const { SIGNUP_URL } = constants;
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <div className={heroTextHeaders}>
            <Ntext variant="text9" color="primary-100" className="mb-[28px]" data-animation="h">
              {title}
            </Ntext>

            <Ntext variant="text5lite" className={subTextStyle} color="n-grey1" data-animation="v">
              {description}
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <Button href={{ url: SIGNUP_URL }} size="custom" isflex={true}>
              <span>Get your terminal</span>
              <ArrowLeft />
            </Button>
            <ReadMore
              color="primary-100"
              weight={500}
              defaultStyle={false}
              variant="text3"
              href={{ url: "tel:+23401888899" }}
              text="Contact sales"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[146px]
md:pb-[50px]
bg-black
pt-[75px]
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-[692px]
lg:mx-auto
max-w-[100%]
lg:mb-[80px]
sm:mb-[120px]
md:mx-2
mb-10
`);

const heroTextHeaders = ctl(`
md:flex
md:flex-col
md:items-start
mb-[40px]
lg:mb-[50px]
`);

const subTextStyle = ctl(`


`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
items-center
`);

MaxpageHero.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
};

export { MaxpageHero };
