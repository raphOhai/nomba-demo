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
const EmenuSection5 = ({ cards }) => {
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
          start: "top top",
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
      <section class=" bg-n-yellow1 relative section-five h-[120vh]">
        <Ntext
          variant="text9"
          color="c-0"
          className="section-five-title whitespace-nowrap flex flex-row overflow-x-visible flex-nowrap"
        >
          How it works
        </Ntext>
        <div className="relative max-w-[550px] mx-auto flex flex-col items-center justify-center mt-10">
          {cards.map((t, i) => (
            <div
              className={`flex flex-col gap-[50px] rounded-[10px] p-[30px] h-[438px] w-[438px] ${t.color} absolute top-0`}
            >
              <div className="rounded-full flex flex-col justify-center items-center font-semibold h-[71px] w-[71px] bg-c-0 text-[24px] text-white">
                {t.id}
              </div>
              <div className="flex flex-col gap-3">
                <Ntext variant="text6lite" color="c-0">
                  {t.title}
                </Ntext>
                <Ntext variant="p24" color="c-0" className="!leading-[36px] ">
                  {t.description}
                </Ntext>
              </div>
            </div>
          ))}
        </div>
        {/* </Container> */}
      </section>
    </div>
  );
};

export { EmenuSection5 };
