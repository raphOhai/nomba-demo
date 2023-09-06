import React, { useLayoutEffect, useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import { BoxSlider } from "./box-slider";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Container, Br, Ntext, SectionHeader, GetTerminal } from "components";
import useIsMobile from "hooks/useIsMobile";
import { AppContext } from "states/context";

gsap.registerPlugin(ScrollTrigger);
const EveryBusiness = ({ slides }) => {
  const { addToCart } = useContext(AppContext);

  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".box-panel");
      gsap.to(".header-text-every-business-mini", {
        scrollTrigger: {
          trigger: ".header-text-every-business-mini",
          pin: true,
          start: "top -10%",
          pinSpacing: false,
          end: `+=${(panels[0].offsetWidth - (window.innerWidth < 760 ? -50 : 280)) * panels.length}px`,

          // end: "+=4000px",
        },
      });
    });
    return () => ctx.revert();
  }, [isMobile]);
  return (
    <section className=" pb-[100px] bg-c-0 -pt-10 every-business-mini" id="business-types">
      <Container>
        <SectionHeader className="flex flex-row justify-between items-center header-text-every-business-mini  ">
          <div className="max-w-[700px]">
            <Ntext variant="h2" className="text-left" color="primary-100" data-animation="h">
              Designed for <Br on="desktop" /> businesses like yours
            </Ntext>
            <div className={heroButtonsContainer}>
              <GetTerminal onClick={() => addToCart(3)} text="Buy your POS" type="animate-button-reverse" />
            </div>
          </div>

          {slides.map((s, i) => (
            <div className={`b-title ${i !== 0 ? "" : "md:block"} hidden`}>
              <Ntext key={s.id} variant="h2" className="text-center" color={s.color} data-animation="h">
                <br /> {s.title}
              </Ntext>
            </div>
          ))}
        </SectionHeader>
      </Container>
      <BoxSlider slides={slides} />
    </section>
  );
};

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
md:items-center
w-full items-stretch 
mt-[30px]
`);

export { EveryBusiness };
