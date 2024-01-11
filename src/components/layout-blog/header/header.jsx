import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { NLink, Ntext } from "components";

import Logo from "svgs/logo.svg";

const Header = () => {
  return (
    <header className={mainHeaderStlye}>
      <nav className={headerNavStyle}>
        <NLink to="/" className="px-2 -ml-2">
          <Logo className="w-[94px]" />
        </NLink>
        <NLink
          href={{ url: 'https://dashboard.nomba.com/auth/sign-up-new' }}
          className="border-b hover:border-transparent border-b-secondary">
          <Ntext variant="text2" value="Create a Nomba account" />
        </NLink>
      </nav>
    </header>
  );
};

const mainHeaderStlye = ctl(`
  md:h-auto
  absolute
  z-[9999]
  left-0
  w-full
  top-0
`);

const headerNavStyle = ctl(`
  flex
  flex-col
  md:flex-row
  items-center
  md:space-y-0
  md:justify-between
  md:max-w-[1335px]
  py-[12.5px]
  px-[25px]
  space-y-4
  md:py-8
  mx-auto
`);

export { Header };
