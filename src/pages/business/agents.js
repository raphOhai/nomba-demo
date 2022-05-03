import React from "react";

import Layout from "components/layout";
import { AgentTestimonials } from "config/testimonials";
import { Testimonial } from "components";
import {
  Benefits,
  CreatingWealth,
  AgentPageHeader,
} from "templates/business/agents";

const AgentsBusiness = () => {
  return (
    <Layout title="Mobile Money Agents">
      <AgentPageHeader />
      <CreatingWealth />
      <Benefits />
      <Testimonial
        testimonials={AgentTestimonials}
        headingText="What our agents think about us"
      />
    </Layout>
  );
};

export default AgentsBusiness;
