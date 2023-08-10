import React, { useLayoutEffect, useEffect, createRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Ntext } from "components";
import Lottie from "lottie-web";
import animation from "./animations/section22.json";
import { StaticImage } from "gatsby-plugin-image";
import { IO } from "src/animations/observe";
import { Button } from "../button";

gsap.registerPlugin([ScrollTrigger]);
const EmenuSection2 = () => {
  let animationContainer = createRef();
  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animation,
    });
    // Return clean up function here
    return () => instance.destroy();
  }, [animationContainer]);
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    const dom = document.querySelector(".section-two");
    const titleText = new SplitType(".section-two-title", { type: "chars" });
    gsap.set(".section-two-image", {
      yPercent: 150,
      xPercent: window.innerWidth < 760 ? 0 : 50,
    });
    gsap.set(".section-three-image", {
      yPercent: 50,
      opacity: 0,
    });
    gsap.set(titleText.chars, {
      fontSize: window.innerWidth < 760 ? "6.25rem" : "18rem",
      opacity: 0,
      yPercent: window.innerWidth < 760 ? 100 : 0,
      lineHeight: window.innerWidth < 760 ? "7.5rem" : "6.5rem",
    });
    gsap
      .to(titleText.chars, {
        scrollTrigger: {
          trigger: ".section-two",
          start: window.innerWidth < 760 ? "top -5%" : "top -5%",
          end: "+=1000px",
          // scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
        yPercent: window.innerWidth > 760 ? 400 : 100,
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out",
      })
      .then(() => {
        gsap
          .to(".section-two-image", {
            scrollTrigger: {
              trigger: ".section-three",
              start: "top 20%",
              end: "+=1000px",
              scrub: true,
              invalidateOnRefresh: true,
              // pin: true,
            },
            yPercent: 114,
            xPercent: window.innerWidth < 760 ? -20 : 20,
            stagger: 0.05,
            scale: window.innerWidth < 760 ? 0.7 : 1,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          })
          .then(() => {});
      });
    tl.to(".section-three-image", {
      scrollTrigger: {
        trigger: ".section-three",
        start: "bottom 120%",
        end: "+=600px",
        scrub: true,
        invalidateOnRefresh: true,
        // pin: true,
      },
      yPercent: 0,
      xPercent: 0,
      stagger: 0.05,

      opacity: 1,
      duration: 1,
      ease: "power4.out",
    });

    IO(dom).then(
      () => {
        let text = document.querySelector(".section-two-title");
        setTimeout(function () {
          const clonedText = text.cloneNode(true);
          clonedText.firstChild.childNodes.forEach(e => {
            text.firstChild.appendChild(e.cloneNode(true));
          });
        }, 1000);
        tl.to(".section-two-image", {
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
        tl.to(text, { duration: 10, x: -text.offsetWidth, ease: "none", repeat: -1 });
      },
      { threshold: 1 }
    );
  });
  return (
    <div className=" bg-n-yellow1 relative">
      <div class=" section-two overflow-hidden">
        <Ntext
          variant="text9"
          color="c-0"
          className="section-two-title whitespace-nowrap flex flex-row flex-nowrap absolute top-[11rem] md:top-[0rem]"
        >
          Everything <span> &nbsp; </span>
          <span> &nbsp; </span> you <span> &nbsp; </span>
          <span> &nbsp; </span> need<span> &nbsp; </span>
          <span> &nbsp; </span> to<span> &nbsp; </span>
          <span> &nbsp; </span> know <span> &nbsp; </span>
          <span> &nbsp; </span>
        </Ntext>

        <div class="relative  md:py-24 md:px-0  min-h-[100vh] flex flex-col justify-center items-center section-two-image opacity-0">
          <div ref={animationContainer} className="max-h-[802px] max-w-[647px]"></div>
        </div>
        <div className="flex md:flex-row flex-col justify-between items-center section-three md:mt-[200px] slider-padding-left">
          <div className="flex flex-col gap-[20px] md:-mt-20 px-3 md:px-0">
            <Ntext variant="h1" color="c-0" className="max-w-[672px]">
              All you need to elevate your business
            </Ntext>
            <Ntext variant="text5lite" color="c-0" className="max-w-[544px]">
              Make your menu accessible via QR scan, accept customers’ orders and process payments easily.
            </Ntext>

            <div className="mt-5">
              <Button
                className="!font-medium !text-[16px] !min-w-[100px] !w-[200px]"
                text="Get Started"
                withArrow={true}
              />
            </div>
          </div>

          <div class="relative max-w-[728px] with-hand mt-[32px] section-three-image md:hidden">
            <StaticImage
              alt="Iphone with hand"
              src="../../../assets/images/jpegs/e-menu/iPhone-with-hand2.png"
              width={336}
              height={464}
            />
          </div>
          <div class="relative max-w-[728px] with-hand mt-[32px] section-three-image hidden md:block">
            <StaticImage
              alt="iphone in hand"
              src="../../../assets/images/jpegs/e-menu/iPhone-with-hand.png"
              width={718}
              height={796}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { EmenuSection2 };
