import React, { useLayoutEffect } from "react";
import { Ntext } from "components";
import { StaticImage } from "gatsby-plugin-image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TerminalSectionInteractions = () => {
  useLayoutEffect(() => {
    if (window.innerWidth > 760) {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: ".mini-section-2",
          pin: true,
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=1500px", // end after scrolling 1000px beyond the start
          toggleActions: "play none none none",
          // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
      tl1.to(".mini-2", {
        opacity: 0,
        delay: 0.5,
        duration: 0.6,
        ease: "easeOut",
      });
      tl1.fromTo(
        ".mini-1",
        {
          bottom: "-100px",
        },
        {
          bottom: "0px",
          opacity: 1,
        }
      );
    }
  });

  return (
    <section className="md:h-[100vh] mini-section-2">
      <div className="justify-between items-center flex flex-col h-full px-5 pt-20">
        <div>
          <div className="flex justify-center flex-col items-center">
            <div className="text-n-yellow text-[20px] font-[700]">
              <span className=" italic tracking-wider">M</span>ini & Mighty
            </div>
            <div>
              <Ntext variant="h2" className="text-center" color="n-light">
                Activate the power of <br /> your payment padi.
              </Ntext>
            </div>
          </div>
        </div>
        <div className="terminal-mini-section">
          <div className="relative hidden md:block">
            <div className={`mini-2 flex flex-row justify-center  img `}>
              <StaticImage src="../../../assets/images/jpegs/mini/hero/mini2.png" alt="" />
            </div>
            <div className=" mini-1 absolute opacity-0  img  ">
              <div className="flex-row flex justify-center items-center">
                <StaticImage
                  className=""
                  height={630}
                  width={920}
                  alt=""
                  src="../../../assets/images/jpegs/mini/hero/mini.png"
                />
              </div>
            </div>
          </div>
          <div className="md:!hidden flex flex-row justify-center">
            <StaticImage src="../../../assets/images/jpegs/mini/hero/mini.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export { TerminalSectionInteractions };
