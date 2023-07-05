import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br, Testimonial, GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { InvoicepageHero, SponsorList, InvoiceTools, HowInvoicingWorks, EveryBusiness } from "templates/invoice";
import { split } from "animations/text";
import { InvoiceBusinessTools, faqData, invoiceTestimonial } from "config/invoice";
import { CommonQuestions } from "components/common-questions";
import { everyBusinesses } from "config/invoice";
import scroll from "../animations/scroll";
import "../style/lenis/lenis.scss";
scroll();
const InvoicePage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="Invoice" useStickyNav={false}>
      <InvoicepageHero
        title={
          <>
            {" "}
            Organise your billing process <Br on="desktop" /> with Nomba invoice
          </>
        }
        description="Enjoy benefits of automated reminders, helping you to stay on top of outstanding payments"
      />

      <SponsorList title="Over 10,000+ businesses use Nomba Invoice to get paid daily " />
      <InvoiceTools title="Nomba Invoice as a tool to upgrade your business. " invoiceTools={InvoiceBusinessTools} />
      <HowInvoicingWorks title="How Nomba Invoicing is Perfect For Your Business." />
      <EveryBusiness title="Built for every kind of business" slides={everyBusinesses} />
      <Testimonial
        className="!bg-black"
        headingText={<>Hear what business partners have to say</>}
        testimonials={invoiceTestimonial}
      />
      <CommonQuestions questions={faqData} />

      <GetStarted title="Get started with Nomba Invoice today" />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default InvoicePage;
