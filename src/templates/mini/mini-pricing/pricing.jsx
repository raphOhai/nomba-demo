import React, { useLayoutEffect, useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext, ReadMore } from "components";
import constants from "config/constants.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { MaxButton } from "components/max-button";
import Bullet from "jpegs/terminal/max/svgs/bullet.svg";
import { AppContext } from "states/context";
import Check from "svgs/yellow-check.svg";
import { miniFeaturesBreakdown } from "config/mini";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);
const MiniPricing = ({ title, price, leasePrice }) => {
  const { SIGNUP_URL } = constants;
  const { onOpen } = useContext(AppContext);
  useLayoutEffect(() => {
    const sections = gsap.utils.toArray(".max_feature1");

    gsap.set(sections, {
      opacity: 0,
      xPercent: 10,
      yPercent: 10,
    });
    gsap.to(sections, {
      scrollTrigger: {
        trigger: ".max_features1",
        start: "top 100%",
        scrub: true,
        toggleActions: "play restart play reverse",
        end: "+=700",
      },
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      stagger: 1.5,
      duration: 2,
      ease: "easeOut",
    });
  });

  return (
    <section className="mt-[100px] md:mt-[150px]  min-h-[100vh]" id="pricing">
      <div>
        <Container>
          <div className="md:max-w-[671px] md:mx-auto  md:text-center  md:mb-[80px]">
            <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
              {title}
            </Ntext>
          </div>
          <div className={wrapper}>
            {/* <div className={childWrapper1}>
              <Mini />
            </div> */}

            <div className={childWrapper2}>
              <div className={badgeWrapper}>
                <button className={badgeButtonStyle}>
                  <span>Outright Purchase</span>
                </button>
              </div>
              <div>
                <Ntext variant="pricingMain" color="primary-100" data-animation="v">
                  {price}
                </Ntext>
              </div>

              <div className="my-10 flex items-center flex-col gap-7 max_features1">
                <div className="flex flex-row gap-5 items-center max_feature1">
                  <Bullet />{" "}
                  <Ntext variant="text3" className="!leading-[24px]" color="m-light">
                    Enjoy lower transaction fee at 0.42% <del className="text-n-grey3">0.5%</del> capped at N80
                  </Ntext>
                </div>
                <div className="flex flex-row gap-5 items-center max_feature1">
                  <Bullet />{" "}
                  <Ntext variant="text3" className="!leading-[24px]" color="m-light">
                    ₦0 charge on your first 100 transactions
                  </Ntext>
                </div>
              </div>
              <div className="flex md:flex-row flex-col justify-center gap-8 items-stretch md:items-center">
                <div onClick={onOpen}>
                  <MaxButton text="Buy now" type="animate-button-reverse" />
                </div>
                <ReadMore
                  color="primary-100"
                  weight={500}
                  className="text-center "
                  defaultStyle={false}
                  variant="text3"
                  href={{ url: "tel:+23401888899" }}
                  text="Contact sales"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-center mt-20">
            {miniFeaturesBreakdown.map(f => (
              <div key={f} className="flex-col flex w-[275px] items-center md:mx-16 mt-16">
                <div>
                  <Check />
                </div>
                <div className="text-center mt-[10px]">
                  <Ntext variant="text3" className="!leading-[24px] " color="m-light">
                    {f}
                  </Ntext>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
};

const wrapper = ctl(`
flex
flex-col
pb-10
items-center
justify-center
gap-5
px-5
rounded-[6px]
`);

const childWrapper2 = ctl(`
flex flex-col items-center justify-center mt-[5rem] md:mt-5
`);

const badgeWrapper = ctl(`
gap-4
flex
flex-row
my-[20px]
`);

const badgeButtonStyle = ctl(`
c-0
rounded-[30px]
bg-secondary
md:px-[20px]
px-[16px]
py-[4px]
transition-all
ease-linear
cursor-default
text-[14px]
font-[500]
delay-200
leading-[22px]
`);
export { MiniPricing };
