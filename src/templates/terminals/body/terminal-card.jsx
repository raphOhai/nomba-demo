import React, { useContext } from "react";
import { Ntext, GetTerminal } from "components";

import ctl from "@netlify/classnames-template-literals";
import { AppContext } from "states/context";
const TerminalCard = ({ device, image, textColor, features, link, icons, bgColor, index }) => {
  const { addToCart } = useContext(AppContext);
  const iconsGridColumn = device.type !== "lite" ? "grid-cols-6" : "grid-cols-3";

  return (
    <section className={` relative py-8  md:min-w-[397px] ${bgColor}`}>
      <div className="h-full flex flex-col justify-between">
        <div className="text-center ">
          {image}
          <div className="mx-5 my-[40px] text-left">
            <header className={posCardHeaderStyle}>
              <Ntext variant="text5" color={textColor}>
                {device.name}
              </Ntext>
              <div className={`${posTitleIconStyle} ${iconsGridColumn}`}>{icons}</div>
            </header>{" "}
            <Ntext variant="p14" color={textColor} className="mt-5">
              {features}
            </Ntext>
          </div>
        </div>

        <div className="-mt-[5px] mx-5">
          <div>
            <Ntext variant="p12" color={textColor} className=" m-0 p-0">
              {device.priceType}
            </Ntext>
            <div className="flex flex-row  justify-between items-baseline">
              <Ntext variant="text5" color={textColor} className="flex">
                {device.price}
              </Ntext>
              <div className="btn" onClick={() => addToCart(index)}>
                <GetTerminal text="By now" type="animate-button-reverse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const posCardHeaderStyle = ctl(`
flex
justify-between
items-center
`);

const posTitleIconStyle = ctl(`
grid
gap
place-items-center 
`);
export { TerminalCard };
