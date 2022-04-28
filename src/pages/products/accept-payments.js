import React from "react";
import Layout from "components/layout";
import { Testimonial } from "components";
import { AcceptPaymentTestimonials } from "config/testimonials";

import {
  Features,
  MoreThanCards,
  AcceptPaymentsPageHeader,
  AcceptPaymentsTimeline,
} from "templates/products/accept-payments";

const AcceptPaymentsPage = () => {
  return (
    <Layout title="Accept Payments">
      <AcceptPaymentsPageHeader />
      <MoreThanCards />
      <Features />
      <Testimonial
        testimonials={AcceptPaymentTestimonials}
        headingText="How businesses accept payments with Nomba"
      />
      <AcceptPaymentsTimeline />
    </Layout>
  );
};

export default AcceptPaymentsPage;
