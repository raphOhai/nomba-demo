import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { MenuItems } from "./menu-items";
import MenuIcon from "assets/images/svgs/menu.svg";
import CloseIcon from "assets/images/svgs/x.svg";
import { Button } from "components/button";

import constants from "config/constants.json";

const Menu = ({ openMenu, onToggle }) => {
  const { SIGNUP_URL, SIGNIN_URL } = constants;
  const menuIconAriaLabel = openMenu ? "menu icon" : "close menu icon";

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
          <Button
            variant="alternative"
            text="Sign in"
            href={{ url: SIGNIN_URL }}
          />
          <Button text="Get Started" href={{ url: SIGNUP_URL }} />
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
  lg:static
  left-0
  w-full
  z-10
  bg-primary-100
  md:h-auto
  h-[95vh]
  md:overflow-hidden
  overflow-scroll
`);
const buttonWrapStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  gap-[17px]
  mt-[74px] 
  lg:mt-0 lg:mb-0
  px-[25px] lg:px-0
  md:mb-0 
  mb-10
`);

export { Menu };
