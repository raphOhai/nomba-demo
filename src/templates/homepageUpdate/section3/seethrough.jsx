import React from "react";

const Seethrough = () => {
  return (
    <svg width="840" height="560" viewBox="0 0 840 560" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect
        opacity="0.8"
        y="560"
        width="560"
        height="840"
        transform="rotate(-90 0 560)"
        fill="url(#paint0_linear_10946_16428)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_10946_16428"
          x1="-1.82539e-05"
          y1="980"
          x2="559.951"
          y2="985.22"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#1A1A1A" />
          <stop offset="0.485" stop-color="#1A1A1A" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Seethrough;