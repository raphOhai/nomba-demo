import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br } from "components";
import { CaseStudies, ProTerminal } from "templates/about-us";
import { MaxpageHero, TerminalSectionInteractions, MaxFeatures, ExperienceMax, CommonQuestions } from "templates/max";
import { split } from "animations/text";

const MaxPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="Max">
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
        description={
          <>
            Designed to the last pixel to give you the max performance - faster transaction, long lasting battery, high
            speed printer, durable and reliable POS terminal.
          </>
        }
      />
      <CommonQuestions />
      <ProTerminal />
      <CaseStudies />
    </Layout>
  );
};

export default MaxPage;
