import React, { useEffect } from "react";
import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

import { Cart } from "components/checkout-page";

import {
  IntegratePay,
  CheckoutFAQs,
  CheckoutRate,
  AcceptPayment,
  CheckoutApiDocs,
  CheckoutBenefits,
  CheckoutSponsors,
  CheckoutPageHero,
  CheckoutAdvantages,
} from "templates";

import { split } from "animations/text";

const CheckoutPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={SeoConf.checkout.title}
      description={SeoConf.checkout.description}
      useStickyNav={false}>
      <CheckoutPageHero />
      <CheckoutAdvantages />
      <CheckoutBenefits />
      <AcceptPayment />
      <CheckoutSponsors />
      <CheckoutRate />
      <CheckoutApiDocs />
      <IntegratePay />
      <CheckoutFAQs />
      <div data-lenis-prevent>
        <Cart />
      </div>
    </Layout>
  );
};

export default CheckoutPage;
