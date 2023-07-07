import React, { useEffect } from "react";

import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const EveryBusiness = ({ title, slides }) => {
  return (
    <section className=" opacity-0">
      <BoxSlider slides={[]} />
    </section>
  );
};

export { EveryBusiness };
