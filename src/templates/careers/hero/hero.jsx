import React, { useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext, ReadMore, GetTerminal } from "components";
import { AppContext } from "states/context";

const CareersPageHero = ({ title, description }) => {
  const { addToCart } = useContext(AppContext);
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <div className={heroTextHeaders}>
            <Ntext variant="text9" color="primary-100" className="mb-[28px] opacity-0" data-animation="h">
              {title}
            </Ntext>

            <Ntext variant="text5lite" className={subTextStyle} color="n-grey1" data-animation="v">
              {description}
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <GetTerminal onClick={() => addToCart(0)} text="Get your POS" type="animate-button-reverse" />

            {/* <MaxButton text="Contact sales" type="animate-button" link="tel:+23401888899" /> */}
            <ReadMore
              color="primary-100"
              className="text-center"
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
md:pt-[90px]
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

opacity-0
`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
md:items-center
w-full items-stretch 
`);

CareersPageHero.propTypes = {
  description: PropTypes.string,
  title: PropTypes.node,
};

export { CareersPageHero };
