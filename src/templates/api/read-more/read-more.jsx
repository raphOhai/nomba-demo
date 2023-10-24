import PropTypes from "prop-types";
import React from "react";
import { Ntext } from "components";
import Arrow from "svgs/readmore.svg";
import ArrowGrey from "svgs/readmore-grey.svg";
import ctl from "@netlify/classnames-template-literals";

const ReadMore = ({
  text,
  color,
  className,
  extraTrackText,
  toggleModal,
  defaultStyle = true,
  active = true,
  ...props
}) => {
  return (
    <button onClick={toggleModal} className={className}>
      <div
        {...props}
        trackingText={extraTrackText ? `${extraTrackText}-${text}` : text}
        className={readmoreStylDefault}
      >
        <Ntext
          variant={props.variant || "p16"}
          color={color}
          className={`peer ${props.className}transition-all duration-300`}
          weight={defaultStyle ? "600" : props.weight}
        >
          {text}
        </Ntext>
        {active ? <Arrow className={arrowStyle} /> : <ArrowGrey className={arrowStyle} />}
      </div>
    </button>
  );
};

const readmoreStylDefault = ctl(`
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
  className: "",
};

ReadMore.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  active: PropTypes.bool,
  className: PropTypes.string,
};

export { ReadMore };
