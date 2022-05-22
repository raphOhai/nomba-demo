import React from "react";

import Layout from "components/layout";
import {
  BillPaymentTimeline,
  Features,
  HelpYourCommunityTimeline,
  MakePaymentsPageHeader,
} from "templates/products/make-payments";

const MakePaymentsPage = () => {
  return (
    <Layout title="Make Payments">
      <MakePaymentsPageHeader />
      <HelpYourCommunityTimeline />
      <Features />
      <div className="pt-2">
        <BillPaymentTimeline />
      </div>
    </Layout>
  );
};

export default MakePaymentsPage;
