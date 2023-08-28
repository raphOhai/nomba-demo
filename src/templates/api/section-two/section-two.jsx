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
          end: "+=5000px", // end after scrolling 1000px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          onUpdate(self) {
            data.forEach((c, i) => {
              // console.log(self.progress / (i + 1) / data.length) * 100))
              gsap.to(`.scroll-progress-${i}`, {
                width:
                  self.progress > i / data.length && self.progress <= (i + 1) / data.length
                    ? `${(self.progress / ((i + 1) / data.length)) * 100}%`
                    : "0%",
              });
            });
          },
        },
      });
      data.forEach((card, i) => {
        if (i === 0) {
          tl1.to(`.section-four-rect-card-no-${i}`, {
            yPercent: 0,
            opacity: 1,
          });
          tl1.addLabel(`card${i}`);
          tl1.add(() => setActiveNav(i), "-=0.15");
        } else {
          tl1.from(`.section-four-rect-card-no-${i}`, {
            yPercent: 100,
            opacity: 0,
          });

          // set the active section based on the direction, and position it part-way through the transition because that's more intuitive

          tl1.to(
            `.section-four-rect-card-no-${i - 1}`,
            {
              scale: 0.9 + (i - 1) * 0.03,
              // yPercent: -(8 - (i - 1) * 4),
              yPercent: -3,
              opacity: 1,
            },
            "-=0.5"
          );

          tl1.to(`.section-four-rect-card-no-${i}`, {
            yPercent: -3,
            opacity: 1,
          });

          tl1.addLabel(`card${i}`);
          tl1.add(() => setActiveNav(i), "-=0.15");
        }
      });

      gsap.utils.toArray(".section-nav-link .circle").forEach((a, i) => {
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
        <div ref={comp} className="md:min-h-[940px] min-h-[400px]">
          <div className="flex justify-between section-nav-link ">
            {data.map((s, i) => (
              <div key={s.title} className={`${cardWrapStyle}`}>
                <div className={`absolute h-full bg-n-grey6 scroll-progress-${i} `}> </div>
                <div className="md:hidden absolute w-full h-[150%] px-10 py-5">{s.iconMobile}</div>
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
                    <ReadMore color="secondary" variant="text2" href={{ url: "tel:+23401888899" }} text="Learn more" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            {data.map((t, i) => (
              <div
                key={t.title}
                className={`mt-10 max-h-[680px] overflow-y-hidden section-four-rect-card section-four-rect-card-no-${i}`}
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
overflow-hidden
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
