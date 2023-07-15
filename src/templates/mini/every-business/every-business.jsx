import React, { useEffect } from "react";

import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Ntext, SectionHeader } from "components";

gsap.registerPlugin(ScrollTrigger);
const EveryBusiness = ({ slides }) => {
  useEffect(() => {
    let panels = gsap.utils.toArray(".box-panel");
    gsap.to(".header-text-every-business-mini", {
      scrollTrigger: {
        trigger: ".header-text-every-business-mini",
        pin: true,
        start: "top top",
        pinSpacing: false,
        end: `+=${panels[0].offsetHeight + 2500}px`,

        // end: "+=4000px",
      },
    });
  });
  return (
    <section className=" pb-[100px] bg-c-0 -pt-10 every-business-mini">
      <Container>
        <SectionHeader className="flex flex-row justify-between items-baseline header-text-every-business-mini ">
          <div className="max-w-[600px]">
            <Ntext variant="h2" className="text-left" color="primary-100" data-animation="h">
              Designed for businesses like yours
            </Ntext>
          </div>

          {slides.map((s, i) => (
            <div className={`b-title ${i === 0 ? "" : "hidden"}`}>
              <Ntext key={s.id} variant="h2" className="text-center" color={s.color} data-animation="h">
                <br /> {s.title}
              </Ntext>
            </div>
          ))}
        </SectionHeader>
        <BoxSlider slides={slides} />
      </Container>
    </section>
  );
};

export { EveryBusiness };
