import React, { useContext } from "react";
import { Container } from "components";
import { TerminalSlider } from "./terminal-slider";
import { AppContext } from "states/context";
const TerminalList = () => {
  const { addToCart } = useContext(AppContext);
  return (
    <section className="md:pt-[50px] feature-section4">
      <div className="py-[50px] md:pt-[100px]">
        <TerminalSlider addToCart={addToCart} />
      </div>
    </section>
  );
};

export { TerminalList };
