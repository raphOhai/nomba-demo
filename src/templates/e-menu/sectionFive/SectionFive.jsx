import React, { useEffect, createRef } from "react";
import ctl from "@netlify/classnames-template-literals";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button } from "components";
import constants from "config/constants.json";
import { StaticImage } from "gatsby-plugin-image";
import { IO } from "src/animations/observe";

gsap.registerPlugin([ScrollTrigger]);
const EmenuSection5 = () => {
  const { SIGNUP_URL } = constants;
  useEffect(() => {
    const tl = gsap.timeline();
    const dom = document.querySelector(".section-five");
    const titleText = new SplitType(".section-five-title", { type: "chars" });

    gsap.set(titleText.chars, {
      fontSize: "18rem",
      opacity: 0,
      yPercent: 200,
      lineHeight: "6.5rem",
    });
    gsap
      .to(titleText.chars, {
        scrollTrigger: {
          trigger: ".section-five",
          start: "top -15%",
          end: "+=1000px",
          // scrub: true,
          pin: true,
        },
        yPercent: window.innerWidth > 760 ? 400 : 20,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out",
      })
      .then(() => {});
    IO(dom).then(
      () => {
        // tl.to(titleText.chars, {
        //   // fontSize: window.innerWidth > 767 ? "4rem " : "3rem",
        //   // y: "0",
        //   // lineHeight: window.innerWidth > 767 ? "5.25rem" : "3.3rem",
        //   duration: 1,
        //   ease: "easeOut",
        // });
        let text = document.querySelector(".section-five-title");
        setTimeout(function () {
          const clonedText = text.cloneNode(true);
          clonedText.firstChild.childNodes.forEach(e => {
            text.firstChild.appendChild(e.cloneNode(true));
          });
        }, 4000);
        tl.to(".section-five-image", {
          autoAlpha: 1,
          yPercent: 0,
          xPercent: 0,
          stagger: 1,
          scaleY: 1,
          opacity: 1,
          duration: 0.5,
          skewX: 0,
          ease: "easeOut",
        }).delay(2.5);
        tl.to(text, { duration: 5, x: -text.offsetWidth, ease: "none", repeat: -1 });
      },
      { threshold: 1 }
    );
  });
  return (
    <div>
      <section class=" bg-n-yellow1 relative section-five">
        <Ntext
          variant="text9"
          color="c-0"
          className="section-five-title whitespace-nowrap flex flex-row overflow-x-visible flex-nowrap"
        >
          Everything you need to know
        </Ntext>

        {/* </Container> */}
      </section>
    </div>
  );
};

export { EmenuSection5 };
