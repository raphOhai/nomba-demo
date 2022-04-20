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
        heading="We care about businesses and their needs"
        subheading="We value being human, embracing change, and striving for excellence"
      />
      <ProTerminal />
      <CaseStudies />
    </Layout>
  );
};

export default AboutUsPage;
