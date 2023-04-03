import React from "react";
import { NLink } from "components";
import ctl from "@netlify/classnames-template-literals";

export default function PromoButton() {
  return (
    <div className={badgeWrapper}>
      <div className={dottedWrapper}>
        <NLink to="/products/nomba-pro">
          <button className={badgeButtonStyle}>
            <span>New </span>
            <span className="font-[500]">|</span>
            <span className={promoText}>&nbsp;Promo</span>
            <span>&nbsp;₦55,000</span>
          </button>
        </NLink>
      </div>
    </div>
  );
}

const promoText = ctl(`
font-[400]
`);

const badgeWrapper = ctl(`
flex
justify-center
mb-[20px]
`);

const dottedWrapper = ctl(`
rounded-[30px]
border
border-[#ffcc00]
border-dashed
w-fit
p-[5px]
`);

const badgeButtonStyle = ctl(`
c-0
rounded-[30px]
bg-secondary
px-[20px]
py-[4px]
hover:bg-secondary/80
disabled:bg-secondary
text-[16px]
font-[700]
leading-[22px]
tracking-[0.2rem]
`);
