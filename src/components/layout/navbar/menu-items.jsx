import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import { NLink } from "components/nlink";
import { SubMenu } from "./sub-menu";
import { headerMenu } from "../../../config/menu";
import Arrow from "assets/images/svgs/chevron-right.svg";

const MenuItems = () => {
  const headerMenuItems = Object.keys(headerMenu);

  const menuItems = headerMenuItems.map(item => {
    const navItem = headerMenu[item];

    return (
      <li className={itemWrapStyle} key={item}>
        {/* menu items */}
        {Array.isArray(navItem) ? (
          <>
            <Ntext
              className={menuHeadingStyle}
              variant="p16"
              color="primary-900"
              value={item}
            />

            <SubMenu items={navItem} />
          </>
        ) : (
          <div className={menuLinkWrapStyle}>
            <div>
              <NLink className={menuLinkStyle} {...navItem}>
                {item}
              </NLink>

              <Ntext
                variant="p12"
                value={navItem?.description}
                className="lg:hidden"
              />
            </div>

            <Arrow className="lg:hidden" />
          </div>
        )}
      </li>
    );
  });

  return <ul className={menuItemStyle}>{menuItems}</ul>;
};

const itemWrapStyle = ctl(`
  group 
  list-none 
  cursor-default
  lg:py-7
  pt-[45px]
  xl:mr-[62px]
  lg:mr-8
`);
const menuHeadingStyle = ctl(`
  uppercase 
  lg:capitalize 
  font-semibold 
  tracking-[0.2em]
  lg:tracking-normal
  px-[25px] lg:px-0
`);
const menuItemStyle = ctl(`
  lg:flex 
`);
const menuLinkWrapStyle = ctl(`
  flex 
  justify-between 
  items-center
  px-[25px] lg:px-0
`);
const menuLinkStyle = ctl(`
  text-[16px]
  leading-[28.8px]
  font-semibold
  text-primary-900
`);

export { MenuItems };
