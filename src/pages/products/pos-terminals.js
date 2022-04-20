import React from "react";

import Layout from "components/layout";
import { POSTerminals } from "components";
import {
  ActivateTimeline,
  PosPageHeader,
  RequestTimeline,
  TerminalNextLevel,
  BestWayToAcceptPayments,
} from "templates/products/pos-terminals";

const POSTerminalsPage = () => {
  return (
    <Layout title="POS Terminals">
      <PosPageHeader />
      <BestWayToAcceptPayments />
      <POSTerminals />
      <TerminalNextLevel />

      <div className="pt-2">
        <RequestTimeline />
        <ActivateTimeline />
      </div>
    </Layout>
  );
};

export default POSTerminalsPage;
