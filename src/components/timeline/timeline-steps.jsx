import React from "react";
import ctl from "@netlify/classnames-template-literals";
import Arrow from "svgs/timeline-arrow.svg";
import { Ntext } from "components/ntext";

const TimelineSteps = ({ step, title, instruction, length }) => {
  return (
    <div className={stepWrapStyle}>
      <div className={arrowWrapStyle}>
        <Arrow />
        <div className={`${lineStyle} ${step === length && "hidden"}  `}></div>
      </div>

      <div className={textWrapStyle}>
        <Ntext
          variant="p14"
          value={`Step ${step}`}
          color="primary-600"
          className={stepStyle}
        />
        <Ntext variant="h5" value={title} className="mb-[13px] lg:mb-[9px] " />
        <Ntext variant="p16" value={instruction} />
      </div>
    </div>
  );
};

const stepWrapStyle = ctl(`
  flex
  lg:gap-[105px]
  gap-9
  items-start
`);
const arrowWrapStyle = ctl(`
  flex
  flex-col
  gap-5
  md:mt-1
`);
const lineStyle = ctl(`
  bg-primary
  lg:h-[185px]
  h-[143px]
  w-[1px]
  ml-1
  mb-5
`);
const textWrapStyle = ctl(`
  md:max-w-[410px]
  max-w-[80%]
  relative
`);
const stepStyle = ctl(`
  mb-[11px]
  uppercase
  md:absolute
  -top-8
  tracking-wider
`);

export { TimelineSteps };
