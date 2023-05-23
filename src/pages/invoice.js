import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br } from "components";
import { InvoicepageHero, SponsorList, InvoiceTools, HowInvoicingWorks, InvoiceTestimonial } from "templates/invoice";
import { split } from "animations/text";
import { InvoiceBusinessTools, invoiceTestimonial } from "config/invoice";

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
            Invoice Matters, <Br on="all" /> Made Super Easy!
          </>
        }
        description=" Enjoy the benefits of automated reminders, helping you to stay on top of outstanding payments and minimize late payments."
      />

      <SponsorList title="Over 10,000+ businesses use Nomba Invoice to get paid daily " />
      <InvoiceTools title="Upselling invoice as a tool for your business " invoiceTools={InvoiceBusinessTools} />
      <HowInvoicingWorks title="How Nomba Invoicing is Perfect For Your Business." />
      <InvoiceTestimonial testimonials={invoiceTestimonial} />
    </Layout>
  );
};

export default InvoicePage;
