import React from "react";
import ctl from "@netlify/classnames-template-literals";
import ReactRotatingText from "react-rotating-text";

const RotatingText = () => {
  return (
    <ReactRotatingText
      className={rotatingTextStyle}
      items={["payment", "money", "sales"]}
      typingInterval={100}
      deletingInterval={100}
      color="#444444"
    />
  );
};

const rotatingTextStyle = ctl(`
  underline 
  decoration-5 
  decoration-secondary
`);

export { RotatingText };
