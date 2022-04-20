import React from "react";
import PropTypes from "prop-types";

import ctl from "@netlify/classnames-template-literals";

const SectionHeader = ({ children, className }) => {
  return <div className={`${headerStyle} ${className}`}>{children}</div>;
};

const headerStyle = ctl(`
py-16
text-center
`);

SectionHeader.propTypes = {
  className: PropTypes.string,
};
export { SectionHeader };
