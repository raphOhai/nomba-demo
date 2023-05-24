import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";

const Box = ({ image, path, title }) => {
  return (
    <div className={boxWrapper}>
      <Ntext variant="text4lite" color="n-grey4">
        {title}
      </Ntext>
      <div className={imageStyle}>
        <img className="" width={310} height={300} src={path} alt="ABC" />
      </div>
      {/* <div className={imageStyle}>{image}</div> */}
    </div>
  );
};

const imageStyle = ctl(`  

`);

const boxWrapper = ctl(`
flex
flex-col
justify-between 
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[10px] 
bg-primary 
md:max-w-[380px] 
h-[400px] 
max-w-[388px] 
md:h-[408px] 
px-[30px]
pt-[30px]
overflow-hidden
box-wrapper
md:ml-1
`);

export { Box };
