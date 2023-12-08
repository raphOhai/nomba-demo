import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ctl from "@netlify/classnames-template-literals";

import { advantages } from "config/checkout";
import { Ntext } from "components";

gsap.registerPlugin(ScrollTrigger);

const CheckoutAdvantages = () => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        end: "bottom center",
        trigger: wrapperRef.current,
        start: "top center",
        scrub: 1,
      },
    });

    advantages.forEach((_, index) => {
      timeline.fromTo(
        `.advantage-${index}`,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 1 },
        index * 2
      );
    });
  }, []);

  return (
    <section className={wrapperStyle} ref={wrapperRef}>
      <section className={contentStyle}>
        {advantages.map((advantage, index) => (
          <Ntext
            key={advantage}
            color="n-silver"
            value={advantage}
            className={`advantage-${index} !font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center`}
            variant="h2"
          />
        ))}
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-checkout-advantages
  bg-[length:100%_100%]
  overflow-hidden
  pb-[120px]
  w-screen
  pt-40
`);

const contentStyle = ctl(`
  flex
  flex-col
  items-center
  space-y-[200px]
  justify-center
  relative
  w-full
`);

export { CheckoutAdvantages };
