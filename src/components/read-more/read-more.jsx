import PropTypes from "prop-types";
import React from "react";
import { NLink } from "../nlink";
import { Ntext } from "../ntext";
import Arrow from "svgs/readmore.svg";
import ArrowGrey from "svgs/readmore-grey.svg";
import ctl from "@netlify/classnames-template-literals";

const ReadMore = ({
  text,
  color,
  defaultStyle = true,
  active = true,
  ...props
}) => {
  return (
    <div>
      <NLink {...props} className={readmoreStyle}>
        <Ntext
          variant={props.variant || "p16"}
          color={color}
          className={`peer ${props.className}`}
          weight={defaultStyle ? "600" : props.weight}
        >
          {text}
        </Ntext>
        {active ? (
          <Arrow className={arrowStyle} />
        ) : (
          <ArrowGrey className={arrowStyle} />
        )}
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

ReadMore.defaultProps = {
  text: "Read More",
  color: "primary-100",
  active: true,
};

ReadMore.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
};

export { ReadMore };
