import React from "react";
import { Ntext, ReadMore } from "components";

import PosLine from "assets/images/svgs/pos-line.svg";

import ctl from "@netlify/classnames-template-literals";
const TerminalCard = ({ device, image, isMax, features, link, icons }) => {
  const backgroundColor = isMax ? "bg-n-grey6" : "bg-n-grey1";
  const textColor = isMax ? "primary-100" : "primary";
  const featuresColor = isMax ? "primary-100" : "n-grey6";
  const iconsGridColumn = !isMax && device.type === "pro" ? `grid-cols-4` : "grid-cols-3";
  return (
    <section className={`shadow-md hover:shadow-xl rounded-lg relative py-8 ${backgroundColor}`}>
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

        <div className=" mx-5">
          {device.price ? (
            <div className="flex flex-row  justify-between items-baseline">
              <Ntext variant="text5" color={textColor} className="flex">
                {device.price}
              </Ntext>
              <ReadMore variant="text3" color={textColor} href={link} />
            </div>
          ) : (
            <div className="flex flex-row  justify-between items-baseline">
              <ReadMore variant="text3" text="Join waitlist" color={textColor} href={link} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const posCardHeaderStyle = ctl(`
flex
justify-between
`);

const posTitleIconStyle = ctl(`
grid
md:gap-2
gap
place-items-center 
`);
export { TerminalCard };
