import React, { useContext } from "react";
import { Container } from "components";
import { TerminalSlider } from "./terminal-slider";
import { AppContext } from "states/context";
import { CompareTerminals } from "./compare-teminals";
const TerminalList = () => {
  const { addToCart } = useContext(AppContext);
  return (
    <section className="md:pb-[50px] feature-section4">
      <div className="pb-[50px]">
        <TerminalSlider addToCart={addToCart} />
      </div>
      <CompareTerminals title="Comparing Nomba POS" />
    </section>
  );
};

export { TerminalList };
