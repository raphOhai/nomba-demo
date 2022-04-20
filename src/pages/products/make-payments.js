import React from "react";

import Layout from "components/layout";
import {
  BillPaymentTimeline,
  Features,
  FundTransferTimeline,
  MakePaymentsPageHeader,
} from "templates/products/make-payments";

const MakePaymentsPage = () => {
  return (
    <Layout title="Make Payments">
      <MakePaymentsPageHeader />
      <BillPaymentTimeline />
      <Features />
      <div className="pt-2">
        <FundTransferTimeline />
      </div>
    </Layout>
  );
};

export default MakePaymentsPage;
