import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "./box";

gsap.registerPlugin(ScrollTrigger);

const BoxSlider = ({ slides }) => {
  let item = null;

  const elementIsVisibleInViewport = el => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
  };

  useLayoutEffect(() => {
    let sections = gsap.utils.toArray(".box-panel");
    let titles = gsap.utils.toArray(".b-title");
    let slider = document.querySelector(".box-slider");

    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: ".box-slider",
          pin: true,
          start: "top 30%",
          scrub: 1,
          end: `+=${slider.offsetWidth + 2500}px`,
          snap: 1 / (sections.length - 1),

          onUpdate() {
            sections.forEach((s, i) => {
              const t = titles[i];
              if (elementIsVisibleInViewport(s)) {
                if (item) {
                  if (item !== t) {
                    item.classList.remove("md:block");
                    t.classList.add("md:block");
                    item = t;
                  }
                } else {
                  t.classList.add("md:block");
                  item = t;
                }
              } else {
                t.classList.remove("md:block");
              }
            });
          },
        },
      });

      // sections.forEach((card, i) => {
      tl1.to(sections, {
        xPercent: -100 * (sections.length - 1),
      });
      // });
    });
    return () => ctx.revert();
  });

  return (
    <>
      <div className="flex justify-start gap-7 mt-[50px] items-center flex-nowrap flex-row scrollbar-hide overflow-auto box-slider slider-margin-left">
        {slides.map((item, i) => (
          <Box key={i} className={`box-panel-${i}`} image={item.image} mobileImage={item.mobileImage} />
        ))}
      </div>
    </>
  );
};

BoxSlider.propTypes = {
  slides: PropTypes.array,
};

export { BoxSlider };
