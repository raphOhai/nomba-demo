import React, { useEffect } from "react";

import Layout from "components/layout-max";
import { Br, Testimonial, GetStarted } from "components";
import { HomepageTipsAndUpdate } from "templates";
import { PageHero, HowInvoicingWorks, EveryBusiness, DocSection } from "templates/checkout-page";
import { split } from "animations/text";
import { faqData, invoiceTestimonial, docs } from "config/checkout-api";
import { CommonQuestions } from "components/common-questions";
import { Cart } from "components/product-checkout";
import { everyBusinesses } from "config/invoice";
import SeoConf from "config/seo/meta";

const CheckoutPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title={SeoConf.invoice.title} description={SeoConf.invoice.description} useStickyNav={false}>
      <PageHero
        title={
          <>
            Nomba Checkout, Simple <Br on="desktop" /> Powerful Payment
          </>
        }
      />

      <HowInvoicingWorks title="How Nomba Checkout is Perfect For Your Business." />
      <DocSection
        title={
          <>
            Get to Integrate Fast with our <Br on="desktop" /> Checkout API
          </>
        }
        description={
          <>
            A simple, elegant interface so you can start integrating in minutes. Leverage our APIs to transform your
            businesses and products
          </>
        }
        data={docs}
      />
      <EveryBusiness title="Built for every kind of business" slides={everyBusinesses} />

      <GetStarted title="Get started with Nomba Checkout today" />
      <HomepageTipsAndUpdate />
      <Cart title="Get Started With Nomba Checkout" type="Checkout" />
    </Layout>
  );
};

export default CheckoutPage;
