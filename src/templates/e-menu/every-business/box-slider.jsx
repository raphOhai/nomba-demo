import React, { useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BoxSlider = ({}) => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".box-panel");
    gsap.to(sections, {
      xPercent: -100,
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".box-slider",
        start: "top top",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "0px",
      },
    });
  });

  return (
    <>
      <div className="h-0 opacity-0 box-slider"></div>
    </>
  );
};

BoxSlider.propTypes = {
  slides: PropTypes.array,
};

export { BoxSlider };
