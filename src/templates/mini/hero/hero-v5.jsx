import React, { useContext, useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext, ReadMore, GetTerminal } from "components";

import HeroVid from "jpegs/mini/hero/heroVid.mp4";
import Check from "svgs/yellow-check.svg";
import { AppContext } from "states/context";
import { FloatingBanner } from "./floater1";

const MiniHeroV5 = ({ benefits }) => {
  const { addToCart } = useContext(AppContext);
  useEffect(() => {
    if (document.readyState === "complete") {
      document.querySelector(".rootLoader").style.display = "none";
    } else {
      window.addEventListener("load", () => {
        document.querySelector(".rootLoader").style.display = "none";
      });
    }
  });
  return (
    <section className={heroStyle}>
      <div className="rootLoader" id="rootLoader">
        <div class="loader-wrapper">
          <div class="loader"></div>
        </div>
      </div>
      <Container className="relative">
        <div className="md:min-h-[90vh]  min-h-[900px] flex md:flex-row flex-col">
          <div className={heroTextWrapperStyle}>
            <div className="flex flex-row">
              <div>
                <div className={badgeWrapper}>
                  <button className={badgeButtonStyle}>
                    <span>THE NOMBA MINI </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-row  ">
              <Ntext variant="prohero" color="n-light">
                Affordable and
              </Ntext>
            </div>
            <div className="flex flex-row ">
              <Ntext variant="prohero" color="b-1">
                Target-free POS
              </Ntext>
            </div>
            <div className="flex flex-row ">
              <Ntext variant="p18" className="pt-5 " color="m-grey1">
                Get the best value for your money and increase sales with wahala-free payment.
              </Ntext>
            </div>
            <div className="flex flex-row pt-5">
              <Ntext variant="text5" className="!leading-[24px]" color="m-light">
                <span className="font-[400]">Price:</span> ₦25,000 <del className="text-n-grey3">₦45,000</del>
              </Ntext>
            </div>
            <div className={heroButtonsContainer}>
              <GetTerminal onClick={() => addToCart(3)} text="Buy your POS" type="animate-button-reverse" />
            </div>
            <div className="flex gap-4  md:min-w-[575px] ">
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
          <FloatingBanner className="absolute right-0 z-40 md:bottom-60" />
          <div className=" hover:animate-pulseCustom">
            <video
              className={`absolute left-0 md:left-auto`}
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
mt-[30px]
`);

const badgeWrapper = ctl(`
flex
justify-center
md:mb-[20px]
border
border-n-grey6
rounded-[30px]
`);

const badgeButtonStyle = ctl(`



flex flex-col justify-center items-center
px-[20px]
py-[10px]
text-b-1
text-[14px]
font-[700]
leading-[33px]
tracking-[0.2rem]
`);

MiniHeroV5.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
  openSide: PropTypes.func,
};

export { MiniHeroV5 };
