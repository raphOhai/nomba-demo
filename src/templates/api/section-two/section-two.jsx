import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext } from "components";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import CheckoutApi from "jpegs/api/icons/n-icons/checkout.svg";
import { ProductModal } from "components/product-modal/product-modal";
import { ReadMore } from "../read-more";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
const SectionTwo = ({ title, description, data }) => {
  const comp = useRef(); // create a ref for the root level element (for scoping)
  const [currentLabel, setCurrentLabel] = useState(0);
  const [show, setShow] = useState(false);

  const [currentFeature, setCurrentFeature] = useState(data[0]);

  function calculateNormalizedPercentage(value, lowerBound, upperBound, dom) {
    const normalizedPercentage = ((value - lowerBound) / (upperBound - lowerBound)) * 100;
    if (normalizedPercentage < 2) {
      dom.style.opacity = 0;
    } else {
      dom.style.opacity = 1;
    }
    return `${normalizedPercentage}%`;
  }
  const showModal = d => {
    setCurrentFeature(d);

    setShow(!show);
  };
  useLayoutEffect(() => {
    function initLayout() {
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
                    self.progress <= (i + 1) / data.length
                      ? calculateNormalizedPercentage(
                          self.progress,
                          i / data.length,
                          (i + 1) / data.length,
                          d.querySelector(`.scroll-progress-${i}`)
                        )
                      : "100%";

                  if (self.progress <= (i + 1) / data.length) {
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
    }
    if (window.innerWidth > 746) {
      initLayout();
    }
    window.addEventListener("resize", e => {
      if (e.target.innerWidth > 746) {
        initLayout();
      }
    });
  }, [data]);

  return (
    <>
      <ProductModal show={show} setShow={setShow} data={currentFeature} />
      <section className="bg-n-grey6/40 pt-20 ">
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
                <div key={s.description} className={`${cardWrapStyle} hidden md:block`}>
                  <div
                    className={`absolute h-full rounded-[10px]  bg-n-grey6 scroll-progress-${i} transition-all duration-75 `}
                  >
                    {" "}
                  </div>
                  {/* <div className="md:hidden absolute  w-full h-[150%] px-8 py-4">{s.iconMobile}</div> */}
                  <div className={cardInnerWrapper}>
                    <div className="flex items-center gap-[12px]">
                      {s.icon}
                      <Ntext variant="text4" color="primary-100">
                        {s.title}
                      </Ntext>
                    </div>
                    <div className="flex flex-col items-start gap-4">
                      <Ntext variant="text2" color="m-light">
                        {s.description}
                      </Ntext>
                      {i !== 3 ? (
                        <div>
                          <ReadMore
                            onClick={() => showModal(s)}
                            color="secondary"
                            variant="text2"
                            text="Learn more"
                            className={"text-left"}
                            data={s}
                          />
                        </div>
                      ) : (
                        <div className="text-n-yellow px-4 py-[6px] rounded-2xl bg-n-grey6/30 w-min whitespace-pre text-sm">
                          Coming soon
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Checkout API - coming soon */}

              <div className={`${cardWrapStyle} hidden md:block`}>
                <div
                  className={`absolute h-full rounded-[10px]  bg-n-grey6 scroll-progress-2 transition-all duration-75 `}
                ></div>
                {/* <div className="md:hidden absolute  w-full h-[150%] px-8 py-4">{s.iconMobile}</div> */}
                <div className={cardInnerWrapper}>
                  <div className="flex items-center gap-[12px]">
                    <CheckoutApi />
                    <Ntext variant="text4" color="primary-100">
                      Checkout API
                    </Ntext>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Ntext variant="text2" color="m-light">
                      Process and manage your payments easily and securely wherever you are.
                    </Ntext>
                    <div className="text-n-yellow px-4 py-[6px] rounded-2xl bg-n-grey6/30 w-min whitespace-pre text-sm">
                      Coming soon
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {data.map((t, i) => (
                <>
                  <div key={t.subText} className={`${cardWrapStyle} md:hidden `}>
                    <div
                      className={`absolute h-full rounded-[10px]  bg-n-grey6 scroll-progress-${i} transition-all duration-75 `}
                    >
                      {" "}
                    </div>
                    {/* <div className="md:hidden absolute  w-full h-[150%] px-8 py-4">{s.iconMobile}</div> */}
                    <div className={cardInnerWrapper}>
                      <div className="flex items-center gap-[20px]">
                        {t.icon}
                        <Ntext variant="text5" color="primary-100">
                          {t.title}
                        </Ntext>
                      </div>
                      <div className="flex flex-col gap-4">
                        <Ntext variant="text3" color="m-light">
                          {t.description}
                        </Ntext>
                        {i !== 3 ? (
                          <ReadMore
                            onClick={() => showModal(t)}
                            color="secondary"
                            variant="text2"
                            text="Learn more"
                            className={"text-left"}
                          />
                        ) : (
                          <div className="text-n-yellow px-4 py-[6px] rounded-2xl bg-[#38383855] w-min whitespace-pre text-sm">
                            Coming soon
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div
                    key={t.cta}
                    className={`mt-5 mb-20 md:mb-0 md:mt-10  md:opacity-0 md:max-h-[680px] overflow-y-hidden transition-opacity duration-1000  section-two-rect-card-no-${i} md:absolute md:top-7`}
                  >
                    {t.image}
                  </div>
                </>
              ))}

              {/* Checkout Api coming soon */}
              <div className={`${cardWrapStyle} md:hidden mb-5 md:mb-0 `}>
                <div
                  className={`absolute h-full rounded-[10px]  bg-n-grey6 scroll-progress-2 transition-all duration-75 `}
                >
                  {" "}
                </div>
                {/* <div className="md:hidden absolute  w-full h-[150%] px-8 py-4">{s.iconMobile}</div> */}
                <div className={cardInnerWrapper}>
                  <div className="flex items-center gap-[20px]">
                    <CheckoutApi />
                    <Ntext variant="text5" color="primary-100">
                      Checkout API
                    </Ntext>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Ntext variant="text3" color="m-light">
                      Process and manage your payments easily and securely wherever you are.
                    </Ntext>
                    <div className="text-n-yellow px-4 py-[6px] rounded-2xl bg-[#38383855] w-min whitespace-pre text-sm">
                      Coming soon
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

const cardWrapStyle = ctl(`
relative
md:w-[300px] 
w-full
h-[200px]
border-n-grey5 
bg-primary
border circle
cursor-pointer
rounded-[10px]
`);

const cardInnerWrapper = ctl(`
flex 
flex-col 
z-10
gap-[16px]
absolute
md:justify-around
justify-center
px-5
py-5
md:py-7
max-w-[340px]

`);
export { SectionTwo };
