import React, { useEffect, useContext } from "react";
import { Container, Ntext, SectionHeader } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctl from "@netlify/classnames-template-literals";
import { howItWorks } from "config/checkout-api";
import { AppContext } from "states/context";
import Arrow from "svgs/readmore.svg";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const HowInvoicingWorks = ({ title }) => {
  const { onOpen } = useContext(AppContext);

  useEffect(() => {
    setTimeout(function () {
      let panels = gsap.utils.toArray(".how-it-works-container");
      let titles = gsap.utils.toArray(".how-it-works-title");

      let currentSection = panels[0];
      if (window.innerWidth > 767) {
        panels.forEach((panel, i) => {
          if (i !== 0) {
            gsap.set(panel, {
              opacity: 0,
              yPercent: 20,
            });
            gsap.set(titles[i], {
              opacity: 1,
              autoAlpha: 0,
              yPercent: 50,
              transformStyle: "preserve-3d",
            });
          }

          ScrollTrigger.create({
            trigger: panel,
            start: () => (panel.offsetHeight < window.innerHeight ? "top 33%" : "bottom bottom"), // if it's shorter than the viewport, we prefer to pin it at the top
            pin: true,
            pinSpacing: false,
            onToggle: self => self.isActive && setSection(panel, i),
          });
        });

        function setSection(newSection, n) {
          if (newSection !== currentSection) {
            // gsap.to(titles[n], { opacity: 1, yPercent: 0, duration: 1, ease: "easeOut" });
            gsap.to(currentSection, { autoAlpha: 0, opacity: 0 });
            gsap.to(newSection, { scale: 1, autoAlpha: 1, opacity: 1 });
            currentSection = newSection;
          }
        }

        gsap.to(".header-text", {
          scrollTrigger: {
            trigger: ".header-text",
            pin: true,
            start: "top top",
            pinSpacing: false,
            end: `+=${panels[0].offsetHeight * panels.length + 200}px`,
            // end: "+=4000px",
          },
        });
      } else {
        panels.forEach(item => {
          gsap.set(item, {
            opacity: 0.1,
            yPercent: 30,
          });
          gsap.to(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              scrub: 1,
              end: "+=500px",
            },
            opacity: 1,
            yPercent: 0,
            duration: 0.7,
            ease: "easeOut",
          });
        });
      }
    }, 1000);
  }, []);

  return (
    <section className="invoice-section3 md:pb-[150px] bg-primary" id="business-types">
      <Container>
        <SectionHeader className="md:max-w-[671px] md:mx-auto header-text md:text-center md:mb-[80px] ">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </SectionHeader>
        {howItWorks.map((h, i) => (
          <div key={h.id} className={`${cardWrapStyle} ${i === howItWorks.length - 1 ? "how-it-works-last" : ""}`}>
            <div className={cardContentStyle}>
              <div className={contentCardStyle}>
                <div>
                  <Ntext
                    variant="text8"
                    color="primary-100"
                    className="mb-[28px] how-it-works-title"
                    data-animation="j"
                  >
                    {h.title}
                  </Ntext>
                </div>
                <div>
                  <Ntext variant="p16" color="m-light" className="">
                    {h.description}
                  </Ntext>
                </div>
                <div className={readmoreStylDefault} onClick={onOpen}>
                  <Ntext
                    variant={"p16"}
                    color="secondary"
                    className={`peer !font-medium !text-[16px]  transition-all duration-300`}
                    weight="600"
                  >
                    Get Started on menu
                  </Ntext>{" "}
                  <Arrow className={arrowStyle} />
                </div>
              </div>
            </div>
            <div className=" how-it-works-image">
              <div>{h.image}</div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

const cardWrapStyle = ctl(`
flex
md:flex-row
flex-col
md:justify-between
md:gap-[0px]
gap-[50px]
pb-20
md:h-[70vh]
md:items-center
items-end
how-it-works-container
`);

const cardContentStyle = ctl(`


flex  
flex-col 
justify-end 
how-it-works-content
`);

const contentCardStyle = ctl(`

max-w-[560px]
flex 
flex-col 
justify-end 
how-it-works-content-card
`);
const readmoreStylDefault = ctl(`
inline-flex
items-center
group
mt-[30px]
cursor-pointer
`);

const arrowStyle = ctl(`
ml-2
transition-all
duration-300
peer-hover:ml-4
hover:ml-4
`);
export { HowInvoicingWorks };