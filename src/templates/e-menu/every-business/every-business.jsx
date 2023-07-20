import React from "react";

import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const EveryBusiness = () => {
  return (
    <section className=" opacity-0">
      <BoxSlider slides={[]} />
    </section>
  );
};

export { EveryBusiness };
