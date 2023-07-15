import React from "react";
import ctl from "@netlify/classnames-template-literals";

const Box = ({ image, className }) => {
  return <div className={`${boxWrapper} ${className}`}>{image}</div>;
};

const boxWrapper = ctl(`
min-w-[821px]

shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[20px] 
box-panel
`);

export { Box };
