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

    gsap.set(cardTile, { position: "absolute" });

    cardTile.forEach((card, i) => {
      gsap.set(card, {
        rotate: -i * 5,
      });
    });
    gsap.set(titleText.chars, {
      fontSize: window.innerWidth < 760 ? "6.25rem" : "18rem",
      opacity: 0,
      yPercent: window.innerWidth < 760 ? 100 : 200,
      lineHeight: window.innerWidth < 760 ? "7.5rem" : "6.5rem",
    });

    IO(dom).then(
      () => {
        // gsap.to(cardTile, { yPercent: 10 });
        let text = document.querySelector(".section-five-title");
        tl.to(titleText.chars, {
          yPercent: window.innerWidth > 760 ? 400 : 210,
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
        // tl.to(cardTile, {
        //   yPercent: 10,
        // });
        tl.to(cardTile.reverse(), {
          yPercent: -100,
          stagger: 0.5,
          rotate: 30,
          opacity: 0,
          scrollTrigger: {
            pin: ".section-five",
            scrub: true,
            start: window.innerWidth > 760 ? "top 5%" : "top 10%",
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
        <div className="min-h-[120vh] section-five overflow-hidden">
          <Ntext variant="text9" color="c-0" className="section-five-title whitespace-nowrap flex flex-row flex-nowrap">
            How <span> &nbsp; </span>
            <span> &nbsp; </span> it <span> &nbsp; </span>
            <span> &nbsp; </span> works <span> &nbsp; </span>
            <span> &nbsp; </span> • <span> &nbsp; </span> <span> &nbsp; </span>
          </Ntext>
          <div className="relative max-w-[550px] mx-auto flex flex-col items-center justify-center mt-10">
            {cards.reverse().map((t, i) => (
              <div
                key={i}
                className={`flex flex-col md:gap-[50px] gap-[30px] rounded-[10px] p-[20px] md:p-[30px] h-[360px] md:h-[438px] w-[360px] md:w-[438px] ${t.color} top-0 section-five-card`}
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
          <div className={buttonContainer}>
            <Button
              className="!font-medium !text-[16px] !min-w-[100px] !w-[200px] !text-center"
              text="Get Started now"
              href={{ url: SIGNUP_URL }}
              withArrow={true}
            />
          </div>
        </div>
        {/* </Container> */}
      </section>
    </div>
  );
};
const buttonContainer = ctl(`
flex
flex-col
text-center
md:flex-row
justify-center
absolute
bottom-[18rem]
items-center
w-full 

`);
export { EmenuSection5 };
