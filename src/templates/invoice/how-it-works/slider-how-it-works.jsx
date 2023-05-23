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
    <section className="md:pt-[950px]   feature-section4">
      <BoxSlider slides={howItWorksSlider} />
    </section>
  );
};

export { HowItWorksSlider };
