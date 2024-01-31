import React, { useState } from "react";
import Logo from "svgs/logo-white.svg";
import LogoBlack from "svgs/logo.svg";

import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { NLink } from "components/nlink";
import "./style/index.scss";

const NavBar = ({ transparent }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => {
    setOpenMenu(!openMenu);
    const naVItems = document.getElementById("navvv");
    naVItems.style.backgroundColor = "black";
  };

  return (
    <header
      style={{ backgroundColor: transparent ? "#FFCC00" : "black" }}
      className={`${mainHeaderStlye} ${openMenu && "h-full"}`}
      data-lenis-prevent
    >
      <nav className={navStyle}>
        {transparent ? (
          <NLink to="/" className="mr-[55px] px-2 -ml-2">
            <LogoBlack className="w-[94px]" />{" "}
          </NLink>
        ) : (
          <NLink to="/" className="mr-[55px] px-2 -ml-2">
            <Logo className="w-[94px] " />
          </NLink>
        )}

        <Menu openMenu={openMenu} onToggle={onToggle} transparent={transparent} />
      </nav>
    </header>
  );
};

const mainHeaderStlye = ctl(`
bg-black
top-0
left-0
w-full
z-[9999]
lg:h-auto
`);

const navStyle = ctl(`
  flex
  items-center
  justify-between
  lg:justify-start
  px-[25px]
  py-[12.5px]
  lg:py-0
  md:max-w-[1335px]
  mx-auto
`);

export { NavBar };
