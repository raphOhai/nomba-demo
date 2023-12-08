import React, { useEffect } from "react";
import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

import {
  IntegratePay,
  CheckoutFAQs,
  CheckoutApiDocs,
  CheckoutBenefits,
  CheckoutSponsors,
  CheckoutAdvantages,
  PaymentCheckoutHero,
} from "templates";

import { split } from "animations/text";

import Gradient from "svgs/payment-checkout/gradient.svg";

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
      <CheckoutAdvantages />
      <MiddleSection />
      <CheckoutFAQs />
    </Layout>
  );
};

const MiddleSection = () => {
  return (
    <section className="relative w-screen">
      <Gradient className="absolute right-0 top-[658px] w-[40vw] h-[1700px] z-10" />
      <CheckoutBenefits />
      <CheckoutSponsors />
      <CheckoutApiDocs />
      <IntegratePay />
    </section>
  );
};

export default PaymentCheckoutPage;
