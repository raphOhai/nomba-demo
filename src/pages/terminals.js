import React, { useEffect, useRef } from "react";

import Layout from "components/layout-max";
import { HomepageTipsAndUpdate } from "templates";
import { split } from "animations/text";
import { TerminalList, TerminalsHero } from "templates/terminals";
import { Cart } from "components/checkout";
import { gsap } from "gsap";
import { ReactLenis } from "@studio-freight/react-lenis";
import { EveryBusiness } from "templates/e-menu";
import SeoConf from "config/seo/meta";

const TerminalsPage = () => {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });
  useEffect(() => {
    split();
  });
  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      <Layout
        title={SeoConf.terminals.title}
        description={SeoConf.terminals.description}
        useStickyNav={false}
        index={3}
      >
        <TerminalsHero />
        <TerminalList />
        <EveryBusiness />
        <HomepageTipsAndUpdate />
        <div data-lenis-prevent>
          <Cart />
        </div>
      </Layout>
    </ReactLenis>
  );
};

export default TerminalsPage;
