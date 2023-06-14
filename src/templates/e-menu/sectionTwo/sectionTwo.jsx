import React, { useEffect, createRef } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button } from "components";
import constants from "config/constants.json";
import iPhone from "jpegs/e-menu/phone1.png";
import heroVideo from "jpegs/e-menu/hero/hero.mp4";
import { StaticImage } from "gatsby-plugin-image";
import { IO } from "src/animations/observe";

gsap.registerPlugin([ScrollTrigger]);
const EmenuSection2 = () => {
  const { SIGNUP_URL } = constants;
  useEffect(() => {
    const dom = document.querySelector(".section-two-image");
    const titleText = new SplitType(".section-two-title", { type: "chars" });
    gsap.set("setion-two-image", {
      opacity: 0,
    });
    gsap.set(titleText.chars, {
      fontSize: window.innerWidth > 767 ? "6rem" : "5rem",
      opacity: 0,
      yPercent: window.innerWidth > 760 ? 200 : 30,
      lineHeight: window.innerWidth > 767 ? "6.5rem" : "5.3rem",
    });
    gsap.to(titleText.chars, {
      scrollTrigger: {
        trigger: ".section-two",
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
    });
    IO(dom).then(
      () => {
        const tl = gsap.timeline();

        // tl.to(titleText.chars, {
        //   // fontSize: window.innerWidth > 767 ? "4rem " : "3rem",
        //   // y: "0",
        //   // lineHeight: window.innerWidth > 767 ? "5.25rem" : "3.3rem",
        //   duration: 1,
        //   ease: "easeOut",
        // });
        tl.to(".section-two-image", {
          autoAlpha: 1,
          yPercent: 0,
          stagger: 1,
          scaleY: 1,
          opacity: 1,
          duration: 0.5,
          skewX: 0,
          ease: "easeOut",
        });
      },
      { threshold: 1 }
    );
  });
  return (
    <section class=" bg-n-yellow1 relative section-two">
      <Container className="">
        <Ntext variant="text9" color="c-0" className=" text-center section-two-title">
          Everything you need
        </Ntext>
        <div class="relative py-[200px] md:py-24 md:px-0 px-[50px] min-h-[100vh] flex flex-col justify-center items-center section-two-image opacity-0">
          <img src={iPhone} width={347} height={682} />
        </div>
      </Container>
    </section>
  );
};
const heroButtonsContainer = ctl(`
absolute
md:top-[77%] top-[83%]
w-full
text-center
`);
export { EmenuSection2 };
