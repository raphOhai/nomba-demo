import React, { useEffect } from "react";
import Layout from "components/layout-max";
import SeoConf from "config/seo/meta";

import {
  IntegratePay,
  CheckoutFAQs,
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
      <CheckoutApiDocs />
      <IntegratePay />
      <CheckoutFAQs />
    </Layout>
  );
};

export default CheckoutPage;
