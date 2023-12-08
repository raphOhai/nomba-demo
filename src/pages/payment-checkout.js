import React, { useEffect } from "react";
import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

import {
  CheckoutFAQs,
  CheckoutApiDocs,
  CheckoutBenefits,
  CheckoutSponsors,
  PaymentCheckoutHero,
  IntegrateToYourTerms,
} from "templates";

import { faqData, docs } from "config/payment-checkout";
import { split } from "animations/text";
import { Br } from "components";

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
      <CheckoutBenefits />
      <CheckoutSponsors />
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
      <IntegrateToYourTerms />
      <CheckoutFAQs faqData={faqData} />
    </Layout>
  );
};

export default PaymentCheckoutPage;
