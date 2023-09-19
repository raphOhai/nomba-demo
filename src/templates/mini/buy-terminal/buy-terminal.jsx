import React, { useContext } from "react";
import { AppContext } from "states/context";
import { GetTerminal } from "components";
import ctl from "@netlify/classnames-template-literals";

const BuyTerminal = ({ className, reverse = true }) => {
  const { addToCart } = useContext(AppContext);

  return (
    <div className={`${heroButtonsContainer} ${className}`}>
      <GetTerminal
        onClick={() => addToCart(3)}
        text="Buy your POS"
        type={reverse ? "animate-button-reverse" : "animate-button"}
      />
    </div>
  );
};

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
md:items-center
w-full items-stretch 
`);

export { BuyTerminal };
