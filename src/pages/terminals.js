import React, { useEffect, useRef } from "react";

import Layout from "components/layout-max";
import { HomepageTipsAndUpdate } from "templates";
import { split } from "animations/text";
import { TerminalList, TerminalsHero } from "templates/terminals";
import { posCardData } from "config/nomba-terminals";
const TerminalsPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <Layout title="Terminals" useStickyNav={false}>
      <TerminalsHero />
      <TerminalList />
      <HomepageTipsAndUpdate />
    </Layout>
  );
};

export default TerminalsPage;
