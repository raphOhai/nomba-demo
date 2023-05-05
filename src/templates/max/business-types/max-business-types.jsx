import React, { useEffect } from "react";
import { maxFeatures } from "config/terminal";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIsMobile from "hooks/useIsMobile";
import ctl from "@netlify/classnames-template-literals";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const MaxBusinessTypes = ({ title }) => {
  const isMobile = useIsMobile();
  useEffect(() => {
    const fontSize = isMobile ? "32px" : "48px";
    // gsap.set(".section_header2", {
    //     // fontSize: 0,
    //     yPercent: 30,
    //     opacity: 0,
    // });
    gsap.to(".section_header2", {
      scrollTrigger: {
        trigger: ".section_header2",
        start: "top 15%",
        scrub: true,
        toggleActions: "play reverse restart reverse",
        end: "=+200px",
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
    <section className="pt-[150px] md:pt-[15rem] feature-section2">
      <Container>
        <div className="md:max-w-[671px] md:mx-auto section_header2 md:text-center">
          <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
      </Container>
    </section>
  );
};

const featureCard = ctl(`
flex flex-col justify-between p-[40px] h-[495px] md:h-[680px] md:mx-4 bg-primary
`);
const featureContainer = ctl(`
grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2  mt-[50px] md:mt-[100px]
`);
export { MaxBusinessTypes };
