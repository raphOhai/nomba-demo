import React, { useEffect } from "react";
import Layout from "components/layout-max";
import { Br, Testimonial, GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { split } from "animations/text";
import { faqData, apiTestimonial, categories, apiSection } from "config/api";
import { CommonQuestions } from "components/common-questions";
import SeoConf from "config/seo/meta";
import { Features, ApiHero, DocSection, SectionTwo } from "templates/api";
import { Cart } from "components/product-checkout";

const ApiPage = () => {
  useEffect(() => {
    split();
  }, []);
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
      <SectionTwo
        title={<>Checkout our Amazing Offerings</>}
        description={"Here's how our APIs come together to bring ideas to life"}
        data={apiSection}
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
      <DocSection
        title={
          <>
            Easy, Seamless Developer <Br on="desktop" /> Access and Experience
          </>
        }
        description={
          <>
            A simple, elegant interface so you can start integrating in minutes. Leverage our APIs to transform your
            businesses and products
          </>
        }
        data={categories}
      />
      <Testimonial
        className="!bg-black"
        headingText={<>Hear what business partners have to say</>}
        testimonials={apiTestimonial}
      />
      <CommonQuestions questions={faqData} />

      <GetStarted title="Get started with Nomba API today" />
      <HomepageTipsAndUpdate />
      <div data-lenis-prevent>
        <Cart title="Get Started With Nomba for Developer" type="Developers" />
      </div>
    </Layout>
  );
};

export default ApiPage;
