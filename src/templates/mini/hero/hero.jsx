import React, { useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext, ReadMore } from "components";
import constants from "config/constants.json";
import { GetTerminal } from "components";
import LogoMini from "jpegs/mini/logo.svg";
import HeroVid from "jpegs/mini/hero/heroVid.mp4";
import Check from "svgs/yellow-check.svg";
import { AppContext } from "states/context";

const MiniHero = ({ title, benefits }) => {
  const { SIGNUP_URL } = constants;
  const { addToCart } = useContext(AppContext);
  return (
    <section className={heroStyle}>
      <Container className="relative">
        <div className="md:min-h-[100vh] flex md:flex-row flex-col">
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
              <div onClick={() => addToCart(3)}>
                <GetTerminal text="Get your terminal" type="animate-button-reverse" />
              </div>

              {/* <GetTerminal text="Contact sales" type="animate-button" link="tel:+23401888899" /> */}
              <ReadMore
                color="primary-100"
                className="text-center"
                weight={500}
                defaultStyle={false}
                variant="text3"
                extraTrackText="Contact sales"
                href={{ url: "tel:+23401888899" }}
                text="Contact sales"
              />
            </div>
            <div className="flex gap-4 mt-10 md:min-w-[575px] ">
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
          <div className=" hover:animate-pulseCustom">
            <video
              className={`absolute `}
              loop
              autoPlay
              height={724}
              width={791}
              muted
              playsInline
              src={HeroVid}
            ></video>
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
overflow-x-hidden
bg-black
pt-[75px]
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-[692px]
md:mt-[50px]
max-w-[100%]
lg:mb-[80px]
sm:mb-[120px]
md:mx-2
mb-10
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
md:mb-[20px]
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
  openSide: PropTypes.func,
};

export { MiniHero };
