import React, { useEffect } from "react";
import { InTheBox } from "config/terminal";
import { Container, Ntext } from "components";
import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);
const WhatsInTheBox = ({ title }) => {
  useEffect(() => {
    gsap.to(".section_header4", {
      scrollTrigger: {
        trigger: ".section_header4",
        start: "top 15%",
        scrub: true,
        toggleActions: "play reverse restart reverse",
        end: "=+400px",
      },
      opacity: 0.04,
      autoAlpha: 0,
      yPercent: -30,
      // fontSize: fontSize,
      xPercent: 0,
      duration: 0.4,
      ease: "easeIn",
    });
  });
  return (
    <section className="md:pt-[50px] feature-section4">
      <Container>
        <div className="md:max-w-[671px] md:mx-auto section_header4 md:text-center">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
      </Container>
      <div className="pt-[50px] md:pt-[100px]">
        <BoxSlider slides={InTheBox} />
      </div>
    </section>
  );
};
export { WhatsInTheBox };
