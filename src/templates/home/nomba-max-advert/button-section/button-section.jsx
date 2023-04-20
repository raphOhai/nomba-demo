import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Button } from "components";
import { nombaMax } from "templates/products/nomba-pro/constants";

export default function ButtonSection({ link = { href: { url: nombaMax.url } } }) {
  return (
    <div className={buttonSection}>
      <Button size="medium" text={nombaMax.orderText} {...link} />
      {/* <NLink to="/products/nomba-pro" className={underlinedLink}>
        Learn more
      </NLink> */}
    </div>
  );
}

/* button section */

const buttonSection = ctl(`
flex
justify-center
md:flex-row
flex-col
items-center
gap-[30px]
`);
