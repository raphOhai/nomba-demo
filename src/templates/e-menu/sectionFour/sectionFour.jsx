import React, { useLayoutEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Container, Ntext, SectionHeader } from "components";
import Arrow from "svgs/readmore.svg";
import ctl from "@netlify/classnames-template-literals";
import { AppContext } from "states/context";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const EmenuSection4 = ({ headingText, tools }) => {
  const { onOpen } = useContext(AppContext);

  const comp = useRef(); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {
    /**
     * create our context.
     * This function is invoked immediately and all GSAP animations and ScrollTriggers created
     * during the execution of this function get recorded so we can revert() them later (cleanup)
     */
    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: comp.current,
          pin: true,
          start: "top 5%", // when the top of the trigger hits the top of the viewport
          end: "+=4000px", // end after scrolling 1000px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
      tools.forEach((card, i) => {
        if (i === 0) {
          tl1.to(`.section-four-rect-card-${i}`, {
            yPercent: 0,
            opacity: 1,
          });
          tl1.addLabel(`card${i}`);
          tl1.add(() => setActiveNav(i), "-=0.15");
        } else {
          tl1.from(`.section-four-rect-card-${i}`, {
            yPercent: 200,
            opacity: 0,
          });

          // set the active section based on the direction, and position it part-way through the transition because that's more intuitive

          tl1.to(
            `.section-four-rect-card-${i - 1}`,
            {
              scale: 0.9 + (i - 1) * 0.03,
              yPercent: -(8 - (i - 1) * 4),
              opacity: 1,
            },
            "-=0.5"
          );

          tl1.to(`.section-four-rect-card-${i}`, {
            yPercent: 0,
            opacity: 1,
          });
          tl1.addLabel(`card${i}`);
          tl1.add(() => setActiveNav(i), "-=0.15");
        }
      });

      gsap.utils.toArray(".section-nav-link a").forEach((a, i) => {
        a.addEventListener("click", e => {
          e.preventDefault();

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
        circles.forEach((circle, i) => {
          if (i === index) {
            circle.scrollIntoView(false, { behavior: "smooth", inline: "start" });
          }
          circle.classList[i === index ? "add" : "remove"]("md:border");

          circle.classList[i === index ? "add" : "remove"]("text-black");
        });
        // document.querySelector(`#card-${i}`).scrollIntoView(true, { behavior: 'smooth'});
      }
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, [tools]); // <- empty dependency Array so it doesn't re-run on every render
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
          <div className="flex justify-start text-center pb-10 text-n-grey2 section-nav-link flex-row scrollbar-hide overflow-auto md:justify-center">
            {tools.map((t, i) => (
              <div
                key={t.title}
                className={`cursor-pointer transition-all  md:px-5 py-2  px-2 md:border-black inline-flex rounded-full section-four-title-${i} circle flex flex-col justify-center items-center`}
              >
                <a href={`#card-${i}`} className="text-[14px] md:text-[20px] whitespace-pre">
                  {t.title}
                </a>
              </div>
            ))}
          </div>
          <div className="relative section-four-rect mb-36">
            {tools.map((t, i) => (
              <div
                class={`w-full ${t.color} overflow-hidden rounded-[20px] section-four-rect-card section-four-rect-card-${i}`}
                key={t.heading}
              >
                <div className="flex md:flex-row flex-col justify-between items-center">
                  <div className="flex flex-col gap-[10px] p-10 md:pt-0 md:pl-[60px]">
                    <Ntext variant="text7" color="c-0" className="max-w-[410px]">
                      {t.heading}
                    </Ntext>
                    <Ntext variant="text3" color="c-0" className="max-w-[353px]">
                      {t.description}
                    </Ntext>

                    <div className="md:mt-10 mt-28">
                      <div className={readmoreStylDefault} onClick={onOpen}>
                        <Ntext
                          variant={"p16"}
                          color="primary"
                          className={`peer !font-medium !text-[16px] !text-primary transition-all duration-300`}
                          weight="600"
                        >
                          Get Started on menu
                        </Ntext>{" "}
                        <Arrow className={arrowStyle} />
                      </div>
                    </div>
                  </div>
                  <div
                    className={`hidden md:min-h-[300px] md:flex flex-col justify-end mt-[20px] section-four-rect-card-image-${i}`}
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
const readmoreStylDefault = ctl(`
inline-flex
items-center
group
cursor-pointer
`);

const arrowStyle = ctl(`
ml-2
transition-all
duration-300
peer-hover:ml-4
hover:ml-4
`);

export { EmenuSection4 };
