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
const Address = ({ location, flag, country }) => {
  return (
    <>
      <div className="flex flex-col">
        <div>
          <Ntext variant="p14" color="primary-200">
            {flag} {country}
          </Ntext>
        </div>
        <div className="flex flex-col">
          {location.map((l, i) => (
            <Ntext key={`${l}_${i}`} variant="p14" color="primary-200" className="">
              {l}
            </Ntext>
          ))}
        </div>
      </div>
    </>
  );
};

export { Addresses };
