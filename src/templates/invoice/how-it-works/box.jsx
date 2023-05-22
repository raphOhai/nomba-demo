import React from "react";
import ctl from "@netlify/classnames-template-literals";
// import { Ntext } from "components";

const Box = ({ image, title }) => {
  return (
    <div className={boxWrapper}>
      {/* <Ntext variant="text4lite" color="n-grey4">
        {title}
      </Ntext> */}
      <div className={imageStyle}>{image}</div>
    </div>
  );
};

const imageStyle = ctl(`  
rounded-[10px]
`);

const boxWrapper = ctl(`
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[10px] 
box-wrapper
md:ml-1
`);

export { Box };
