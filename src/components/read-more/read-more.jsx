import PropTypes from "prop-types";
import React from "react";
import { NLink } from "../nlink";
import { Ntext } from "../ntext";
import Arrow from "svgs/readmore.svg";
import ctl from "@netlify/classnames-template-literals";

const ReadMore = ({ text = "Read More", color = "primary-100", ...props }) => {
  return (
    <div>
      <NLink {...props} className={readmoreStyle}>
        <Ntext variant="p16" color={color} className="peer">
          {text}
        </Ntext>

        <Arrow className={arrowStyle} />
      </NLink>
    </div>
  );
};

const readmoreStyle = ctl(`
inline-flex
items-center
group
`);

const arrowStyle = ctl(`
ml-2
transition-all
duration-300
peer-hover:ml-4
hover:ml-4
`);

ReadMore.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
};

export { ReadMore };
