import React from "react";

import Layout from "components/layout";

import {
  CaseStudies,
  ProTerminal,
  BusinessStageSlide,
  Accordion,
  AboutUsPageHeader,
  AboutTimeline,
  OurBigStory,
} from "templates/about-us";

const AboutUsPage = () => {
  return (
    <Layout title="About us">
      <AboutUsPageHeader />
      <OurBigStory />
      <AboutTimeline />
      <BusinessStageSlide />
      <Accordion
        heading="Our EPIC core values support and drive our mission"
        subheading="We care, we are committed, we take our work seriously, and we work together"
      />
      <ProTerminal />
      <CaseStudies />
    </Layout>
  );
};

export default AboutUsPage;
