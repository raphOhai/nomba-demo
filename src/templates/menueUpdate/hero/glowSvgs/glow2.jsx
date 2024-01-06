import React from "react";

const Glow2 = () => {
  return (
    <div className="">
      <svg
        className="bounce"
        xmlns="http://www.w3.org/2000/svg"
        width="291"
        height="1031"
        viewBox="0 0 291 1031"
        fill="none"
      >
        <g opacity="0.24" filter="url(#filter0_f_8913_6248)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M-244.219 200.022C-106.236 198.711 36.7123 257.089 79.4421 388.296C122.242 519.719 39.8348 649.295 -71.0212 731.847C-187.04 818.243 -341.091 872.868 -459.288 789.477C-581.356 703.355 -600.706 534.609 -549.502 394.268C-503.796 268.998 -377.561 201.288 -244.219 200.022Z"
            fill="url(#paint0_linear_8913_6248)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_8913_6248"
            x="-776"
            y="0"
            width="1066.95"
            height="1030.87"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_8913_6248" />
          </filter>
          <linearGradient
            id="paint0_linear_8913_6248"
            x1="-576"
            y1="767.785"
            x2="150.555"
            y2="473.757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#DC7866" />
            <stop offset="1" stop-color="#F4D19A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Glow2;
