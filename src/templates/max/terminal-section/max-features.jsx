import React, { useEffect } from "react";
import { maxFeatures } from "config/terminal";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import useIsMobile from "hooks/useIsMobile";
import ctl from "@netlify/classnames-template-literals";
import { FeatureCards } from "./feature-cards";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const MaxFeatures = ({ title, description }) => {
  // const isMobile = useIsMobile();
  useEffect(() => {
    // const fontSize = isMobile ? "32px" : "48px";
    gsap.set(".section_header1", {
      // fontSize: 0,
      yPercent: 30,
      opacity: 0.05,
    });
    gsap.to(".section_header1", {
      scrollTrigger: {
        trigger: ".feature-section",
        start: "top 90%",
        scrub: true,
        toggleActions: "play reverse restart reverse",
        end: "+=700px",
      },
      opacity: 1,
      // fontSize: fontSize,
      xPercent: 0,
      yPercent: -20,
      duration: 2,
      ease: "easeOut",
    });

    const features = gsap.utils.toArray(".features");
    gsap.set(features, {
      opacity: 0,
      xPercent: 0,
      yPercent: 30,
    });
    gsap.to(features, {
      scrollTrigger: {
        trigger: ".feature-section",
        start: "top 80%",
        scrub: true,
        end: "=+1000px",
      },
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      stagger: 1.5,
      duration: 1.5,
      ease: "power3",
    });
  });
  return (
    <section className="mt-[150px] md:mt-[200px] feature-section" id="features">
      <Container>
        <div className="md:max-w-[572px] md:mx-auto section_header1 md:text-center">
          <Ntext variant="h2" className="md:text-center" color="primary-100">
            {title}
          </Ntext>
          <Ntext variant="text3" className="md:px-5 mt-[28px]" color="m-grey1">
            {description}
          </Ntext>
        </div>
        <FeatureCards />
      </Container>
    </section>
  );
};

export { MaxFeatures };
