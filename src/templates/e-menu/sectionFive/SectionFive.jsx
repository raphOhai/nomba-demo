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
    const cardTile = gsap.utils.toArray(".section-five-card");
    const titleText = new SplitType(".section-five-title", { type: "chars" });
    const height = cardTile[0].offsetHeight;

    gsap.set(cardTile, { position: "absolute", yPercent: 200 });

    cardTile.forEach((card, i) => {
      gsap.set(card, {
        rotate: -i * 5,
      });
    });
    gsap.set(titleText.chars, {
      fontSize: "18rem",
      opacity: 0,
      yPercent: 200,
      lineHeight: "6.5rem",
    });

    IO(dom).then(
      () => {
        // gsap.to(cardTile, { yPercent: 10 });
        let text = document.querySelector(".section-five-title");
        tl.to(titleText.chars, {
          yPercent: window.innerWidth > 760 ? 400 : 20,
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
        });
        setTimeout(function () {
          const clonedText = text.cloneNode(true);
          clonedText.firstChild.childNodes.forEach(e => {
            text.firstChild.appendChild(e.cloneNode(true));
          });
        }, 1000);
        // cardTile.forEach((card, i) => {
        //   tl.to(card, {
        //     scrollTrigger: {
        //       trigger: card,
        //       start: "top center",
        //       scrub: true,
        //       end: "+=4000px",
        //     },
        //     rotate: 30,
        //     stagger: 50,
        //     // duration: 1,
        //     yPercent: -100,
        //     // delay: 1,
        //     opacity: 0,
        //     ease: "easeOut",
        //   });
        // });
        // cardTile.forEach((card, i) => {
        tl.to(cardTile, {
          yPercent: 10,
        });
        tl.to(cardTile.reverse(), {
          yPercent: -100,
          stagger: 0.5,
          rotate: 30,
          opacity: 0,
          scrollTrigger: {
            pin: ".section-five",
            scrub: true,
            start: "top -10%",
            end: "+=3000",
            invalidateOnRefresh: true,
          },
        });

        tl.to(text, { duration: 10, x: -text.offsetWidth, ease: "none", repeat: -1 });
      },
      { threshold: 1 }
    );
  });
  return (
    <div>
      <section class=" bg-n-light relative ">
        <div className="min-h-[120vh] section-five ">
          <Ntext
            variant="text9"
            color="c-0"
            className="section-five-title whitespace-nowrap flex flex-row overflow-x-visible flex-nowrap"
          >
            How <span> &nbsp; </span>
            <span> &nbsp; </span> it <span> &nbsp; </span>
            <span> &nbsp; </span> works <span> &nbsp; </span>
            <span> &nbsp; </span> • <span> &nbsp; </span> <span> &nbsp; </span>
          </Ntext>
          <div className="relative max-w-[550px] mx-auto flex flex-col items-center justify-center mt-10">
            {cards.map((t, i) => (
              <div
                className={`flex flex-col gap-[50px] rounded-[10px] p-[30px] h-[438px] w-[438px] ${t.color} top-0 section-five-card`}
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
        </div>
        {/* </Container> */}
      </section>
    </div>
  );
};

export { EmenuSection5 };
