import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br } from "components";
import { AnyTypeOfBusiness } from "components/any-type-of-business";
import {
  InvoicepageHero,
  InvoiceBusinessTypes,
  WhatsInTheBox,
  SponsorList,
  InvoiceTools,
  HowInvoicingWorks,
} from "templates/invoice";
import { split } from "animations/text";
import { smallBusinesSolutions } from "config/small-business";
import { InvoiceBusinessTools } from "config/invoice";

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
      <WhatsInTheBox title="What’s in the box?" />
    </Layout>
  );
};

export default InvoicePage;
