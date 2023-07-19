import React, { useEffect, useRef } from "react";
import Layout from "components/layout-max";
import { Br } from "components";
import { WhatsInTheBox } from "templates/max";

import {
  MiniTestimonial,
  MiniPricing,
  GetMini,
  ThinkOfMini,
  EveryBusiness,
  ExperienceMini,
  WhyMini,
  MiniFeatures2,
  MiniHero,
  TerminalSectionInteractions,
} from "templates/mini";
import { split } from "animations/text";
import { Testimonial, AccordionData, everyBusinesses, miniFeatures, miniBenefits, InTheBox } from "config/mini";
import { CommonQuestions } from "components/common-questions";
import { HomepageTipsAndUpdate } from "templates";
import { gsap } from "gsap";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

const MiniPage = () => {
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
      <Layout title="Mini" useStickyNav={false}>
        <MiniHero
          title={
            <>
              {" "}
              Switch to the MAX, <Br on="all" /> experience more than payments!
            </>
          }
          benefits={miniBenefits}
        />
        <TerminalSectionInteractions />
        <MiniFeatures2
          title={
            <>
              Unlike any POS you’ve <Br on="all" /> used before
            </>
          }
          features={miniFeatures}
        />
        <WhyMini />
        <EveryBusiness slides={everyBusinesses} />
        <ExperienceMini
          title={
            <>
              Experience the Mini in your <Br on="desktop" /> payment collection
            </>
          }
        />
        <MiniPricing title="Pricing & Specifications" price="₦25,000" leasePrice="₦15,000" />

        <ThinkOfMini title="Why Businesses Rely on Nomba Mini as their Payment Padi." />
        <MiniTestimonial headingText="Businesses Love Nomba Mini." testimonials={Testimonial} />
        <WhatsInTheBox title="What’s in the box?" InTheBox={InTheBox} />
        <CommonQuestions questions={AccordionData} />

        <GetMini
          title={<>Everyone deserves a Payment Padi</>}
          description={<>Get your Nomba Mini for better performance and smoother payment experience at lower costs.</>}
        />

        <HomepageTipsAndUpdate />
      </Layout>
    </ReactLenis>
  );
};

export default MiniPage;
