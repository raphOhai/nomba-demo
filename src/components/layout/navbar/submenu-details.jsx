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

        <div className="text-left -mt-1">
          <Ntext
            variant="p16"
            className="group-hover/item:!text-primary "
            value={subMenuItem?.title}
            color="n-grey5"
            weight="700"
          />
          <Ntext
            variant="p14"
            color="n-grey5"
            className="group-hover/item:!text-primary "
            value={subMenuItem?.description}
          />
        </div>
      </div>

      <Arrow
        className={`lg:hidden ${
          !subMenuItem?.subMenu ? "-rotate-90" : props.menuopen === props.menuindex && "rotate-180  duration-300"
        } `}
      />
    </div>
  </div>
);

const subMenuDetailsStyle = ctl(`
  peer
  px-[25px] lg:px-[4px]
  w-full
  submenuStyle
`);
const subMenuItemWrapStyle = ctl(`
  flex 
  group/item
  justify-between 
  items-center   
  border-b 
  w-full
  py-3

  lg:px-3
  hover:bg-m-light
  lg:hover:border-n-grey2
  lg:hover:rounded-[5px]
  lg:border
  lg:border-n-light
  border-primary-400
`);
const subMenuInnerWrapStyle = ctl(`
  flex 
  items-start 
  gap-[13px]
  peer
  w-full
`);
const iconWrapStyle = ctl(`
  w-[30px]
  h-[30px]
  flex
  items-center
  justify-center

`);

export { SubMenuDetails };
