import React, { useEffect, useRef } from "react";
import Layout from "components/layout-max";
import { Br } from "components";
import { WhatsInTheBox } from "components/in-the-box";
import {
  MiniTestimonial,
  MiniPricing,
  GetMini,
  ThinkOfMini,
  EveryBusiness,
  ExperienceMini,
  WhyMini,
  MiniFeatures3,
  MiniHeroV5,
} from "templates/mini";
import { split } from "animations/text";
import { AccordionData, everyBusinesses, miniFeatures, miniBenefitsV2, InTheBox, miniTestimonial } from "config/mini";
import { CommonQuestions } from "components/common-questions";
import { HomepageTipsAndUpdate } from "templates";
import { gsap } from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Cart } from "components/checkout";
import SeoConf from "config/seo/meta";

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
      <Layout title={SeoConf.mini.title} description={SeoConf.mini.description} useStickyNav={true} index={3}>
        <MiniHeroV5 benefits={miniBenefitsV2} />
        <EveryBusiness slides={everyBusinesses} />
        <ExperienceMini
          title={
            <>
              Experience the Mini in your <Br on="desktop" /> payment collection
            </>
          }
        />
        <MiniPricing price="₦25,000" leasePrice="₦15,000" />
        <MiniFeatures3
          title={
            <>
              Unlike any POS you’ve <Br on="all" /> used before
            </>
          }
          features={miniFeatures}
        />
        <WhyMini />

        <ThinkOfMini title="Why Businesses Rely on Nomba Mini as their Payment Padi" />
        <MiniTestimonial headingText="Businesses Love Nomba Mini" testimonials={miniTestimonial} />
        <WhatsInTheBox title="What’s in the box?" InTheBox={InTheBox} />
        <CommonQuestions questions={AccordionData} className="padding-100" />

        <GetMini
          title={<>Everyone deserves a Payment Padi</>}
          description={<>Get your Nomba Mini for better performance and smoother payment experience at lower costs</>}
        />

        <HomepageTipsAndUpdate />
        <div data-lenis-prevent>
          <Cart />
        </div>
      </Layout>
    </ReactLenis>
  );
};

export default MiniPage;
