import React, { useState, useEffect } from "react";
import Logo from "assets/images/jpegs/terminal/max/svgs/logo.svg";
import constants from "config/constants.json";
import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { NLink } from "components/nlink";
import { MaxButton } from "components/max-button";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FixedBar = () => {
  const { SIGNUP_URL } = constants;
  const [openMenu, setOpenMenu] = useState(false);

  const onToggle = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    gsap.set(".fixedbar", {
      opacity: 1,
      yPercent: 50,
      opacity: 0,
      // skewX: -10,
      // skewY: -50,
      rotateX: -90,
    });
    gsap.to(".fixedbar", {
      scrollTrigger: {
        trigger: ".feature-section",
        start: "top 90%",
        scrub: true,
        toggleActions: "play none none reverse",
        end: "+=500px",
      },
      opacity: 1,
      rotateX: 0,
      // fontSize: fontSize,
      // xPercent: 0,
      // skewX: 0,
      // skewY: 0,
      yPercent: 0,
      duration: 0.5,
      ease: "easeIn",
    });
  });

  return (
    <header className={`${mainHeaderStlye} ${openMenu && "h-full"} fixedbar opacity-0`}>
      <nav className={navStyle}>
        <NLink to="/" className="mr-[55px] px-2 -ml-2">
          <Logo className="w-[94px] " />
        </NLink>

        <Menu openMenu={openMenu} onToggle={onToggle} />
      </nav>
      <div className="flex justify-center flex-col items-stretch w-full md:!hidden px-[25px]      ">
        <MaxButton text="Get your terminal" type="animate-button-reverse" link={SIGNUP_URL} />
      </div>
    </header>
  );
};

const mainHeaderStlye = ctl(`

fixed
bottom-0
left-0
w-full
z-[9999]
pb-3
lg:h-auto
`);

const navStyle = ctl(`
hidden
  lg:bg-[#ffffff0d]
  bg-[#ffffff0d]
  backdrop-blur-[500px]
  md:flex
  items-center
  rounded-[10px]
  justify-between
  lg:justify-start
  px-[25px]
  py-[12.5px]
  lg:py-0
  md:max-w-[1335px]
  mx-auto
`);

export { FixedBar };
