import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";

const Box = ({ image, title }) => {
  return (
    <div className={boxWrapper}>
      <Ntext variant="text4lite" color="n-grey4">
        {title}
      </Ntext>
      <div className={imageStyle}>{image}</div>
    </div>
  );
};

const imageStyle = ctl(`  
my-auto

`);

const boxWrapper = ctl(`
flex
flex-col
justify-between 
shadow-lg 
hover:shadow-xl 
hover:border-n-yellow
hover:border-2
hover:transition-all
duration-500
cursor-pointer
rounded-lg 
bg-primary 
md:max-w-[380px] 
h-[400px] 
max-w-[388px] 
md:h-[408px] 
hover:!text-primary-100
p-[30px]
overflow-hidden
`);

export { Box };
