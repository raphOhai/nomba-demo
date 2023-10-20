import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { NLink } from "components/nlink";
import { SubMenuDetails } from "./submenu-details";

const SubMenu = ({ items, submenuOpen }) => {
  const [currentMenuOpen, setCurrentMenuOpen] = useState(null);

  const gridRows = items.length > 3 ? `lg:grid-rows-4` : items.length === 3 ? `lg:grid-rows-3` : `lg:grid-rows-2`;

  return (
    <div className={`${subMenuStyle} ${gridRows} ${submenuOpen ? "block" : "lg:hidden"} `}>
      {items.map((item, i) => {
        const subMenuIndex = i + 1;
        const currentMenuSameAsIndex = currentMenuOpen === subMenuIndex;

        const toggleMenu = () => {
          if (currentMenuSameAsIndex) {
            setCurrentMenuOpen(null);
          } else {
            setCurrentMenuOpen(subMenuIndex);
          }
        };

        const handleKeyDown = e => {
          if (e.keyCode === 13) {
            toggleMenu();
          }
        };

        return (
          <div key={i} className={subMenuWrapStyle}>
            {item?.subMenu ? (
              <div>
                <button className="w-full peer" onKeyDown={handleKeyDown}>
                  <SubMenuDetails
                    subMenuItem={item}
                    onClick={toggleMenu}
                    menuindex={subMenuIndex}
                    menuopen={currentMenuOpen}
                  />
                </button>

                {/* additional links when submenu items are hovered on */}
                <nav className={`${subMenuLinkWrapStyle} ${currentMenuSameAsIndex ? "lg:w-[236px]" : "hidden"} `}>
                  {item.subMenu.map(item => (
                    <NLink className={subMenuLinkStyle} {...item} key={item.title}>
                      {item.title}
                    </NLink>
                  ))}
                </nav>
              </div>
            ) : (
              <NLink {...item}>
                <SubMenuDetails subMenuItem={item} />
              </NLink>
            )}
          </div>
        );
      })}
    </div>
  );
};

const subMenuStyle = ctl(`
  group-hover:grid
  hover:grid
  lg:absolute
  z-10
  lg:shadow-subMenu
  lg:rounded-[10px]
  lg:p-[5px]
  mt-5
 lg:grid-flow-col
  lg:gap-1
  lg:bg-n-light
  lg:border-m-light
  lg:border
`);
const subMenuWrapStyle = ctl(`
  bg-primary-100  
 
`);
const subMenuLinkWrapStyle = ctl(`
  bg-primary-200
  lg:absolute
  left-[100%]
  lg:top-0
  pt-[30px]
  px-16 lg:px-0
  lg:h-full
  lg:peer-hover:block
  lg:hover:block
  lg:peer-hover:w-[236px]
  lg:hover:w-[236px]
  mb-[29px]
`);
const subMenuLinkStyle = ctl(`
  block
  lg:py-4 pb-4
  pl-[30px]
  text-[14px]
  font-semibold
  w-full
  lg:hover:bg-primary-300
`);

export { SubMenu };
