import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ntext } from "components";

import { advantages } from "config/checkout";

import RibbonsBackgroundMobile from "svgs/checkout/advantages-ribbons-mobile.svg";
import RibbonsBackground from "svgs/checkout/advantages-ribbons.svg";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const CheckoutAdvantages = () => {
  useEffect(() => {
    gsap.utils.toArray(".advantage-text").forEach(text => {
      ScrollTrigger.create({
        start: "bottom center",
        toggleClass: "!text-white",
        trigger: text,
      });

      gsap.timeline({
        scrollTrigger: {
          end: "bottom 160px",
          start: "top 160px",
          trigger: text,
          scrub: 1,
        },
      }).to(text, { opacity: 0 });
    });
  }, []);

  return (
    <section className={wrapperStyle}>
      <RibbonsBackgroundMobile className="md:hidden absolute w-screen" />
      <RibbonsBackground className="hidden md:block absolute w-screen" />
      <section className={contentStyle}>
        {
          advantages.map(advantage => (
            <Ntext
              key={advantage}
              color="n-silver"
              value={advantage}
              className="advantage-text !font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center transition-colors duration-1000"
              variant="h2"
            />
          ))
        }
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-n-grey8
  md:h-[1656px]
  h-[1120px]
  w-screen
  relative
`);

const contentStyle = ctl(`
  flex
  flex-col
  py-[120px]
  items-center
  md:space-y-[200px]
  space-y-[120px]
  justify-center
  md:pt-40
  absolute
  w-screen
  top-0
  px-8
`);

export { CheckoutAdvantages };
