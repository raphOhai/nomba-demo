import React from "react";
import PropTypes from "prop-types";

const GetTerminal = ({ text, type, className,  onClick }) => {
  return (
    <button className={`${type} ${className}`} onClick={onClick} trackingText={text} extraTrack={text}>

      {text}
      <svg
        className="btn_svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M8.5 12H14.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.5 9L15.5 12L12.5 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
};

GetTerminal.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.oneOf(["animate-button", "animate-button-reverse"]),
};

export { GetTerminal };
