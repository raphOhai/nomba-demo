import React, { useState, useEffect, useRef } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import { NLink } from "components/nlink";
import { SubMenu } from "./sub-menu";
import { headerMenu } from "../../../config/max/menu";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MenuItems = () => {
  const [showSubmenu, setShowSubmenu] = useState(null);
  const headerMenuItems = Object.keys(headerMenu);

  const ref = useRef();

  useEffect(() => {
    const clickOutsideCheck = e => {
      if (ref.current && !ref.current.contains(e.target)) {
        setShowSubmenu(null);
      }
    };
    document.addEventListener("mousedown", clickOutsideCheck);

    return () => {
      document.removeEventListener("mousedown", clickOutsideCheck);
    };
  }, [showSubmenu]);

  useEffect(() => {
    headerMenu.forEach((item, i) => {
      gsap.to(`.link-${i}`, {
        scrollTrigger: {
          trigger: item.to,
          start: "top 90%",
          scrub: true,
          toggleActions: "play none none reverse",
          end: "+=500px",
        },
        color: "#ffffff",
        duration: 0.4,
      });
    });

    // gsap.to('#link-0', {

    // })
  });

  const menuItems = headerMenu.map((item, i) => {
    // const navItem = headerMenu[item];

    // const handleKeyDown = e => {
    //   if (e.keyCode === 13) {
    //     if (showSubmenu === i) {
    //       setShowSubmenu(null);
    //     } else {
    //       setShowSubmenu(i);
    //     }
    //   }
    // };

    return (
      <li className={itemWrapStyle} key={item}>
        {/* menu items */}

        <div className={menuLinkWrapStyle}>
          <div>
            <NLink className={`${menuLinkStyle} link-${i}`} href={item.to}>
              {item.title}
            </NLink>
          </div>
        </div>
      </li>
    );
  });

  return (
    <ul ref={ref} className={menuItemStyle}>
      {menuItems}
    </ul>
  );
};

const itemWrapStyle = ctl(`
  group 
  list-none 
  cursor-default
  lg:py-7
  pt-[45px]
  xl:mr-[45px]
  lg:mr-4
`);

const menuItemStyle = ctl(`
  lg:flex 
`);
const menuLinkWrapStyle = ctl(`
  flex 
  justify-between 
  items-center
  px-[25px] lg:px-0
`);
const menuLinkStyle = ctl(`
  text-[16px]
  leading-[28.8px]
  font-[400]
  text-n-grey3light
`);

export { MenuItems };
