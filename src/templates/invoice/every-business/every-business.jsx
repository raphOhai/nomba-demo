import React, { useEffect } from "react";

import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Ntext, SectionHeader } from "components";

gsap.registerPlugin(ScrollTrigger);
const EveryBusiness = ({ title, slides }) => {
  return (
    <section className="md:pt-[950px] pb-[100px] bg-primary  every-businesses">
      <Container>
        <SectionHeader className="md:max-w-[671px] md:mx-auto  md:text-center">
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
