import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import { MenuItems } from "./menu-items";
import MenuIcon from "assets/images/svgs/menu-light.svg";
import CloseIcon from "assets/images/svgs/x-light.svg";
import { Button } from "components/button";
import { NLink } from "components/nlink";
import MenuIconBlack from "assets/images/svgs/menu.svg";
import CloseIconBlack from "assets/images/svgs/x.svg";

import constants from "config/constants.json";

const Menu = ({ openMenu, onToggle, transparent }) => {
  const { SIGNUP_URL, SIGNIN_URL } = constants;
  const menuIconAriaLabel = openMenu ? "menu icon" : "close menu icon";

  useEffect(() => {
    if (openMenu) {
      const naVItems = document.getElementById("navvv");
      naVItems.style.backgroundColor = "black";
    }
  }, [openMenu]);

  return (
    <div className="lg:w-full nav-height">
      {/* hamburger menu for mobile */}
      {transparent ? (
        <button onClick={onToggle} className="lg:hidden" aria-label={menuIconAriaLabel}>
          {openMenu ? <CloseIconBlack /> : <MenuIconBlack />}
        </button>
      ) : (
        <button onClick={onToggle} className="lg:hidden" aria-label={menuIconAriaLabel}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </button>
      )}

      <nav
        id="navvv"
        style={{ backgroundColor: transparent ? "#FFCC00" : "black" }}
        className={`${navWrapStyle} ${openMenu ? "block" : "hidden"}`}
      >
        <MenuItems transparent={transparent} />

        <ul className={buttonWrapStyle}>
          <li className={signInButtonStyle}>
            <NLink className={menuLinkStyle} href={{ url: SIGNIN_URL }}>
              <div style={{ color: transparent ? "#1A1A1A" : "" }}>Sign in</div>
            </NLink>
          </li>

          <li>
            <Button
              className="!font-[500] w-full !text-[14px] black-button"
              text="Open an account"
              href={{ url: SIGNUP_URL }}
            />
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
  bg-black
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
  items-stretch
  lg:items-center
  menu-button-wrap
`);
const signInButtonStyle = ctl(`
  text-center
  mb-[17px] 
  lg:mb-0
`);
const menuLinkStyle = ctl(`
  text-[14px]
  leading-[22px]
  font-[500]
  text-primary-100
`);
export { Menu };
