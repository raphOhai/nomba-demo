import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Container, Ntext, Button, SectionHeader, ReadMore } from "components";
import constants from "config/constants.json";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const EmenuSection4 = ({ headingText, tools }) => {
  const { SIGNUP_URL } = constants;

  const comp = useRef(); // create a ref for the root level element (for scoping)
  const circle = useRef();

  useLayoutEffect(() => {
    const dom = document.querySelector(".section-four");
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: comp.current,
          pin: true,
          start: "top 5%", // when the top of the trigger hits the top of the viewport
          end: "+=3500px", // end after scrolling 1000px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
      tools.forEach((card, i) => {
        if (i === 0) {
          tl1.addLabel(`card${i}`);
          tl1.to(`.section-four-rect-card-${i}`, {
            yPercent: 0,
            opacity: 1,
          });
        } else {
          tl1.from(`.section-four-rect-card-${i}`, {
            yPercent: 75,
            opacity: 0,
          });
          tl1.addLabel(`card${i}`);
          // set the active section based on the direction, and position it part-way through the transition because that's more intuitive
          tl1.add(() => setActiveNav(tl1.scrollTrigger.direction > 0 ? i : 0), "-=0.15");
          tl1.to(
            `.section-four-rect-card-${i - 1}`,
            {
              scale: 0.9 + (i - 1) * 0.03,
              yPercent: -(8 - (i - 1) * 4),
              opacity: 0.7,
            },
            "-=0.5"
          );

          tl1.to(`.section-four-rect-card-${i}`, {
            yPercent: 0,
            opacity: 1,
          });
        }
      });

      gsap.utils.toArray(".section-nav-link a").forEach((a, i) => {
        a.addEventListener("click", e => {
          e.preventDefault();
          console.log(tl1.scrollTrigger.direction);
          console.log(i);
          let pad = i === 0 ? 0 : tl1.scrollTrigger.direction > 0 ? 2 : -2;
          gsap.to(window, { scrollTo: labelToScroll(tl1, "card" + i) + 2 });
        });
      });
      function labelToScroll(timeline, label) {
        let st = timeline.scrollTrigger,
          progress = timeline.labels[label] / timeline.duration();
        return st.start + (st.end - st.start) * progress;
      }
      let circles = gsap.utils.toArray(".section-nav-link .circle");
      function setActiveNav(index) {
        circles.forEach((circle, i) => circle.classList[i === index ? "add" : "remove"]("border"));
      }
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render
  return (
    <div class=" bg-n-light relative section-four">
      <Container className="">
        <SectionHeader>
          <div className="flex flex-row justify-center max-w-[753px] mx-auto pt-10">
            <Ntext variant="text8" color="primary" className="">
              {headingText}
            </Ntext>
          </div>
        </SectionHeader>
        <div ref={comp} className=" min-h-[120vh]">
          <div className="text-center pb-10 section-nav-link flex-row flex justify-center">
            {tools.map((t, i) => (
              <div
                className={`cursor-pointer transition-all px-5 py-2 inline-flex rounded-full section-four-title-${i} circle flex flex-col justify-center items-center`}
              >
                <a href={`#card-${i}`}>{t.title}</a>
              </div>
            ))}
          </div>
          <div className="relative section-four-rect mb-36">
            {tools.map((t, i) => (
              <div
                class={`w-full ${t.color} overflow-hidden rounded-[20px] section-four-rect-card section-four-rect-card-${i}`}
                key={i}
              >
                <div className="flex md:flex-row flex-col justify-between items-center">
                  <div className="flex flex-col gap-[10px] p-10 md:pt-0 md:pl-[60px]">
                    <Ntext variant="text7" color="c-0" className="max-w-[410px]">
                      {t.heading}
                    </Ntext>
                    <Ntext variant="text3" color="c-0" className="max-w-[353px]">
                      {t.description}
                    </Ntext>

                    <div className="md:mt-10 mt-5">
                      <ReadMore
                        className="!font-medium !text-[16px] !text-primary"
                        text="Get Started on menu"
                        color="primary"
                        href={{ url: SIGNUP_URL }}
                      />
                    </div>
                  </div>
                  <div
                    className={`md:min-h-[300px] flex flex-col justify-end mt-[20px] section-four-rect-card-image-${i}`}
                  >
                    {t.image}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
const heroButtonsContainer = ctl(`
absolute
md:top-[77%] top-[83%]
w-full
text-center
`);
export { EmenuSection4 };
