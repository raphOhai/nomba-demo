import React from "react";
import ctl from "@netlify/classnames-template-literals";

const Box = ({ image, className, mobileImage }) => {
  return (
    <div className={`${boxWrapper} ${className}`}>
      <div className="hidden md:block">{image}</div>
      <div className="md:hidden">{mobileImage}</div>
    </div>
  );
};

const boxWrapper = ctl(`
md:min-w-[821px]
min-w-[369px]
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[20px] 
box-panel
`);

export { Box };
