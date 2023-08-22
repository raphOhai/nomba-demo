import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br, Testimonial, GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { split } from "animations/text";
import { faqData, apiTestimonial } from "config/api";
import { CommonQuestions } from "components/common-questions";
import SeoConf from "config/seo/meta";
import { Features, ApiHero } from "templates/api";

const ApiPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title={SeoConf.api.title} description={SeoConf.api.description} useStickyNav={false}>
      <ApiHero
        title={
          <>
            Elevate your FinTech <Br on="desktop" /> Vision with our APIs
          </>
        }
        subtext="The most powerful Virtual Account, Seamless Transfers, and Real-Time Webhooks to scale your business"
      />

      <Features
        title={
          <>
            Unleash the Potential of Our <Br on="desktop" /> Dynamic API <Br on="mobile" />
            Solutions
          </>
        }
        description={<>Discover the tools that will supercharge your Financial innovations</>}
      />
      <Testimonial
        className="!bg-black"
        headingText={<>Hear what business partners have to say</>}
        testimonials={apiTestimonial}
      />
      <CommonQuestions questions={faqData} />

      <GetStarted title="Get started with Nomba Invoice today" />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default ApiPage;
