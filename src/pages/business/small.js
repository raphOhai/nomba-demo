import React from "react";

import Layout from "components/layout";
import {
  GrowingYourSales,
  MakeYourBusinessEasy,
  SmallPageHeader,
  SmallBusinessTipsAndUpdates,
} from "templates/business/small";
import { Testimonial } from "components";
import { SmallBusinessTestimonials } from "config/testimonials/small-business";

const SmallBusiness = () => {
  return (
    <Layout title="Small Business">
      <SmallPageHeader />
      <GrowingYourSales />
      <MakeYourBusinessEasy />
      <SmallBusinessTipsAndUpdates />
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
