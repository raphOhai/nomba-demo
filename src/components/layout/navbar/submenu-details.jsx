import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import Arrow from "assets/images/svgs/chevron-down.svg";

const SubMenuDetails = ({ subMenuItem, ...props }) => (
  <div
    className={`${subMenuDetailsStyle} ${
      subMenuItem?.subMenu && props.menuopen === props.menuindex && "bg-primary-200 lg:bg-primary-100"
    }`}
    {...props}
  >
    <div className={subMenuItemWrapStyle}>
      <div className={subMenuInnerWrapStyle}>
        {subMenuItem?.icon && <span className={iconWrapStyle}>{subMenuItem.icon}</span>}

        <div className="text-left  -mt-1">
          <Ntext variant="p14" color="primary" value={subMenuItem?.title} weight="700" />
          <Ntext variant="p12" color="primary" value={subMenuItem?.description} />
        </div>
      </div>

      <Arrow
        className={`lg:hidden ${
          !subMenuItem?.subMenu
            ? "-rotate-90"
            : props.menuopen === props.menuindex && "rotate-180 transition-all duration-300"
        } `}
      />
    </div>
  </div>
);

const subMenuItemWrapStyle = ctl(`
  flex 
  justify-between 
  items-center   
  border-b 
  lg:border-none w-full
  lg:py-3
`);
const subMenuDetailsStyle = ctl(`
  peer
  px-[25px] lg:px-[13px]
  lg:hover:bg-m-light
  lg:hover:border-n-grey2
  lg:hover:border
  lg:hover:rounded-[5px]
  border-primary-400
  w-full
  transition-all
`);
const subMenuInnerWrapStyle = ctl(`
  flex 
  items-start 
  gap-[13px]
  peer
  w-full
`);
const iconWrapStyle = ctl(`
  w-[20px]
  h-[20px]
  flex
  items-center
  justify-center

`);

export { SubMenuDetails };
