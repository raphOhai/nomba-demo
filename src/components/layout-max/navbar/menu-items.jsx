import React, { useState, useEffect, useRef } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import { NLink } from "components/nlink";
import { SubMenu } from "./sub-menu";
import { headerMenu } from "../../../config/menu";
import Arrow from "assets/images/svgs/chevron-right.svg";

const MenuItems = () => {
  const [showSubmenu, setShowSubmenu] = useState(null);
  const headerMenuItems = Object.keys(headerMenu);

  const ref = useRef();

  useEffect(() => {
    const clickOutsideCheck = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowSubmenu(null);
      }
    };
    document.addEventListener("mousedown", clickOutsideCheck);

    return () => {
      document.removeEventListener("mousedown", clickOutsideCheck);
    };
  }, [showSubmenu]);

  const menuItems = headerMenuItems.map((item, i) => {
    const navItem = headerMenu[item];

    const handleKeyDown = e => {
      if (e.keyCode === 13) {
        if (showSubmenu === i) {
          setShowSubmenu(null);
        } else {
          setShowSubmenu(i);
        }
      }
    };

    return (
      <li className={itemWrapStyle} key={item}>
        {/* menu items */}
        {Array.isArray(navItem) ? (
          <>
            <button onKeyDown={handleKeyDown}>
              <Ntext
                className={menuHeadingStyle}
                variant="p16"
                color={showSubmenu === i ? "primary-100" : "primary-500"}
                value={item}
              />
            </button>

            <SubMenu items={navItem} submenuOpen={showSubmenu === i} />
          </>
        ) : (
          <div className={menuLinkWrapStyle}>
            <div>
              <NLink className={menuLinkStyle} {...navItem}>
                {item}
              </NLink>

              <Ntext variant="p12" value={navItem?.description} className="lg:hidden" />
            </div>

            <Arrow className="lg:hidden" />
          </div>
        )}
      </li>
    );
  });

  return (
    <ul ref={ref} className={menuItemStyle}>
      {menuItems}
    </ul>
  );
};

const itemWrapStyle = ctl(`
  group 
  list-none 
  cursor-default
  lg:py-7
  pt-[45px]
  xl:mr-[45px]
  lg:mr-4
`);
const menuHeadingStyle = ctl(`
  uppercase 
  lg:capitalize 
  lg:group-hover:!text-primary-100
  md:font-normal 

  font-semibold
  tracking-[0.2em]
  lg:tracking-normal
  px-[25px] lg:px-2
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
  font-[400]
  text-primary-100
`);

export { MenuItems };
