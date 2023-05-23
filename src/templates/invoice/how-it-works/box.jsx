import React from "react";
import ctl from "@netlify/classnames-template-literals";

const Box = ({ image, title }) => {
  return (
    <div className={boxWrapper}>
      <div className={imageStyle}>{image}</div>
    </div>
  );
};

const imageStyle = ctl(`  

`);

const boxWrapper = ctl(`
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[10px] 
box-wrapper
md:ml-2
`);

export { Box };
