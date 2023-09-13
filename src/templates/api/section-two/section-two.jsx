import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext, ReadMore } from "components";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const SectionTwo = ({ title, description, data }) => {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  const [currentLabel, setCurrentLabel] = useState(0);

  function calculateNormalizedPercentage(value, lowerBound, upperBound, dom) {
    const normalizedPercentage = ((value - lowerBound) / (upperBound - lowerBound)) * 100;
    if (normalizedPercentage < 2) {
      dom.style.opacity = 0;
    } else {
      dom.style.opacity = 1;
    }
    return `${normalizedPercentage}%`;
  }
  useLayoutEffect(() => {
    /**
     * create our context.
     * This function is invoked immediately and all GSAP animations and ScrollTriggers created
     * during the execution of this function get recorded so we can revert() them later (cleanup)
     */
    for (let i = 0; i < data.length; i++) {
      gsap.to(`.section-two-rect-card-no-${i}`, {
        opacity: 0,
      });
    }
    const d = document;
    let ctx = gsap.context(() => {
      let tl1 = gsap.timeline({
        scrollTrigger: {
          invalidateOnRefresh: true,
          trigger: comp.current,
          pin: true,
          start: "top 5%", // when the top of the trigger hits the top of the viewport
          end: "+=5000px", // end after scrolling 1000px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          onUpdate(self) {
            for (let i = 0; i < data.length; i++) {
              if (self.progress > i / data.length) {
                d.querySelector(`.scroll-progress-${i}`).style.width =
                  self.progress <= (i + 1) / 3
                    ? calculateNormalizedPercentage(
                        self.progress,
                        i / data.length,
                        (i + 1) / 3,
                        d.querySelector(`.scroll-progress-${i}`)
                      )
                    : "100%";

                if (self.progress <= (i + 1) / 3) {
                  d.querySelector(`.section-two-rect-card-no-${i}`).style.opacity = 1;
                } else {
                  d.querySelector(`.section-two-rect-card-no-${i}`).style.opacity = 0;
                }
              } else {
                d.querySelector(`.section-two-rect-card-no-${i}`).style.opacity = 0;
              }
            }
          },
        },
      });
      for (let i = 0; i < data.length; i++) {
        tl1.addLabel(`card${i}`);
        tl1.add(() => setActiveNav(i), "-=0.15");
      }

      gsap.utils.toArray(".section-nav-link .circle").forEach((a, i) => {
        a.addEventListener("click", e => {
          e.preventDefault();

          gsap.to(window, { scrollTo: labelToScroll(i / data.length) + 10 });
        });
      });

      function labelToScroll(progress) {
        let st = tl1.scrollTrigger;

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
  }, [data]);

  return (
    <section className="bg-[#38383874] pt-20 ">
      <Container>
        <div className="md:max-w-[819px] md:mx-auto  text-center md:mt-12 mb-7">
          <Ntext variant="h2" className="md:text-center" color="primary-100">
            {title}
          </Ntext>
          <Ntext variant="text3" className="md:px-5 mt-[28px]" color="primary-500">
            {description}
          </Ntext>
        </div>
        <div ref={comp} className="md:min-h-[940px] min-h-[400px] overflow-y-hidden">
          <div className="flex justify-between section-nav-link ">
            {data.map((s, i) => (
              <div key={s.title} className={`${cardWrapStyle}`}>
                <div className={`absolute h-full rounded-[10px]  bg-n-grey6 scroll-progress-${i} transition-all  `}>
                  {" "}
                </div>
                <div className="md:hidden absolute  w-full h-[150%] px-8 py-4">{s.iconMobile}</div>
                <div className={cardInnerWrapper}>
                  <div className="flex items-center gap-[20px]">
                    {s.icon}
                    <Ntext variant="text5" color="primary-100">
                      {s.title}
                    </Ntext>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Ntext variant="text3" color="m-light">
                      {s.description}
                    </Ntext>
                    {i !== 2 ? (
                      <ReadMore
                        color="secondary"
                        variant="text2"
                        href={{ url: "tel:+23401888899" }}
                        text="Learn more"
                      />
                    ) : (
                      <div className="text-n-yellow px-4 py-[6px] rounded-2xl bg-[#38383855] w-min whitespace-pre text-sm">
                        Coming soon
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {data.map((t, i) => (
              <div
                key={t.title}
                className={`mt-10 opacity-0 max-h-[680px] overflow-y-hidden transition-opacity duration-1000 section-two-rect-card section-two-rect-card-no-${i} absolute top-7`}
              >
                <StaticImage src="../../../assets/images/jpegs/api/image-temp.png" alt="Temp Doc" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const cardWrapStyle = ctl(`
relative
md:w-[400px] 
w-[120px]
md:h-[200px]
h-[80px] 
border-n-grey5 
bg-primary
border circle
rounded-[10px]
`);

const cardInnerWrapper = ctl(`
md:flex 
flex-col 
z-10
gap-[16px]
absolute
justify-around
pl-10
py-10
max-w-[340px]
hidden
`);
export { SectionTwo };
