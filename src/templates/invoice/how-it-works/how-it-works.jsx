import React, { useEffect, useState, useRef } from "react";
import { maxFeatures } from "config/terminal";
import { Container, Ntext, SectionHeader } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIsMobile from "hooks/useIsMobile";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { howItWorks } from "config/invoice";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const HowInvoicingWorks = ({ title }) => {
  const isMobile = useIsMobile();
  const [playVideo, setPlayVid] = useState(false);
  const hero_vid = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      let pin = document.querySelector(".how-it-works-image");
      let content = document.querySelector(".how-it-works-content");
      let g = document.querySelectorAll(".how-it-works-container");
      let panels = gsap.utils.toArray(".how-it-works-container");
      let tops = panels.map(panel => ScrollTrigger.create({ trigger: panel, start: "top top" }));

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
            start: () => (panel.offsetHeight < window.innerHeight ? "top 20%" : "bottom bottom"), // if it's shorter than the viewport, we prefer to pin it at the top
            pin: true,
            markers: true,
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
              end: "+=700px",
            },
            opacity: 1,
            yPercent: 0,
            duration: 1,
            ease: "easeOut",
          });
        });
      }

      // ScrollTrigger.create({
      //   snap: {
      //     snapTo: (progress, self) => {
      //       let panelStarts = tops.map(st => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
      //         snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
      //       return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
      //     },
      //     duration: 0.2
      //   }
      // });
      // if (window.innerWidth > 760) {
      //   ScrollTrigger.create({
      //     trigger: ".how-it-works-image",
      //     start: "center center",
      //     end: `${content.offsetHeight * 1} ${pin.offsetHeight}`,
      //     pin: true,
      //     markers: true
      //   });
      // }

      // g.forEach(item => {
      //   gsap.set(item, {
      //     opacity: 0.1,
      //     // yPercent: 30,
      //   });
      //   gsap.to(item, {
      //     scrollTrigger: {
      //       trigger: item,
      //       start: "top 90%",
      //       scrub: true,
      //       end: "+=700px",
      //     },
      //     opacity: 1,
      //     yPercent: 0,
      //     duration: 1,
      //     ease: "easeOut",
      //   });
      // });
    }, 1000);
  });

  const playVid = () => {
    setPlayVid(!playVideo);
  };
  const close = () => {
    setPlayVid(!playVideo);
  };

  return (
    <section className="feature-section2 md:pb-[800px]" id="business-types">
      <Container>
        <SectionHeader className="md:max-w-[671px] md:mx-auto  md:text-center mb-5">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </SectionHeader>
        {howItWorks.map(h => (
          <div
            key={h.id}
            className=" flex md:flex-row flex-col md:gap-[100px] gap-[50px] pb-20 items-end how-it-works-container"
          >
            <div className="md:basis-1/2 how-it-works-image">
              <div>{h.image}</div>
            </div>
            <div className="md:basis-1/2 md:h-[250px] flex  flex-col justify-end how-it-works-content">
              <div className="md:h-[250px] max-w-[455px] flex flex-col justify-end how-it-works-content-card">
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
        {/* <InvoiceTestimonial testimonials={maxTestimonial} headingText="Don’t just take our word for it" /> */}
      </Container>
    </section>
  );
};

export { HowInvoicingWorks };
