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
  useLayoutEffect(() => {
    let sections = gsap.utils.toArray(".box-panel");
    let titles = document.querySelectorAll(".b-title");
    let slider = document.querySelector(".box-slider");
    // gsap.to(sections, {
    //   xPercent: -150 * (sections.length - 1),
    //   ease: "none",
    //   duration: 5,
    //   delay: 1,
    //   scrollTrigger: {
    //     trigger: ".box-slider",
    //     start: "top 30%",
    //     pin: true,
    //     scrub: 4,
    //     snap: 1 / (sections.length - 1),
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: "+=500px",
    //   },
    // });

    console.log(titles);
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
          // onSnapComplete() {
          //   alert(4);
          // },
          onUpdate(val) {
            titles.forEach((t, i) => {
              let lowerBound = i === 0 ? 0 : (i - 0.6) / sections.length;
              let upperBound = (i + 0.6) / sections.length;

              if (lowerBound <= val.progress && val.progress < upperBound) {
                if (item) {
                  if (item === t) {
                    // t.classList.remove("hidden");
                  } else {
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
      <div className="flex justify-start gap-7 mt-[50px] items-center flex-nowrap flex-row scrollbar-hide overflow-auto box-slider">
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
