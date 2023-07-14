import React, { useEffect, useRef } from "react";
import Layout from "components/layout-max";
import { Br } from "components";
import { MaxpageHero, TerminalSectionInteractions, MaxFeatures, WhatsInTheBox } from "templates/max";
import { EveryBusiness } from "templates/every-business";
import { MiniTestimonial, MiniPricing, GetMini, ThinkOfMini } from "templates/mini";
import { split } from "animations/text";
import { Testimonial, AccordionData } from "config/mini";
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
      <Layout title="Mini">
        <MaxpageHero
          title={
            <>
              {" "}
              Switch to the MAX, <Br on="all" /> experience more than payments!
            </>
          }
          description="Get Nomba MAX, the all-in-one business solution that offers more than just payment processing."
        />
        <TerminalSectionInteractions />
        <MaxFeatures
          title={
            <>
              Unlike any POS you’ve <Br on="all" /> used before
            </>
          }
          description={
            <>
              Comprised of the best features to give you an efficient and seamless <Br on="desktop" /> performance.
            </>
          }
        />

        <MiniPricing title="Pricing & Specifications" price="₦25,000" leasePrice="₦15,000" />

        <ThinkOfMini title="What Businesses Like Yours Think of Nomba Mini." />
        <MiniTestimonial headingText="Why businesses are choosing Nomba" testimonials={Testimonial} />
        <WhatsInTheBox title="What’s in the box?" />
        <CommonQuestions questions={AccordionData} />

        <GetMini
          title={<>Get Nomba Mini, Get Better</>}
          description={<>For better performance and smoother payment experience, Nomba Mini is here for you.</>}
        />
        <EveryBusiness />
        <HomepageTipsAndUpdate />
      </Layout>
    </ReactLenis>
  );
};

export default MiniPage;
