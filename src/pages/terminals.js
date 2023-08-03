import React, { useEffect, useRef } from "react";

import Layout from "components/layout-max";
import { HomepageTipsAndUpdate } from "templates";
import { split } from "animations/text";
import { TerminalList, TerminalsHero } from "templates/terminals";
import { Cart } from "components/checkout";

const TerminalsPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="Terminals" useStickyNav={false}>
      <TerminalsHero />
      <TerminalList />
      <HomepageTipsAndUpdate />
      <div data-lenis-prevent>
        <Cart />
      </div>
    </Layout>
  );
};

export default TerminalsPage;
