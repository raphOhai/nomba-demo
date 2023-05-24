import React, { useEffect } from "react";
import { Container, Ntext, SectionHeader } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctl from "@netlify/classnames-template-literals";
import { howItWorks } from "config/invoice";
import { HowItWorksSlider } from "./slider-how-it-works";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const HowInvoicingWorks = ({ title }) => {
  useEffect(() => {
    setTimeout(function () {
      let panels = gsap.utils.toArray(".how-it-works-container");

      let currentSection = panels[0];
      if (window.innerWidth > 767) {
        panels.forEach((panel, i) => {
          if (i !== 0) {
            gsap.set(panel, {
              opacity: 0,
            });
          }
          ScrollTrigger.create({
            trigger: panel,
            start: () => (panel.offsetHeight < window.innerHeight ? "top 18%" : "bottom bottom"), // if it's shorter than the viewport, we prefer to pin it at the top
            pin: true,
            pinSpacing: false,
            onToggle: self => self.isActive && setSection(panel),
          });
        });

        function setSection(newSection) {
          if (newSection !== currentSection) {
            gsap.to(currentSection, { autoAlpha: 0, opacity: 0 });
            gsap.to(newSection, { scale: 1, autoAlpha: 1, opacity: 1 });
            currentSection = newSection;
          }
        }
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
              scrub: true,
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
  });

  return (
    <section className="feature-section2 pb-[100px] md:pb-[150px] bg-primary" id="business-types">
      <Container>
        <SectionHeader className="md:max-w-[671px] md:mx-auto  md:text-center">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </SectionHeader>
        {howItWorks.map(h => (
          <div key={h.id} className={cardWrapStyle}>
            <div className="md:basis-1/2 how-it-works-image">
              <div>{h.image}</div>
            </div>
            <div className={cardContentStyle}>
              <div className={contentCardStyle}>
                <div>
                  <Ntext variant="text8" color="primary-100" className="mb-[28px]" data-animation="h">
                    {h.title}
                  </Ntext>
                </div>
                <div>
                  <Ntext variant="p16" color="m-light" className="">
                    {h.description}
                  </Ntext>
                </div>
              </div>
            </div>
          </div>
        ))}
        <HowItWorksSlider />
      </Container>
    </section>
  );
};

const cardWrapStyle = ctl(`
flex
md:flex-row
flex-col
md:gap-[100px]
gap-[50px]
pb-20
md:h-[100vh]
items-end
how-it-works-container
`);

const cardContentStyle = ctl(`
md:basis-1/2 
md:h-[250px] 
flex  
flex-col 
justify-end 
how-it-works-content
`);

const contentCardStyle = ctl(`
md:h-[250px]
max-w-[455px]
flex 
flex-col 
justify-end 
how-it-works-content-card
`);
export { HowInvoicingWorks };