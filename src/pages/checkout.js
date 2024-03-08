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
    // console.log(serverData.data.access_token);
    split();
  });

  return (
    <Layout title={SeoConf.checkout.title} description={SeoConf.checkout.description} useStickyNav={false}>
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
        <Cart demo={true} />
      </div>
    </Layout>
  );
};

export default CheckoutPage;

// export async function getServerData() {
//   try {
//     const options = {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${process.env.GATSBY_API_CLIENT_SECRET}`,
//         accountId: process.env.GATSBY_API_ACCOUNT_ID,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         grant_type: "client_credentials",
//         client_id: process.env.GATSBY_API_CLIENT_ID,
//         client_secret: process.env.GATSBY_API_CLIENT_SECRET,
//       }),
//     };

//     const res = await fetch(`https://api.nomba.com/v1/auth/token/issue`, options);

//     if (!res.ok) {
//       throw new Error(`Response failed`);
//     }

//     return {
//       props: await res.json(),
//     };
//   } catch (error) {
//     return {
//       status: 500,
//       headers: {},
//       props: {},
//     };
//   }
// }
