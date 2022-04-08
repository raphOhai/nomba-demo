import React from "react";

import ctl from "@netlify/classnames-template-literals";

const Container = ({ children }) => {
  return <div className={containerStyle}>{children}</div>;
};

const containerStyle = ctl(`
md:max-w-[1318px]
px-6
mx-auto
`);

export { Container };
