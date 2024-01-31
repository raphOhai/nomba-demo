import React from "react";

const BallStick2 = () => {
  return (
    <div className="ball-svg2">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="145" viewBox="0 0 25 145" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 25L12 145L13 145L13 25L12 25Z"
          fill="url(#paint0_linear_10182_5527)"
        />
        <circle
          cx="12.5"
          cy="12.5"
          r="12"
          transform="matrix(1 0 0 -1 0 25)"
          fill="#665200"
          fill-opacity="0.32"
          stroke="#4D4D4D"
        />
        <circle cx="12.5" cy="12.5" r="4.5" transform="rotate(180 12.5 12.5)" fill="#FFCC00" />
        <defs>
          <linearGradient
            id="paint0_linear_10182_5527"
            x1="12.5"
            y1="25"
            x2="12.5"
            y2="145"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#4D4D4D" />
            <stop offset="1" stop-color="#4D4D4D" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default BallStick2;
