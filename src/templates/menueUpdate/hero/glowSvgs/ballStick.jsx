import React from "react";

const BallStick = () => {
  return (
    <div className="ball-svg">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="89" viewBox="0 0 25 89" fill="none">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12 64L12 4.37115e-08L13 0L13 64L12 64Z"
          fill="url(#paint0_linear_10182_5526)"
        />
        <circle cx="12.5" cy="76.5" r="12" fill="#665200" fill-opacity="0.32" stroke="#4D4D4D" />
        <circle cx="4.5" cy="4.5" r="4.5" transform="matrix(-1 0 0 1 17 72)" fill="#FFCC00" />
        <defs>
          <linearGradient
            id="paint0_linear_10182_5526"
            x1="12.5"
            y1="64"
            x2="12.5"
            y2="-8.75503e-09"
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

export default BallStick;
