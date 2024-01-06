import Layout from "components/layout-max";
import React from "react";
import SeoConf from "config/seo/meta";
// import { Container } from "components";
import HeroUp from "templates/menueUpdate/hero/heroUp";
import Section1 from "templates/menueUpdate/menuSection2/section1";
import PictureCta from "templates/menueUpdate/menuSection3/pictureCta";
import { businessTool, eMenuTestimonial, howItworks } from "config/e-menu";
import { EmenuSection4Black } from "templates/menueUpdate/scrollInteraction";
import MultipleAnimator from "templates/menueUpdate/hero/hooks/animation";
// import { EmenuSection5, EmenuTestimonial, MenuSection6 } from "templates/e-menu";
import { CommonQuestions } from "components";
// import { EveryBusiness } from "templates/invoice";
import { HomepageTipsAndUpdate } from "templates";
import { Cart } from "components/checkout";
import { faqData } from "config/api";
import { EmenuSection5, MenuSection6, EmenuTestimonial, EveryBusiness } from "templates/e-menu";
const menu2 = () => {
  MultipleAnimator();
  return (
    <Layout title={SeoConf.max.title} description={SeoConf.max.description} useStickyNav={false}>
      <HeroUp />
      <Section1 />
      <PictureCta />
      <EmenuSection4Black
        tools={businessTool}
        headingText="Fully integrated tool for smoothly running your restaurant business"
      />
      <EmenuSection5 cards={howItworks} />
      <EmenuTestimonial headingText="Why businesses are choosing Nomba" testimonials={eMenuTestimonial} />
      <MenuSection6 />
      <CommonQuestions questions={faqData} />

      <EveryBusiness />
      <HomepageTipsAndUpdate />
      <div data-lenis-prevent>
        <Cart title="Get Started With Menu" type="Menu" />
      </div>
    </Layout>
  );
};

export default menu2;
