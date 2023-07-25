import React from "react";
import { Ntext, ReadMore } from "components";

import ctl from "@netlify/classnames-template-literals";
const TerminalCard = ({ device, image, isHighlight, features, link, icons }) => {
  const backgroundColor = isHighlight ? "bg-n-grey6" : "bg-n-grey1";
  const textColor = isHighlight ? "primary-100" : "primary";
  const textColor2 = isHighlight ? "primary-100" : "primary-900";
  const featuresColor = isHighlight ? "primary-100" : "n-grey6";
  const iconsGridColumn = device.type !== "lite" ? `grid-cols-6` : "grid-cols-3";
  return (
    <section className={`shadow-md hover:shadow-xl rounded-lg relative py-8 ${backgroundColor} md:min-w-[397px]`}>
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
            <Ntext variant="p14" color={featuresColor} className="mt-5">
              {features}
            </Ntext>
          </div>
        </div>

        <div className="-mt-[5px] mx-5">
          <div>
            <Ntext variant="p12" color={textColor2} className=" m-0 p-0">
              {device.priceType}
            </Ntext>
            <div className="flex flex-row  justify-between items-baseline">
              <Ntext variant="text5" color={textColor} className="flex">
                {device.price}
              </Ntext>
              <ReadMore variant="text3" text={device.ctaText} color={textColor} href={link} />
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
