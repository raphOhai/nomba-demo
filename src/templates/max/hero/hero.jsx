import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext, ReadMore } from "components";
import constants from "config/constants.json";
// import ArrowLeft from "svgs/arrow-left.svg";

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
            <a href={SIGNUP_URL}>
              <button className="animate-button-reverse">
                Get your terminal
                <svg
                  className="btn_svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M8.5 12H14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12.5 9L15.5 12L12.5 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </a>
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
