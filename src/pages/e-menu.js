import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
// import { HowInvoicingWorks, EveryBusiness } from "templates/invoice";
import { split } from "animations/text";
import { faqData } from "config/invoice";
import { CommonQuestions } from "components/common-questions";
import { everyBusinesses } from "config/invoice";

import {
  EmenuHero,
  EmenuSection2,
  EmenuSection4,
  EmenuSection5,
  EmenuTestimonial,
  EveryBusiness,
} from "templates/e-menu";

import { eMenuTestimonial, businessTool, howItworks } from "config/e-menu";

const EmenuPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="E-menu" useStickyNav={false}>
      <EmenuHero />
      <EmenuSection2 />
      <EmenuSection4
        tools={businessTool}
        headingText="Fully integrated tool for smoothly running your restaurant business"
      />
      <EmenuSection5 cards={howItworks} />
      <EmenuTestimonial headingText="Why businesses are choosing Nomba" testimonials={eMenuTestimonial} />
      <CommonQuestions questions={faqData} />

      <GetStarted title="Get started with E-menu today" />

      {/* <InvoiceTools title="Nomba Invoice as a tool to upgrade your business. " invoiceTools={InvoiceBusinessTools} /> */}
      {/* <HowInvoicingWorks title="How Nomba Invoicing is Perfect For Your Business." /> */}
      <EveryBusiness title="Built for every kind of business" slides={everyBusinesses} />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default EmenuPage;
