import React from "react";
import Rectangle from "assets/images/svgs/big-story-rect.svg";
import Top from "assets/images/svgs/big-top.svg";
import Bottom from "assets/images/svgs/big-story-bottom.svg";
import ctl from "@netlify/classnames-template-literals";

const SectionBrandElement = () => {
  return (
    <>
      <Top className={topSVGstyle} />

      <Rectangle className={rectangleSvgStyle} />
      <Bottom className={bottomSvgStyle} />
    </>
  );
};

const topSVGstyle = ctl(`
absolute
 top-[0px] 
 -left-[369px]
 lg:-left-[200px]

`);
const rectangleSvgStyle = ctl(`
absolute 
-top-10 
-left-[36px]
 xl:-left-[60px]
`);
const bottomSvgStyle = ctl(`
absolute 
bottom-[0px] 
-right-[480px] 

`);

export { SectionBrandElement };
