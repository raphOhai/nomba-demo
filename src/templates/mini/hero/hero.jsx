import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext, ReadMore } from "components";
import { StaticImage } from "gatsby-plugin-image";

import constants from "config/constants.json";
import { MaxButton } from "components/max-button";
import LogoMini from "jpegs/mini/logo.svg";
import Check from "svgs/yellow-check.svg";
const MiniHero = ({ title, benefits }) => {
  const { SIGNUP_URL } = constants;
  return (
    <section className={heroStyle}>
      <Container className="relative">
        <div className="md:min-h-[100vh]">
          <div className={heroTextWrapperStyle}>
            <div className="flex flex-row items-end gap-3 ">
              <div>
                <Ntext variant="prohero" className="!text-[84px]" color="n-light">
                  The
                </Ntext>
              </div>
              <div>
                <div className={badgeWrapper}>
                  <button className={badgeButtonStyle}>
                    <span>new </span>
                  </button>
                </div>
              </div>
            </div>
            <LogoMini className="max-w-[360px] md:max-w-none" />

            <div className={heroButtonsContainer}>
              <MaxButton text="Get your terminal" type="animate-button-reverse" link={SIGNUP_URL} />
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
            <div className="flex gap-4 mt-10 ">
              {Array.from({ length: Math.ceil(benefits.length / 2) }, (_, index) =>
                benefits.slice(index * 2, index * 2 + 2)
              ).map((arr, i) => (
                <div className="flex flex-col gap-4 mt-10">
                  {arr.map(b => (
                    <div key={b} className="flex basis-1/2 gap-[7px] items-center">
                      <div>
                        <Check />
                      </div>
                      <div>
                        <Ntext variant="p16" className="!leading-[24px] " color="m-light">
                          {b}
                        </Ntext>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute rotate-[120deg] top-[10rem] right-[6rem] hover:animate-pulseCustom">
            <StaticImage className="" height={355} alt="" src="../../../assets/images/svgs/terminal/sideways.png" />
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
md:mt-[100px]
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
mt-[50px]
`);

const badgeWrapper = ctl(`
flex
justify-center
mb-[20px]

`);

const badgeButtonStyle = ctl(`
c-0
rounded-[30px]
bg-secondary
flex flex-col justify-center items-center
px-[23px]
py-[10px]
hover:bg-secondary/80
disabled:bg-secondary
text-[27px]
font-[700]
leading-[33px]
tracking-[0.2rem]
`);
MiniHero.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
};

export { MiniHero };
