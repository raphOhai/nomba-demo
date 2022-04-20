import React from "react";
import Rectangle from "assets/images/svgs/big-story-rect.svg";
import Top from "assets/images/svgs/big-top.svg";
import Bottom from "assets/images/svgs/big-story-bottom.svg";
import ctl from "@netlify/classnames-template-literals";

const OurStoryTerminalCard = ({ children }) => {
  return (
    <section className={storyTerminalWrapperStyles}>
      <Top className={topSVGstyles} />

      <Rectangle className={rectangleSvgStyles} />
      <Bottom className={bottomSvgStyles} />
      {children}
    </section>
  );
};

const storyTerminalWrapperStyles = ctl(`
pt-[282px] 
pb-[100px] 
-mt-[133px] 
md:-mt-[19px] 
lg:-mt-[64px] 
xl:-mt-[163px] 
bg-primary 
relative 
overflow-hidden 
-z-50
`);

const topSVGstyles = ctl(`
absolute
 -top-[67px] 
 -left-[89px]
`);
const rectangleSvgStyles = ctl(`
absolute 
-top-10 
-left-[60px]
 xl:-left-[55px]
`);
const bottomSvgStyles = ctl(`
absolute 
-bottom-[99px] 
-right-[279px] 
md:-right-[94px]
`);

export { OurStoryTerminalCard };
