import React, { useEffect } from "react";
import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

import { Br } from "components";
import { CheckoutApiDocs, PaymentCheckoutHero, CheckoutFAQs } from "templates";
import { faqData, docs } from "config/payment-checkout";
import { split } from "animations/text";

const PaymentCheckoutPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={SeoConf.invoice.title}
      description={SeoConf.invoice.description}
      useStickyNav={false}>
      <PaymentCheckoutHero />
      <CheckoutApiDocs
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
      <CheckoutFAQs faqData={faqData} />
    </Layout>
  );
};

export default PaymentCheckoutPage;
