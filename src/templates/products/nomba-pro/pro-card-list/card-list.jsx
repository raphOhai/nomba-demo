import React from "react";
import { MasterCard, Verve, Visa, Qr } from "assets/images/svgs/cards";
import ctl from "@netlify/classnames-template-literals";
import { SectionWrapper } from "../components";

export function ProCardList() {
  return (
    <div className="bg-[#F3F3F3]">
      <SectionWrapper className="px-0">
        <div className={cardlist}>
          <Visa />
          <MasterCard /> <Qr /> <Verve />
        </div>
      </SectionWrapper>
    </div>
  );
}
const cardlist = ctl(`
text-center 
items-center 
flex 
justify-center
gap-[40px]
pt-[40px]
md:pt-[60px]
pb-[100px]
md:pb-[150px]
`);
