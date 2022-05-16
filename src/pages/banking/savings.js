import React from "react";

import Layout from "components/layout";

import { SavingsPageHeader, SavingProfits, SaveMoney } from "templates/banking";

const SavingsBanking = () => {
  return (
    <Layout title="Mobile Money Agents">
      <SavingsPageHeader />
      <SaveMoney />
      <SavingProfits />
    </Layout>
  );
};

export default SavingsBanking;
