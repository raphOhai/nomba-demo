import React, { useEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "./box";

gsap.registerPlugin(ScrollTrigger);

const BoxSlider = ({ slides }) => {
  useEffect(() => {
    let sections = gsap.utils.toArray(".panel");
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      duration: 2,
      scrollTrigger: {
        trigger: ".box-slider",
        start: "top 20%",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: "+=500px",
      },
    });
  });

  return (
    <>
      <div className="flex justify-start gap-7 mt-[50px] items-center flex-nowrap flex-row scrollbar-hide overflow-auto box-slider">
        {slides.map(item => (
          <Box title={item.title} key={item.id} image={item.image} />
        ))}
      </div>
    </>
  );
};

BoxSlider.propTypes = {
  slides: PropTypes.array,
};

export { BoxSlider };
