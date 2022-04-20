import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";
import Arrow from "svgs/chevron-down.svg";
import YellowArrow from "svgs/yellow-arrow.svg";

const AccordionDetails = ({ title, info, isCurrent }) => {
  return (
    <div className={wrapStyle}>
      <div className="flex justify-between items-center">
        <Ntext variant="h5" value={title} className="normal-case " />
        {isCurrent ? <YellowArrow className="scale-75" /> : <Arrow />}
      </div>
      <Ntext
        variant="p16"
        value={info}
        className={isCurrent ? "block mt-3" : "hidden"}
      />
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

AccordionDetails.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  isCurrent: PropTypes.bool,
};

export { AccordionDetails };
