import React from "react";

import ctl from "@netlify/classnames-template-literals";

const SectionHeader = ({ children }) => {
  return <div className={headerStyle}>{children}</div>;
};

const headerStyle = ctl(`
py-8
md:py-16
text-center
`);

export { SectionHeader };
