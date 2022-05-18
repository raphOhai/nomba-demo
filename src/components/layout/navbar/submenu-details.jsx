import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import Arrow from "assets/images/svgs/chevron-down.svg";

const SubMenuDetails = ({ subMenuItem, ...props }) => (
  <div
    className={`${subMenuDetailsStyle} ${
      subMenuItem?.subMenu &&
      props.menuopen === props.menuindex &&
      "bg-primary-200 lg:bg-primary-100"
    }`}
    {...props}
  >
    <div className={subMenuItemWrapStyle}>
      <div className={subMenuInnerWrapStyle}>
        {subMenuItem?.icon && (
          <span className={iconWrapStyle}>{subMenuItem.icon}</span>
        )}

        <div className="text-left">
          <Ntext variant="p16" value={subMenuItem?.title} weight="600" />
          <Ntext variant="p12" value={subMenuItem?.description} />
        </div>
      </div>

      <Arrow
        className={`lg:hidden ${
          !subMenuItem?.subMenu
            ? "-rotate-90"
            : props.menuopen === props.menuindex &&
              "rotate-180 transition-all duration-300"
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
`);
const subMenuDetailsStyle = ctl(`
  peer
  px-[25px] lg:px-[33px]
  lg:hover:bg-primary-200
  border-primary-400
  w-full
`);
const subMenuInnerWrapStyle = ctl(`
  flex 
  items-center 
  gap-[13px]
  peer
  w-full
`);
const iconWrapStyle = ctl(`
  bg-secondary-100
  w-[54px]
  h-[54px]
  rounded-full
  flex
  items-center
  justify-center
  my-[17px]
`);

export { SubMenuDetails };
