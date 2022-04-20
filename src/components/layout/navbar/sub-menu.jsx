import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import { NLink } from "components/nlink";
import Arrow from "assets/images/svgs/chevron-down.svg";

const SubMenu = ({ items }) => {
  const [currentMenuOpen, setCurrentMenuOpen] = useState(null);
  const toggleMenu = index => {
    if (currentMenuOpen) {
      setCurrentMenuOpen(null);
    } else {
      setCurrentMenuOpen(index);
    }
  };
  return (
    <div className={subMenuStyle}>
      {items.map((item, i) => {
        const subMenuIndex = i + 1;

        return (
          <div key={i} className={subMenuWrapStyle}>
            {item?.subMenu ? (
              <div>
                <SubMenuDetails
                  subMenuItem={item}
                  onClick={() => toggleMenu(subMenuIndex)}
                  menuindex={subMenuIndex}
                  menuopen={currentMenuOpen}
                />

                {/* additional links when submenu items are hovered on */}
                <nav
                  className={`${subMenuLinkWrapStyle} ${
                    currentMenuOpen === subMenuIndex ? "block" : "hidden"
                  }`}
                >
                  {item.subMenu.map(item => (
                    <NLink
                      className={subMenuLinkStyle}
                      {...item}
                      key={item.title}
                    >
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

const SubMenuDetails = ({ subMenuItem, ...props }) => (
  <button
    className={`${subMenuDetailsStyle} ${
      subMenuItem?.subMenu &&
      props.menuopen === props.menuindex &&
      "bg-primary-200 lg:bg-primary-100"
    }`}
    {...props}
  >
    <div className={subMenuItemWrapStyle}>
      <div className={subMenuInnerWrapStyle}>
        {subMenuItem?.icon && (
          <span className={iconWrapStyle}>{subMenuItem.icon}</span>
        )}

        <div className="text-left">
          <Ntext variant="p16" value={subMenuItem?.title} weight="600" />
          <Ntext variant="p12" value={subMenuItem?.description} />
        </div>
      </div>

      <Arrow
        className={`lg:hidden ${
          !subMenuItem?.subMenu
            ? "-rotate-90"
            : props.menuopen === props.menuindex &&
              "rotate-180 transition-all duration-300"
        } `}
      />
    </div>
  </button>
);

const subMenuStyle = ctl(`
  lg:hidden
  group-hover:block
  hover:block
  lg:absolute
  z-10
  lg:h-[296px]
  lg:shadow-subMenu
  mt-5
`);
const subMenuWrapStyle = ctl(`
  bg-primary-100  
  lg:first:pt-4 lg:last:pb-4
`);
const subMenuItemWrapStyle = ctl(`
  flex 
  justify-between 
  items-center   
  border-b 
  lg:border-none w-full
`);
const subMenuDetailsStyle = ctl(`
  peer
  px-[25px] lg:px-[33px]
  lg:hover:bg-primary-200
  border-primary-400
  w-full
`);
const subMenuInnerWrapStyle = ctl(`
  flex 
  items-center 
  gap-[13px]
  peer
  w-full
`);
const iconWrapStyle = ctl(`
  bg-secondary-100
  w-[54px]
  h-[54px]
  rounded-full
  flex
  items-center
  justify-center
  my-[17px]
`);
const subMenuLinkWrapStyle = ctl(`
  lg:block
  lg:invisible
  bg-primary-200
  lg:absolute
  left-[100%]
  lg:top-0
  pt-[30px]
  px-16 lg:px-0
  lg:h-full
  lg:w-0
  lg:opacity-0
  lg:peer-hover:w-[236px]
  lg:peer-hover:opacity-100
  lg:peer-hover:visible
  lg:hover:opacity-100
  lg:hover:w-[236px]
  lg:hover:visible
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
