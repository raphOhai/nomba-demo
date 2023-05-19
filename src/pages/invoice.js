import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br } from "components";
import { AnyTypeOfBusiness } from "components/any-type-of-business";
import { InvoicepageHero, InvoiceBusinessTypes, WhatsInTheBox, SponsorList } from "templates/invoice";
import { split } from "animations/text";
import { smallBusinesSolutions } from "config/small-business";

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
      <InvoiceBusinessTypes title="What Businesses Like Yours Think of Nomba MAX." />
      <WhatsInTheBox title="What’s in the box?" />
    </Layout>
  );
};

export default InvoicePage;
