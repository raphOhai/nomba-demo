import React, { useState, useEffect, useContext } from "react";
import LogoMax from "jpegs/terminal/max/svgs/logo.svg";
import LogoMini from "jpegs/mini/logo-small.svg";
import ctl from "@netlify/classnames-template-literals";
import { Menu } from "./menu";
import { GetTerminal, NLink } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { AppContext } from "states/context";

gsap.registerPlugin(ScrollTrigger);

const FixedBar = ({ terminalIndex }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { isOpen, addToCart } = useContext(AppContext);

  const onToggle = () => {
    setOpenMenu(!openMenu);
  };

  useEffect(() => {
    gsap.set(".main-container", {
      // perspective: 1600,
      // scale: 0.5
    });
    gsap.set(".fixedbar", {
      yPercent: 50,
      opacity: 0,
      rotateX: -45,
      transformStyle: "preserve-3d",
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
      yPercent: 0,
      duration: 0.5,
      ease: "easeIn",
    });
  });

  return (
    !isOpen && (
      <header className={`${mainHeaderStlye} ${openMenu && "h-full"} fixedbar opacity-0`}>
        <nav className={navStyle}>
          {terminalIndex === 0 && (
            <NLink to="/max" className="mr-[55px] px-2 -ml-2">
              <LogoMax className="w-[94px] " />
            </NLink>
          )}
          {terminalIndex === 3 && (
            <NLink to="/mini" className="mr-[55px] px-2 -ml-2">
              <LogoMini className="w-[94px] " />
            </NLink>
          )}
          <Menu openMenu={openMenu} onToggle={onToggle} index={terminalIndex}>
            <GetTerminal onClick={() => addToCart(terminalIndex)} text="Buy your POS" type="animate-button-reverse" />
          </Menu>
        </nav>

        {/* Display on mobile only */}
        <div className="flex justify-center flex-col items-stretch w-full md:!hidden px-[25px]      ">
          {/* <MaxButton text="Contact sales" type="animate-button" link="tel:+23401888899" /> */}
        </div>
      </header>
    )
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
