import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Ntext } from "components";

import { advantages } from "config/checkout";

import RibbonsBackground from "svgs/checkout/advantages-ribbons.svg";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const CheckoutAdvantages = () => {
  useEffect(() => {
    gsap.utils.toArray(".advantage-text").forEach(text => {
      ScrollTrigger.create({
        start: "top center",
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
    <section id="advantages" className={wrapperStyle}>
      <RibbonsBackground className="absolute w-screen top-0" />
      <section className={contentStyle}>
        {
          advantages.map(advantage => (
            <Ntext
              color="n-silver"
              value={advantage}
              className="advantage-text !font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center"
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
  h-[1656px]
  w-screen
  relative
`);

const contentStyle = ctl(`
  flex
  flex-col
  pb-[120px]
  items-center
  space-y-[200px]
  justify-center
  absolute
  w-screen
  top-0
  pt-40
  px-8
`);

export { CheckoutAdvantages };
