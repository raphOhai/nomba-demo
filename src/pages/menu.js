import Layout from "components/layout-max";
import React, { useEffect } from "react";
import SeoConf from "config/seo/meta";
import HeroUp from "templates/menueUpdate/hero/heroUp";
import Section1 from "templates/menueUpdate/menuSection2/section1";
import PictureCta from "templates/menueUpdate/menuSection3/pictureCta";
import { businessTool, eMenuTestimonial, howItworks } from "config/e-menu";
import { EmenuSection4Black } from "templates/menueUpdate/scrollInteraction";
import MultipleAnimator from "templates/menueUpdate/hero/hooks/animation";
import { CommonQuestions } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { Cart } from "components/checkout";
import { faqData } from "config/e-menu";
import { EmenuSection5, MenuSection6, EmenuTestimonial, EveryBusiness } from "templates/e-menu";
import { ReactLenis } from "@studio-freight/react-lenis";
import { useRef } from "react";
import gsap from "gsap";
const Menu2 = () => {
  MultipleAnimator();
  const lenisRef = useRef();
  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <Layout title={SeoConf.menu.title} description={SeoConf.menu.description} useStickyNav={false}>
        <HeroUp />
        <Section1 />
        <PictureCta />
        <EmenuSection4Black
          tools={businessTool}
          headingText="Fully integrated tool for smoothly running your restaurant business"
        />
        <EmenuSection5 cards={howItworks} />
        <EmenuTestimonial headingText="Why businesses are choosing Nomba" testimonials={eMenuTestimonial} />
        <MenuSection6 />
        <CommonQuestions questions={faqData} />

        <EveryBusiness />
        <HomepageTipsAndUpdate />
        <div data-lenis-prevent>
          <Cart title="Get Started With Menu" type="Menu" />
        </div>
      </Layout>
    </ReactLenis>
  );
};

export default Menu2;
