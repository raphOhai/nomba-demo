import React, { useContext } from "react";
import { Ntext, GetTerminal, ReadMore } from "components";

import ctl from "@netlify/classnames-template-literals";
import { AppContext } from "states/context";
const TerminalCard = ({ device, image, textColor, colorScheme, features, link, icons, bgColor, index }) => {
  const { addToCart } = useContext(AppContext);
  const iconsGridColumn = device.type !== "lite" ? "grid-cols-6" : "grid-cols-3";

  return (
    <section key={`pos_card_${index}`} className={` relative py-8  md:min-w-[407px] ${bgColor}`}>
      <div className="h-full flex flex-col justify-between">
        <div className="text-center ">
          {image}
          <div className="mx-5 mt-[40px] mb-3 text-left">
            <header className={posCardHeaderStyle}>
              <Ntext variant="text5" color={textColor}>
                {device.name}
              </Ntext>
              <div className={`${posTitleIconStyle} ${iconsGridColumn}`}>{icons}</div>
            </header>
            <Ntext variant="p14" color={textColor} className="mt-3">
              {features}
            </Ntext>
          </div>
        </div>

        <div className="-mt-[5px] mx-5">
          <div>
            <div className="mb-5">
              <ReadMore
                extraTrackText={device.name}
                variant="p12bold"
                defaultStyle={false}
                className={"!text-xs"}
                text="Learn more"
                color={textColor}
                href={link}
              />
            </div>
            <div
              className={`max-w-[110px] rounded-full ${
                colorScheme !== "dark" ? "bg-[#1A1A1A]" : "bg-n-light"
              } text-center px-2 py-1 mb-3`}
            >
              <p
                className={`${colorScheme !== "dark" ? "text-n-light" : "text-primary"} text-[10px] tracking-[-0.2px]`}
              >
                {device.priceType}
              </p>
            </div>
            <div className="flex flex-row  justify-between items-center">
              <Ntext variant="pricingBig" color={textColor} className=" ">
                {device.price}
              </Ntext>
              <div className="btn" onClick={() => addToCart(index)}>
                <GetTerminal
                  text={device.ctaText}
                  type="animate-button-reverse"
                  className={textColor === "primary" ? "!text-black keep-dark" : ""}
                />
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
