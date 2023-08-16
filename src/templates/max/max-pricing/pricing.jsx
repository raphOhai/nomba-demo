import React, { useEffect, useState, useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext, ReadMore, GetTerminal } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
import Bullet from "jpegs/terminal/max/svgs/bullet.svg";
import { maxFeaturesBreakdown } from "config/terminal";
import { AppContext } from "states/context";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);
const MaxPricing = ({ title, price, leasePrice }) => {
  const { addToCart } = useContext(AppContext);
  const [isPurchase, setIsPurchase] = useState(true);

  const changePrice = item => {
    gsap.set(item, {
      autoAlpha: 0,
      opacity: 0,
      xPercent: isPurchase ? -50 : 50,
      transformStyle: "preserve-3d",
    });
    gsap.to(item, {
      autoAlpha: 1,
      xPercent: 0,
      duration: 0.5,
      ease: "easeOut",
    });
  };
  const setPurchase = (p, d) => {
    setIsPurchase(p);
    changePrice(d);
  };
  useEffect(() => {
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
    <section className="mt-[100px] md:mt-[150px]" id="pricing">
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
                <button
                  className={isPurchase ? badgeButtonStyle : leaseBadgeButtonStyle}
                  onClick={() => setPurchase(true, ".purchase")}
                >
                  <span>Outright Purchase</span>
                </button>
                <button
                  className={!isPurchase ? badgeButtonStyle : leaseBadgeButtonStyle}
                  onClick={() => setPurchase(false, ".lease")}
                >
                  <span>For Lease</span>
                </button>
              </div>
              <div className={`${!isPurchase ? "hidden" : ""} purchase`}>
                <Ntext variant="pricingMain" color="primary-100" data-animation="v">
                  {price}
                </Ntext>
              </div>
              <div className={`${!isPurchase ? "" : "hidden "} lease`}>
                <Ntext variant="pricingMain" color="primary-100">
                  {leasePrice}
                </Ntext>
              </div>
              <div className="my-10 flex flex-col gap-7 max_features1">
                {maxFeaturesBreakdown.map((f, i) => (
                  <div className="flex flex-row gap-5 items-center max_feature1" key={i + 7}>
                    <Bullet />{" "}
                    <Ntext variant="text3" className="!leading-[24px]" color="m-light">
                      {f}
                    </Ntext>
                  </div>
                ))}
              </div>
              <div className="flex md:flex-row flex-col w-full  gap-8 items-stretch md:items-center">
                {/* <MaxButton text="Contact sales" type="animate-button" link="tel:+23401888899" /> */}

                <GetTerminal onClick={() => addToCart(0)} text="Get your POS" type="animate-button-reverse" />

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
const leaseBadgeButtonStyle = ctl(`
transition-all
ease-linear
delay-200
text-n-grey2
rounded-[10px]
bg-n-grey6
md:px-[30px]
px-[24px]
py-[3px]
cursor-pointer
text-[14px]
font-[500]
leading-[22px]
`);
export { MaxPricing };
