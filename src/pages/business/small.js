import React from "react";

import Layout from "components/layout";
import {
  GrowingYourSales,
  EasySolutionsForSmallBusiness,
  AnyTypeOfBusiness,
  MakeYourBusinessEasy,
  SmallPageHeader,
  SmallBusinessInfoGridSection,
} from "templates/business/small";
import { Testimonial } from "components";
import { SmallBusinessTestimonials } from "config/testimonials";

const SmallBusiness = () => {
  return (
    <Layout title="Small Business">
      <SmallPageHeader />
      <GrowingYourSales />
      <EasySolutionsForSmallBusiness />
      <AnyTypeOfBusiness />
      <MakeYourBusinessEasy />
      <SmallBusinessInfoGridSection />
      <div className="pt-2">
        <Testimonial
          testimonials={SmallBusinessTestimonials}
          headingText="Hear what business owners have to say"
        />
      </div>
    </Layout>
  );
};

export default SmallBusiness;
