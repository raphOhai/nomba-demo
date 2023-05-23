import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext, Button } from "components";
import constants from "config/constants.json";
import { StaticImage } from "gatsby-plugin-image";

const InvoicepageHero = ({ title, description }) => {
  const { SIGNUP_URL } = constants;
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <div className={heroTextHeaders}>
            <Ntext variant="text9" color="primary-100" className="mb-[28px] opacity-0 text-center" data-animation="h">
              {title}
            </Ntext>

            <Ntext variant="text5lite" className={subTextStyle} color="n-grey1" data-animation="v">
              {description}
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <Button text="Get Started" href={{ url: SIGNUP_URL }} />
          </div>
        </div>
        <div className="flex flex-row justify-center items-baseline">
          <StaticImage
            src="../../../assets/images/jpegs/invoice/hero/desktop-1.png"
            alt="Testimonial Image"
            loading="lazy"
            width={837}
            height={381}
          />
          <StaticImage
            src="../../../assets/images/jpegs/invoice/hero/mobile.png"
            alt="Mobile Image"
            loading="lazy"
            style={{ marginLeft: "-20px" }}
            width={436}
            height={420}
          />
        </div>
      </Container>
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[90px]
bg-black
pt-[75px]
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-[692px]
lg:mx-auto
max-w-[100%]
lg:mb-[50px]
md:mx-2
`);

const heroTextHeaders = ctl(`
md:flex
md:flex-col
md:items-center
mb-[40px]
lg:mb-[50px]
`);

const subTextStyle = ctl(`
text-center
opacity-0
`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
md:justify-center
gap-[30px]
md:items-center
w-full items-stretch 
`);

InvoicepageHero.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
};

export { InvoicepageHero };
