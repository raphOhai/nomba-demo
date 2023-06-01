import React, { useEffect } from "react";

import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Ntext, SectionHeader } from "components";

gsap.registerPlugin(ScrollTrigger);
const EveryBusiness = ({ title, slides }) => {
  useEffect(() => {
    let panels = gsap.utils.toArray(".box-panel");
    gsap.to(".header-text-every-businesses", {
      scrollTrigger: {
        trigger: ".header-text-every-businesses",
        pin: true,
        start: "top top",
        pinSpacing: false,
        end: `+=${panels[0].offsetHeight + 140}px`,
        // end: "+=4000px",
      },
    });
  });
  return (
    <section className="md:pt-[950px] pb-[100px] bg-primary -pt-10 every-businesses">
      <Container>
        <SectionHeader className="md:max-w-[671px] md:mx-auto header-text-every-businesses md:text-center">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </SectionHeader>
        <BoxSlider slides={slides} />
      </Container>
    </section>
  );
};

export { EveryBusiness };
