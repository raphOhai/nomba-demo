import React, { useEffect, createRef } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button } from "components";
import constants from "config/constants.json";
import iPhoneWithHand from "jpegs/e-menu/iPhone-with-hand.png";
import heroVideo from "jpegs/e-menu/hero/hero.mp4";
import { StaticImage } from "gatsby-plugin-image";
import { IO } from "src/animations/observe";

gsap.registerPlugin([ScrollTrigger]);
const EmenuSection3 = () => {
  const { SIGNUP_URL } = constants;
  useEffect(() => {
    const dom = document.querySelector(".section-two-image");
    // const titleText = new SplitType(".section-two-title", { type: "chars" });
    // gsap.set("setion-two-image", {
    //   opacity: 0.5,
    //   yPercent: -100,
    // });
    // gsap.set(titleText.chars, {
    //   fontSize: window.innerWidth > 767 ? "18rem" : "5rem",
    //   opacity: 0,
    //   yPercent: window.innerWidth > 760 ? 200 : 30,
    //   lineHeight: window.innerWidth > 767 ? "6.5rem" : "5.3rem",
    // });
    // gsap.to(titleText.chars, {
    //   scrollTrigger: {
    //     trigger: ".section-two",
    //     start: "top top",
    //     end: "+=1000px",
    //     // scrub: true,
    //     pin: true,
    //   },
    //   yPercent: window.innerWidth > 760 ? 400 : 20,
    //   opacity: 1,
    //   stagger: 0.05,
    //   duration: 0.8,
    //   ease: "power4.out",
    // });
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
        // let text = document.querySelector(".section-two-title");
        // setTimeout(function () {
        //   const clonedText = text.cloneNode(true);
        //   clonedText.firstChild.childNodes.forEach(e => {
        //     text.firstChild.appendChild(e.cloneNode(true));
        //   });
        // }, 4000);
        // tl.to(".section-two-image", {
        //   autoAlpha: 1,
        //   yPercent: 0,
        //   stagger: 1,
        //   scaleY: 1,
        //   opacity: 1,
        //   duration: 0.5,
        //   skewX: 0,
        //   ease: "easeOut",
        // }).delay(3.5);
        // tl.to(text, { duration: 5, x: -text.offsetWidth, ease: "none", repeat: -1 });
      },
      { threshold: 1 }
    );
  });
  return (
    <section class=" bg-n-yellow1 relative section-two">
      {/* <Container className=""> */}
      <div className="flex md:flex-row flex-col justify-between">
        <Ntext variant="text9" color="c-0" className="">
          Everything you need to know
        </Ntext>

        <div class="relative ">
          <img src={iPhoneWithHand} width={618} height={746} />
        </div>
      </div>

      {/* </Container> */}
    </section>
  );
};
const heroButtonsContainer = ctl(`
absolute
md:top-[77%] top-[83%]
w-full
text-center
`);
export { EmenuSection3 };
