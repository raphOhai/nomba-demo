import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br } from "components";
import {
  InvoicepageHero,
  SponsorList,
  InvoiceTools,
  HowInvoicingWorks,
  InvoiceTestimonial,
  EveryBusiness,
} from "templates/invoice";
import { split } from "animations/text";
import { InvoiceBusinessTools, invoiceTestimonial, resourceData } from "config/invoice";
import { Resources } from "templates/invoice/resources";
import { CommonQuestions } from "components/common-questions";
import { AccordionData } from "config/terminal";
import { everyBusinesses } from "config/invoice";
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
            Organise your billing process <Br on="all" /> with Nomba invoice
          </>
        }
        description=" Enjoy the benefits of automated reminders, helping you to stay on top of outstanding payments and minimize late payments."
      />

      <SponsorList title="Over 10,000+ businesses use Nomba Invoice to get paid daily " />
      <InvoiceTools title="Upselling invoice as a tool for your business " invoiceTools={InvoiceBusinessTools} />
      <HowInvoicingWorks title="How Nomba Invoicing is Perfect For Your Business." />
      <EveryBusiness title="Built for every kind of business" slides={everyBusinesses} />
      <InvoiceTestimonial testimonials={invoiceTestimonial} />
      <Resources
        title={
          <>
            {" "}
            Resources to help you make informed <Br on="all" /> decisions about your business.
          </>
        }
        data={resourceData}
      />
      <CommonQuestions questions={AccordionData} />
    </Layout>
  );
};

export default InvoicePage;
