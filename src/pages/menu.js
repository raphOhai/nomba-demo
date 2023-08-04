import React, { useEffect, useRef } from "react";

import Layout from "components/layout-max";
import { GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { split } from "animations/text";
import { CommonQuestions } from "components/common-questions";

import {
  EmenuHero,
  EmenuSection2,
  EmenuSection4,
  EmenuSection5,
  EmenuTestimonial,
  EveryBusiness,
} from "templates/e-menu";

import { eMenuTestimonial, businessTool, howItworks, faqData } from "config/e-menu";
import { gsap } from "gsap";

import { ReactLenis } from "@studio-freight/react-lenis";
const EmenuPage = () => {
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
  useEffect(() => {
    split();
  });
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <Layout title="Menu" useStickyNav={false}>
        <EmenuHero />
        <EmenuSection2 />
        <EmenuSection4
          tools={businessTool}
          headingText="Fully integrated tool for smoothly running your restaurant business"
        />
        <EmenuSection5 cards={howItworks} />
        <EmenuTestimonial headingText="Why businesses are choosing Nomba" testimonials={eMenuTestimonial} />
        <CommonQuestions questions={faqData} />

        <GetStarted title="Get started with menu today" />

        <EveryBusiness />
        <HomepageTipsAndUpdate />
      </Layout>
    </ReactLenis>
  );
};

export default EmenuPage;
