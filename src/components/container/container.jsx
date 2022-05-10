import PropTypes from "prop-types";
import React from "react";

import ctl from "@netlify/classnames-template-literals";

const Container = ({ children, className }) => {
  return <div className={`${containerStyle} ${className}`}>{children}</div>;
};

const containerStyle = ctl(`
md:max-w-[1318px]
px-6
mx-auto
`);

Container.propTypes = {
  className: PropTypes.string,
};

export { Container };
