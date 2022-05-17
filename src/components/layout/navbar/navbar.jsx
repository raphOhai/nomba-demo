import React, { useState } from "react";
import Logo from "svgs/logo.svg";

import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { NLink } from "components/nlink";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className={`${mainHeaderStlye} ${openMenu && "h-full"}`}>
      <nav className={navStyle}>
        <NLink to="/" className="mr-[71px]">
          <Logo className="w-[94px] " />
        </NLink>

        <Menu openMenu={openMenu} onToggle={onToggle} />
      </nav>
    </header>
  );
};

const mainHeaderStlye = ctl(`
bg-primary-100
fixed
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
  max-w-[1386px]
  mx-auto
`);

export { NavBar };