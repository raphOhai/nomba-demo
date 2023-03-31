import ctl from "@netlify/classnames-template-literals";
import React from "react";

export function SectionWrapper({ children, className, ...props }) {
  return (
    <div
      className={`
        ${sectionWrapperStyle} 
        ${className}
        `}
      {...props}
    >
      {children}
    </div>
  );
}

// pl-[5%]
// pr-[5%]
export const sectionWrapperStyle = ctl(`
d-flex
justify-between
md:max-w-[1318px]
overflow-x-scroll
mx-auto
px-6
`);
