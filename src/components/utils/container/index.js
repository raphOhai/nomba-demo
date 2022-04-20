import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

const Container = ({ children, className }) => {
  const containerStyle = ctl(`
  max-w-screen-lg  
  mx-auto 
  md:px-0 
  px-6
  ${className}
  `);
  return <section className={containerStyle}>{children}</section>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Container;
