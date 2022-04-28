import React from "react";

import Layout from "components/layout";
import {
  Convenience,
  HandlingBusinessPayments,
  LargePageHeader,
  LargeBusinessTipsAndUpdates,
} from "templates/business/large";
import { LargeBusinessTestimonials } from "config/testimonials";
import { Testimonial } from "components";

const LargeBusiness = () => {
  return (
    <Layout title="Large Business">
      <LargePageHeader />
      <HandlingBusinessPayments />
      <Convenience />
      <LargeBusinessTipsAndUpdates />

      <div className="pt-2">
        <Testimonial
          testimonials={LargeBusinessTestimonials}
          headingText="Hear what business owners have to say"
        />
      </div>
    </Layout>
  );
};

export default LargeBusiness;
