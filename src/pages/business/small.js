import React from "react";

import Layout from "components/layout";
import {
  GrowingYourSales,
  EasySolutionsForSmallBusiness,
  AnyTypeOfBusiness,
  Paralax,
  SmallPageHeader,
  SmallBusinessInfoGridSection,
  PerfectSolutions,
} from "templates/business/small";
import { Testimonial } from "components";
import { SmallBusinessTestimonial } from "config/testimonials";

const SmallBusiness = () => {
  return (
    <Layout title="Small Business">
      <SmallPageHeader />
      <GrowingYourSales />
      <EasySolutionsForSmallBusiness />
      <AnyTypeOfBusiness />
      <PerfectSolutions />
      <Paralax />
      <div className="">
        <Testimonial
          testimonial={SmallBusinessTestimonial}
          headingText="Hear what business owners have to say"
        />
      </div>
      <SmallBusinessInfoGridSection />
    </Layout>
  );
};

export default SmallBusiness;
