import React, { useEffect } from "react";
import Layout from "components/layout-max";
import { WhatsInTheBox } from "components/in-the-box";
import { Br } from "components";
import {
  MaxpageHero,
  TerminalSectionInteractions,
  MaxFeatures,
  ExperienceMax,
  MaxBusinessTypes,
  GetMax,
  MaxPricing,
} from "templates/max";
import { split } from "animations/text";
import { AccordionData, InTheBox } from "config/terminal";
import { CommonQuestions } from "components/common-questions";
import { Cart } from "components/checkout";

const MaxPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="Max" index={0}>
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

      <ExperienceMax
        title={
          <>
            Experience the MAX in your <Br on="desktop" /> payment collection
          </>
        }
        description="Designed to the last pixel to give you the max performance - faster transaction, long lasting battery, high speed printer, durable and reliable POS terminal."
      />
      <MaxBusinessTypes title="What Businesses Like Yours Think of Nomba MAX." />
      <WhatsInTheBox title="What’s in the box?" InTheBox={InTheBox} />
      <MaxPricing title="Pricing & Specifications" price="₦85,000" leasePrice="₦45,000" />
      <CommonQuestions questions={AccordionData} />

      <GetMax
        title={<>Get Nomba Max, Get Better</>}
        description={<>For better performance and smoother payment experience, Nomba MAX is here for you.</>}
      />
      <div data-lenis-prevent>
        <Cart />
      </div>
    </Layout>
  );
};

export default MaxPage;
