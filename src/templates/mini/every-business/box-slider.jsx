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
          end: "+=3000px",
          snap: 1 / sections.length,
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
                    item.classList.add("hidden");
                    t.classList.remove("hidden");
                    item = t;
                  }
                } else {
                  t.classList.remove("hidden");
                  item = t;
                }
              } else {
                t.classList.add("hidden");
              }
            });
          },
        },
      });

      // sections.forEach((card, i) => {
      tl1.to(sections, {
        xPercent: -250,
      });
      // });
    });
  });

  return (
    <>
      <div className="flex justify-start gap-7 mt-[50px] items-center flex-nowrap flex-row scrollbar-hide overflow-auto box-slider">
        {slides.map((item, i) => (
          <Box key={i} className={`box-panel-${i}`} image={item.image} />
        ))}
      </div>
    </>
  );
};

BoxSlider.propTypes = {
  slides: PropTypes.array,
};

export { BoxSlider };
