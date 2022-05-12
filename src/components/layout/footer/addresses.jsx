import React from "react";
import ctl from "@netlify/classnames-template-literals";

import addressList from "config/addresses.json";
import { Ntext } from "../../ntext";

const Addresses = () => {
  const addressListKeys = Object.keys(addressList);
  return (
    <div className={addressesWrapperStyle}>
      {addressListKeys.map(addressListKey => (
        <Address key={addressListKey} location={addressList[addressListKey]} />
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
const Address = ({ location }) => {
  return <Ntext variant="p14">{location}</Ntext>;
};

export { Addresses };
