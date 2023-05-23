import React from "react";
import ctl from "@netlify/classnames-template-literals";

const Box = ({ image, title }) => {
  return <div className={boxWrapper}>{image}</div>;
};

const imageStyle = ctl(`  

`);

const boxWrapper = ctl(`
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[10px] 

`);

export { Box };
