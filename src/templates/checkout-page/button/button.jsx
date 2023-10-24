import React, { useContext } from "react";
import { AppContext } from "states/context";
import { GetTerminal } from "components";

const BuyButton = ({ text }) => {
  const { onOpen } = useContext(AppContext);

  return (
    <GetTerminal type="animate-button-reverse" className={"!font-medium !text-[16px]"} text={text} onClick={onOpen} />
  );
};

export { BuyButton };
