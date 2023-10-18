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
        {subMenuItem?.iconDark && <span className={iconWrapStyle}>{subMenuItem.iconDark}</span>}

        <div className="text-left -mt-1">
          <Ntext
            variant="p14"
            className="group-hover/item:!text-primary-100 "
            value={subMenuItem?.title}
            color="primary-1200"
            weight="700"
          />
          <Ntext
            variant="p12"
            color="primary-1200"
            className="group-hover/item:!text-primary-100 "
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
  px-[25px] lg:px-[13px]
  hover:bg-primary
  lg:hover:border
  lg:hover:rounded-[5px]
  border-n-grey5
  border-b 
  hover:border-y
  w-full
  lg:border-[0px]
  submenuStyle
`);
const subMenuItemWrapStyle = ctl(`
  flex 
  group/item
  justify-between 
  items-center 
  lg:border-none w-full
  py-3
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
