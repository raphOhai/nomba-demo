import React, { useLayoutEffect, useRef } from "react";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FeatureCards } from "./feature-cards";
import { StaticImage } from "gatsby-plugin-image";
import image1 from "jpegs/mini/terminal/image1.png";
import image2 from "jpegs/mini/terminal/image2.png";
import image3 from "jpegs/mini/terminal/image3.png";
import image4 from "jpegs/mini/terminal/image4.png";
import network from "jpegs/mini/terminal/image5.png";
import lgBa3 from "jpegs/mini/terminal/image6.png";
import Pres from "svgs/pres.svg";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const MiniFeatures2 = ({ title, features }) => {
  const comp = useRef(); // create a ref for the root level element (for scoping)

  useLayoutEffect(() => {
    // const images = document.querySelectorAll(".mini-images");
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
          start: "top top", // when the top of the trigger hits the top of the viewport
          end: "+=5400px", // end after scrolling 1000px beyond the start
          scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        },
      });
      tl1.addLabel(`card${0}`);
      tl1.add(() => setActiveImage(0), "-=0.15");
      for (let i = 0; i <= features.length; i++) {
        if (i !== 0) {
          tl1.from(`.sub-description-${i}`, {
            height: 0,
            // opacity: 0,
          });

          tl1.to(`.sub-description-${i}`, {
            // yPercent: -100,
            height: 250,
            opacity: 1,
          });
          tl1.to(
            `.sub-description-${i - 1}`,
            {
              opacity: 0,
              height: 0,
            },
            "-=0.5"
          );

          tl1.addLabel(`card${i}`);
          tl1.add(() => setActiveImage(i), tl1.scrollTrigger.direction > 0 ? "-=0.15" : "+=0.15");
        }
      }
      // features.forEach((card, i) => {

      // });

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
      let images = gsap.utils.toArray(".mini-images");
      function setActiveImage(index) {
        images.forEach((image, i) => {
          if (i === index) {
            image.classList["remove"]("opacity-0");
          } else {
            image.classList["add"]("opacity-0");
          }
        });
        // document.querySelector(`#card-${i}`).scrollIntoView(true, { behavior: 'smooth'});
      }
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup
  }, []); // <- empty dependency Array so it doesn't re-run on every render
  return (
    <section ref={comp} className="py-[100px] feature-section bg-n-grey1" id="features">
      <Container>
        <div className="flex flex-col md:flex-row justify-around md:gap-[100px]">
          <div className=" bg-primary md:w-[597px] rounded-[10px] p-5 md:p-[40px]">
            <div className="overflow-hidden  bg-primary  flex flex-col gap-[40px]">
              <div className="sub-description-0 overflow-hidden pb-10">
                <div>
                  <Pres />
                </div>
                <div className="max-w-[454px] mt-5">
                  <Ntext variant="text7" color="n-light">
                    The new pocket-sized terminal for swift and successful transactions
                  </Ntext>
                </div>
                <div className="max-w-[300px] mt-5">
                  <Ntext variant="text-3" color="n-yellow">
                    The new pocket-sized terminal for swift and successful transactions
                  </Ntext>
                </div>
              </div>
            </div>
            <div class=" bg-primary flex flex-col gap-[40px]">
              {/* <div className="bg-primary"> */}
              {features.map((t, i) => (
                <div>
                  <div className="flex justify-between flex-row items-center">
                    <div className="text-n-grey4 font-[600] text-[22px] md:text-[24px]">{t.title}</div>

                    {t.icon}
                  </div>
                  <div className={`sub-description sub-description-${i + 1}  overflow-hidden bg-primary`}>
                    <div>
                      <div className="max-w-[454px] mt-5">
                        <Ntext variant="text7" color="n-light">
                          The new pocket-sized terminal for swift and successful transactions
                        </Ntext>
                      </div>
                      <div className="max-w-[300px] mt-5">
                        <Ntext variant="text-3" color="n-yellow">
                          The new pocket-sized terminal for swift and successful transactions
                        </Ntext>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-w-[400px]   h-[706px]">
            <div className="absolute">
              <img
                className="max-w-[381px] h-[706px] mini-images transition-opacity duration-1000 ease-out"
                src={image1}
                width={381}
                height={706}
                alt="mini 1"
              />
            </div>
            <div className="absolute">
              <img
                className="max-w-[381px] h-[706px] opacity-0 mini-images transition-opacity duration-1000 ease-out"
                src={image2}
                width={381}
                height={706}
                alt="mini 1"
              />
            </div>
            <div className="absolute">
              <img
                className="max-w-[381px] h-[706px] opacity-0 mini-images transition-opacity duration-1000 ease-out"
                src={lgBa3}
                width={381}
                height={706}
                alt="mini 1"
              />
            </div>
            <div className="absolute">
              <img
                className="max-w-[381px] h-[706px] opacity-0 mini-images transition-opacity duration-1000 ease-out"
                src={image4}
                width={381}
                height={706}
                alt="mini 1"
              />
            </div>
            <div className="absolute">
              <img
                className="max-w-[381px] h-[706px] opacity-0 mini-images transition-opacity duration-1000 ease-out"
                src={network}
                width={381}
                height={706}
                alt="mini 1"
              />
            </div>
            {/* </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export { MiniFeatures2 };
