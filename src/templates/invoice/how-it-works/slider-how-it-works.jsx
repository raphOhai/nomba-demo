import React from "react";
import { howItWorksSlider } from "config/invoice";
import { Container } from "components";
import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);
const HowItWorksSlider = () => {
  return (
    <section className="md:pt-[800px] pb-[50px] md:pb-[150px]  feature-section4">
      {/* <Container> */}
      <div className="pt-[50px] md:pt-[100px]">
        <BoxSlider slides={howItWorksSlider} />
      </div>
      {/* </Container> */}
    </section>
  );
};

export { HowItWorksSlider };
