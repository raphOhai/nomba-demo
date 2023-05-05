import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";

const Box = ({ image, heading }) => {
  return (
    <div className={boxWrapper}>
      <Ntext variant="text4" color="n-grey4" value={heading} />
      <div className={imageStyle}>{image}</div>
    </div>
  );
};

const imageStyle = ctl(`  
  mx-auto
`);
const boxWrapper = ctl(`
flex
flex-col
justify-between 
shadow-lg 
hover:shadow-xl 
rounded-lg 
bg-primary 
md:w-[380px] 
md:h-[400px] 
w-[388px] 
h-[408px] 
p-[30px]
`);

export { Box };
