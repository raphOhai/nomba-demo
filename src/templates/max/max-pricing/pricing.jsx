import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext, ReadMore } from "components";
import constants from "config/constants.json";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import { MaxButton } from "components/max-button";
import Bullet from "jpegs/terminal/max/svgs/bullet.svg";
import { maxFeaturesBreakdown } from "config/terminal";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);
const MaxPricing = ({ title, price }) => {
  const { SIGNUP_URL } = constants;
  useEffect(() => {
    gsap.to(".section_header3", {
      scrollTrigger: {
        trigger: ".section_header3",
        start: "top 15%",
        scrub: true,
        toggleActions: "play reverse restart reverse",
        end: "=+400px",
      },
      opacity: 0.04,
      autoAlpha: 0,
      yPercent: -30,
      // fontSize: fontSize,
      xPercent: 0,
      duration: 0.4,
      ease: "easeIn",
    });
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
    <section className="mt-[150px] md:mt-[200px]" id="pricing">
      <div>
        <Container>
          <div className="md:max-w-[671px] md:mx-auto section_header3 md:text-center mb-[30px] md:mb-[80px]">
            <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
              {title}
            </Ntext>
          </div>
        </Container>
      </div>
      <div className="md:bg-primary rounded-[6px]">
        <Container className="">
          <div className={wrapper}>
            <div className={childWrapper1}>
              <StaticImage
                className="max-w-[287px] md:max-w-[383px]"
                width={383}
                height={816}
                src="../../../assets/images/jpegs/terminal/max/pricing.png"
                alt="Pricing Max"
              />
            </div>

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
              <div className="my-10 flex flex-col gap-7 max_features1">
                {maxFeaturesBreakdown.map(f => (
                  <div className="flex flex-row gap-5 items-center max_feature1">
                    <Bullet />{" "}
                    <Ntext variant="text3" className="!leading-[24px]" color="m-light">
                      {f}
                    </Ntext>
                  </div>
                ))}
              </div>
              <div className="flex md:flex-row flex-col w-full  gap-8 items-stretch md:items-center">
                <MaxButton text="Get your terminal" type="animate-button-reverse" link={SIGNUP_URL} />
                <ReadMore
                  color="primary-100"
                  weight={500}
                  className="text-center"
                  defaultStyle={false}
                  variant="text3"
                  href={{ url: "tel:+23401888899" }}
                  text="Contact sales"
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

const wrapper = ctl(`
md:flex
md:flex-row
py-10
md:items-center
gap-5
bg-primary
px-5
rounded-[6px]
md:basis-1/2
`);
const childWrapper1 = ctl(`
md:basis-1/2
flex justify-center
md:justify-start
`);
const childWrapper2 = ctl(`
md:basis-1/2
flex
flex-col
items-start
`);

const badgeWrapper = ctl(`

mb-[20px]

`);

const badgeButtonStyle = ctl(`
c-0
rounded-[30px]
bg-secondary
px-[20px]
py-[4px]
cursor-default
text-[14px]
font-[500]
leading-[22px]
`);

export { MaxPricing };
