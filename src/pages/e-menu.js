import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { TestimonialLight, CommonQuestions, GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { EmenuHero, EmenuSection2, EmenuSection4, EmenuSection5, EmenuTestimonial } from "templates/e-menu";
import { faqData } from "config/invoice";
import { eMenuTestimonial, businessTool, howItworks } from "config/e-menu";
import { split } from "animations/text";
// import scroll from "../animations/scroll";
// // import "../style/lenis/lenis.scss";
// // scroll();
const EmenuPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="E-menu" useStickyNav={false}>
      <EmenuHero />
      <EmenuSection2 />
      <EmenuSection4
        tools={businessTool}
        headingText="Fully integrated tool for smoothly running your restaurant business"
      />
      <EmenuSection5 cards={howItworks} />
      <EmenuTestimonial headingText={<>Why businesses are choosing Nomba</>} testimonials={eMenuTestimonial} />
      <CommonQuestions questions={faqData} />

      <GetStarted title="Get started with E-menu today" />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default EmenuPage;
