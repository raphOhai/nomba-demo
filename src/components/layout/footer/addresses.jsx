import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { addressList } from "config/addresses.js";
import { Ntext } from "../../ntext";

const Addresses = () => {
  return (
    <div className={addressesWrapperStyle}>
      {addressList.map((addressListKey, index) => (
        <Address key={`addressListKey_${index}`} {...addressListKey} />
      ))}
    </div>
  );
};

const addressesWrapperStyle = ctl(`
grid
md:grid-cols-2
max-w-[1000px]
gap-4
`);
const Address = ({ location, flag }) => {
  return (
    <>
      <div className="flex ">
        {flag}
        <Ntext variant="p14" className="ml-2">
          {location}
        </Ntext>
      </div>
    </>
  );
};

export { Addresses };
