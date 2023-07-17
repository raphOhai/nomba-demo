import React, { useRef, useLayoutEffect } from "react";
import { Container, Ntext } from "components";
import { StaticImage } from "gatsby-plugin-image";
import { SponsorList } from "./sponsorsList";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIsMobile from "hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const TerminalSectionInteractions = () => {
  useLayoutEffect(() => {
    let tl1 = gsap.timeline({
      scrollTrigger: {
        invalidateOnRefresh: true,
        trigger: ".mini-section-2",
        pin: true,
        start: "top top", // when the top of the trigger hits the top of the viewport
        end: "+=3000px", // end after scrolling 1000px beyond the start
        // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
      },
    });
    tl1.to(".mini-2", {
      opacity: 0,
      xPercent: 0,
      yPercent: 0,
      duration: 1,
      ease: "easeOut",
    });
    tl1.fromTo(
      ".mini-1",
      {
        opacity: 0,
        // xPercent: 0,
        // yPercent: 0,
        // ease: "easeOut",
      },
      {
        opacity: 1,

        // yPercent: 600,
        // // duration: 1.5,
        // ease: "easeOut",
      }
    );
  });

  return (
    <section className="min-h-[100vh] mini-section-2">
      <div className="justify-between flex flex-col h-full px-5 pt-5">
        <div>
          <div className="flex justify-center flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="16" viewBox="0 0 42 16" fill="none">
              <g clip-path="url(#clip0_3634_21714)">
                <path
                  d="M2.82985 0.880005H6.72929L9.1905 10.9297H9.36568L15.1421 0.880005H19.042L16.5578 15.8363H13.4934L15.1145 6.10172H14.9904L9.50971 15.7632H7.42082L5.1736 6.06495H5.04949L3.41515 15.8363H0.34668L2.82985 0.880005Z"
                  fill="#FFCC00"
                  stroke="#FFCC00"
                  stroke-width="0.0510731"
                  stroke-miterlimit="10"
                />
                <path
                  d="M21.5978 3.17312C21.1565 3.18132 20.7298 3.01461 20.4109 2.70937C20.2542 2.56949 20.1291 2.39775 20.0441 2.20565C19.9592 2.01355 19.9162 1.80552 19.918 1.59547C19.918 1.16714 20.0823 0.798387 20.4109 0.489225C20.7341 0.191061 21.1578 0.0255127 21.5976 0.0255127C22.0373 0.0255127 22.461 0.191061 22.7843 0.489225C23.1132 0.798387 23.2776 1.16714 23.2776 1.59547C23.2795 1.80557 23.2364 2.01365 23.1514 2.20576C23.0663 2.39787 22.9411 2.56957 22.7843 2.70937C22.4655 3.01458 22.039 3.1813 21.5978 3.17312ZM20.035 15.8362V4.619H23.1464V15.8362H20.035Z"
                  fill="#FFCC00"
                  stroke="#FFCC00"
                  stroke-width="0.0510731"
                  stroke-miterlimit="10"
                />
                <path
                  d="M28.7398 9.35089V15.8372H25.6289V4.61897H28.5911V6.59805H28.7229C28.961 5.95888 29.4001 5.41423 29.9742 5.04594C30.5585 4.66391 31.2669 4.4729 32.0994 4.4729C32.8784 4.4729 33.5575 4.64314 34.1367 4.98363C34.7189 5.32758 35.1884 5.83374 35.4876 6.44024C35.8093 7.07116 35.97 7.82228 35.9697 8.69358V15.8362H32.8588V9.24773C32.8636 8.5613 32.6882 8.02453 32.3328 7.63739C31.9773 7.25026 31.488 7.0572 30.8649 7.05822C30.4789 7.05 30.0975 7.14316 29.7587 7.3284C29.4379 7.5102 29.1787 7.78351 29.014 8.11339C28.8363 8.4566 28.7449 8.8691 28.7398 9.35089Z"
                  fill="#FFCC00"
                  stroke="#FFCC00"
                  stroke-width="0.0510731"
                  stroke-miterlimit="10"
                />
                <path
                  d="M39.9787 3.17312C39.5373 3.18132 39.1106 3.01461 38.7917 2.70937C38.635 2.56949 38.51 2.39775 38.425 2.20565C38.34 2.01355 38.297 1.80552 38.2989 1.59547C38.2989 1.16714 38.4632 0.798387 38.7917 0.489225C39.115 0.191061 39.5387 0.0255127 39.9784 0.0255127C40.4182 0.0255127 40.8419 0.191061 41.1651 0.489225C41.494 0.798387 41.6585 1.16714 41.6585 1.59547C41.6604 1.80557 41.6173 2.01365 41.5322 2.20576C41.4471 2.39787 41.322 2.56957 41.1651 2.70937C40.8464 3.01458 40.4199 3.1813 39.9787 3.17312ZM38.4174 15.8362V4.619H41.5282V15.8362H38.4174Z"
                  fill="#FFCC00"
                  stroke="#FFCC00"
                  stroke-width="0.0510731"
                  stroke-miterlimit="10"
                />
              </g>
              <defs>
                <clipPath id="clip0_3634_21714">
                  <rect width="41.3672" height="15.8618" fill="white" transform="translate(0.316406)" />
                </clipPath>
              </defs>
            </svg>
            <div>
              <Ntext variant="h2" className="text-center" color="n-light">
                Activate the power of <br /> your payment padi.
              </Ntext>
            </div>
          </div>
        </div>
        <div className="terminal-mini-section">
          <div className="relative">
            <div className={`mini-2  img `}>
              <StaticImage src="../../../assets/images/jpegs/mini/hero/mini2.png" alt="" />
            </div>
            <div className="center-child mini-1  opacity-0 img  ">
              <div className="flex-row flex justify-center items-center">
                <StaticImage
                  className=""
                  height={600}
                  width={900}
                  alt=""
                  src="../../../assets/images/jpegs/mini/hero/mini.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { TerminalSectionInteractions };
