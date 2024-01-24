import PropTypes from "prop-types";
import React from "react";

import ctl from "@netlify/classnames-template-literals";

const Container = ({ children, className }) => {
  return <div className={`${containerStyle} ${className}`}>{children}</div>;
};

const containerStyle = ctl(`
  md:max-w-[1335px]
  md:mx-auto
  px-[25px]
`);

Container.propTypes = {
  className: PropTypes.string,
};

export { Container };
