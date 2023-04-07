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
import { HomepageTipsAndUpdate } from "templates";
import { Testimonial } from "components";
import { SmallBusinessTestimonials } from "config/testimonials";

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
          testimonials={SmallBusinessTestimonials}
          headingText="Hear what business partners have to say"
        />
      </div>
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default SmallBusiness;
