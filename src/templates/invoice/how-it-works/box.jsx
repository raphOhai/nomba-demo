import React from "react";
import ctl from "@netlify/classnames-template-literals";

const Box = ({ image, title, className }) => {
  return <div className={`${boxWrapper} ${className}`}>{image}</div>;
};

const boxWrapper = ctl(`
min-w-[390px]
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[10px] 
panel
`);

export { Box };
