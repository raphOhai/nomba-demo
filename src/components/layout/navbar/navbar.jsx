import React from "react";
import Logo from "svgs/logo.svg";

import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { NLink } from "components/nlink";

const NavBar = () => {
  return (
    <nav className={navStyle}>
      <NLink to="/">
        <Logo className="w-[94px]" />
      </NLink>

      <Menu />
    </nav>
  );
};

const navStyle = ctl(`
  flex
  lg:items-center
  justify-between
  lg:justify-start
  gap-[71px]
  px-[25px]
  pt-[25px]
  lg:pt-0
  max-w-[1386px]
  mx-auto
`);

export { NavBar };
