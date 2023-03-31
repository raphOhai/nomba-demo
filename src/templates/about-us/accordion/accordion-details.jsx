import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";
import Arrow from "svgs/chevron-down.svg";
import YellowArrow from "svgs/yellow-arrow.svg";

const AccordionDetails = ({ title, info, isCurrent, hasImages }) => {
  return (
    <div className={hasImages ? wrapStyle : noImagesWrapStyle}>
      <div className="flex justify-between items-center">
        <Ntext variant="h5" className="normal-case" value={title} />
        {isCurrent ? <YellowArrow className="scale-75" /> : <Arrow />}
      </div>
      <Ntext
        variant="p16"
        className={
          isCurrent ? "block mt-3 md:max-w-[95%] break-after-auto" : "hidden"
        }
      >
        {info}
      </Ntext>
    </div>
  );
};

const wrapStyle = ctl(`
  xl:w-[544px]
  lg:w-[480px]
  w-full
  border-b
  border-primary
  pb-6 pt-10
`);

const noImagesWrapStyle = ctl(`
  w-full
  border-b
  border-n-grey2
  pb-6 pt-10
`);

AccordionDetails.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  info: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.node,
  ]),
  isCurrent: PropTypes.bool,
};

export { AccordionDetails };
