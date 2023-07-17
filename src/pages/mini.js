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
  WhyMini,
  MiniFeatures,
  MiniFeatures2,
  MiniHero,
  TerminalSectionInteractions,
} from "templates/mini";
import { split } from "animations/text";
import { Testimonial, AccordionData, everyBusinesses, miniFeatures, miniBenefits } from "config/mini";
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
        <MiniPricing title="Pricing & Specifications" price="₦25,000" leasePrice="₦15,000" />

        <ThinkOfMini title="What Businesses Like Yours Think of Nomba Mini." />
        <MiniTestimonial headingText="Why businesses are choosing Nomba" testimonials={Testimonial} />
        <WhatsInTheBox title="What’s in the box?" />
        <CommonQuestions questions={AccordionData} />

        <GetMini
          title={<>Get Nomba Mini, Get Better</>}
          description={<>For better performance and smoother payment experience, Nomba Mini is here for you.</>}
        />

        <HomepageTipsAndUpdate />
      </Layout>
    </ReactLenis>
  );
};

export default MiniPage;
