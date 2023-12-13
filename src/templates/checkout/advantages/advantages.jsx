import React, { useEffect, useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { advantages } from "config/checkout";
import { Ntext } from "components";

gsap.registerPlugin(ScrollTrigger);

const CheckoutAdvantages = () => {
  const [firstIndex, setFirstIndex] = useState(0);
  const [secondIndex, setSecondIndex] = useState(1);

  useEffect(() => {
    const advantageText = document.querySelectorAll(".advantage-text");

    gsap.timeline({
      scrollTrigger: {
        trigger: "#advantages",
        start: "top top",
        end: "+=100%",
        pin: true,
        scrub: 1,
      },
    })
      .to(advantageText, {
        onComplete: () => {
          setSecondIndex(2);
          setFirstIndex(1);
        },
        opacity: 0,
      })
      .to(advantageText, {
        onReverseComplete: () => {
          setSecondIndex(1);
          setFirstIndex(0);
        },
        opacity: 1,
      })
      .to(advantageText, {
        onComplete: () => {
          setSecondIndex(3);
          setFirstIndex(2);
        },
        opacity: 0,
      })
      .to(advantageText, {
        onReverseComplete: () => {
          setSecondIndex(2);
          setFirstIndex(1);
        },
        opacity: 1,
      })
      .to(advantageText, {
        onComplete: () => {
          setSecondIndex(4);
          setFirstIndex(3);
        },
        opacity: 0,
      })
      .to(advantageText, {
        onReverseComplete: () => {
          setSecondIndex(3);
          setFirstIndex(2);
        },
        opacity: 1,
      });
  }, []);

  return (
    <section id="advantages" className={wrapperStyle}>
      <section className={contentStyle}>
        <Ntext
          color="primary-100"
          value={advantages[firstIndex]}
          className="advantage-text !font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center"
          variant="h2"
        />
        <Ntext
          color="n-silver"
          value={advantages[secondIndex]}
          className="advantage-text !font-normal md:!text-[56px] md:!leading-[64px] !-tracking-[2px] max-w-[800px] text-center"
          variant="h2"
        />
      </section>
    </section>
  );
};

const wrapperStyle = ctl(`
  bg-checkout-advantages
  bg-[length:100%_100%]
  w-screen
  h-screen
`);

const contentStyle = ctl(`
  flex
  flex-col
  items-center
  justify-center
  space-y-[200px]
  w-full
  h-full
`);

export { CheckoutAdvantages };
