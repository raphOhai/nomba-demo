import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Newsletter } from "components/newsletter";

const Subfooter = ({ children }) => {
  return (
    <div className={subfooterWrapperStyle}>
      {children}
      <Newsletter />
    </div>
  );
};

const subfooterWrapperStyle = ctl(`
bg-primary-200 
pb-24
`);

export { Subfooter };
