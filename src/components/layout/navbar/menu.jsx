import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { MenuItems } from "./menu-items";
import MenuIcon from "assets/images/svgs/menu.svg";
import CloseIcon from "assets/images/svgs/x.svg";
import { Button } from "components/button";
import { NLink } from "components/nlink";
import constants from "config/constants.json";

const Menu = ({ openMenu, onToggle }) => {
  const { SIGNUP_URL, SIGNIN_URL } = constants;
  const menuIconAriaLabel = openMenu ? "menu icon" : "close menu icon";

  return (
    <div className="lg:w-full ">
      {/* hamburger menu for mobile */}
      <button onClick={onToggle} className="lg:hidden" aria-label={menuIconAriaLabel}>
        {openMenu ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={`${navWrapStyle} ${openMenu ? "block" : "hidden"}`}>
        <MenuItems />

        <ul className={buttonWrapStyle}>
          <li className={signInButtonStyle}>
            <NLink className={menuLinkStyle} href={{ url: SIGNIN_URL }}>
              Sign in
            </NLink>
          </li>

          <li>
            <Button className="md:!font-[500] md:!text-[14px]" text="Open an account" href={{ url: SIGNUP_URL }} />
          </li>
        </ul>
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
  lg:h-auto
  h-[95vh]
  lg:overflow-hidden
  overflow-scroll
`);
const buttonWrapStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  mt-[74px] 
  lg:mt-0 lg:mb-0
  px-[25px] lg:px-0
  md:mb-0 
  gap-[30px]
  mb-10
  items-center
  menu-button-wrap
`);
const signInButtonStyle = ctl(`

  mb-[17px] 
  lg:mb-0
`);
const menuLinkStyle = ctl(`
  text-[14px]
  leading-[22px]
  font-[500]
  text-primary
`);

export { Menu };
