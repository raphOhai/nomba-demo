import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { MenuItems } from "./menu-items";
import MenuIcon from "assets/images/svgs/menu.svg";
import CloseIcon from "assets/images/svgs/x.svg";
import { Button } from "components/button";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuIconAriaLabel = openMenu ? "menu icon" : "close menu icon";
  const onToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="lg:w-full ">
      {/* hamburger menu for mobile */}
      <button
        onClick={onToggle}
        className="lg:hidden"
        aria-label={menuIconAriaLabel}
      >
        {openMenu ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`${navWrapStyle} ${openMenu ? "block" : "hidden"}`}>
        <MenuItems />

        <div className={buttonWrapStyle}>
          <Button variant="alternative" text="Sign in" to="/signin" />
          <Button text="Get Started" to="/signup" />
        </div>
      </nav>
    </div>
  );
};

const navWrapStyle = ctl(`
  lg:flex 
  justify-between
  items-center
  absolute
  lg:relative
  left-0
  w-full
  z-10
  bg-primary-100
`);
const buttonWrapStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  gap-[17px]
  mt-[74px] mb-10
  lg:mt-0 lg:mb-0
  px-[25px] lg:px-0
`);

export { Menu };
