import React, { useEffect } from "react";
import "./index.scss";
import { StaticImage } from "gatsby-plugin-image";

const ZoomInPos = () => {
  return (
    <div className="c_czoom">
      <svg width="1440" height="489" viewBox="0 0 1440 489" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_35_573)">
          <g opacity="0.5">
            <g filter="url(#filter0_i_35_573)">
              <path
                d="M1577 203.605C1101 -159.339 490.366 643.872 -31.9999 203.605"
                stroke="url(#paint0_linear_35_573)"
                stroke-width="200"
                stroke-linecap="round"
              />
            </g>
            <g filter="url(#filter1_i_35_573)">
              <path
                d="M1548 244.053C1072 -118.891 461.366 684.32 -60.9999 244.053"
                stroke="url(#paint1_linear_35_573)"
                stroke-width="200"
                stroke-linecap="round"
              />
            </g>
            <g filter="url(#filter2_i_35_573)">
              <path
                d="M1751 196.544C1189.5 -344.333 543 782.124 -337 196.544"
                stroke="url(#paint2_linear_35_573)"
                stroke-width="200"
                stroke-linecap="round"
              />
            </g>
            <g filter="url(#filter3_i_35_573)">
              <path
                d="M-208 292.032C353.5 832.91 1000 -293.547 1880 292.032"
                stroke="url(#paint3_linear_35_573)"
                stroke-width="200"
                stroke-linecap="round"
              />
            </g>
          </g>
        </g>
        <defs>
          <filter
            id="filter0_i_35_573"
            x="-172.002"
            y="6.46948"
            width="1849.01"
            height="436.921"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-40" dy="4" />
            <feGaussianBlur stdDeviation="42" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.804613 0 0 0 0 0.729167 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_573" />
          </filter>
          <filter
            id="filter1_i_35_573"
            x="-201.002"
            y="46.9177"
            width="1849.01"
            height="436.921"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-40" dy="4" />
            <feGaussianBlur stdDeviation="42" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_573" />
          </filter>
          <filter
            id="filter2_i_35_573"
            x="-477.011"
            y="-54.9707"
            width="2328.01"
            height="529.404"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-40" dy="4" />
            <feGaussianBlur stdDeviation="42" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_573" />
          </filter>
          <filter
            id="filter3_i_35_573"
            x="-348"
            y="18.1438"
            width="2328.01"
            height="529.404"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-40" dy="4" />
            <feGaussianBlur stdDeviation="42" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0" />
            <feBlend mode="normal" in2="shape" result="effect1_innerShadow_35_573" />
          </filter>
          <linearGradient
            id="paint0_linear_35_573"
            x1="772.5"
            y1="106.445"
            x2="772.5"
            y2="339.387"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFBFA7" />
            <stop offset="1" stop-color="#EA855E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_35_573"
            x1="743.5"
            y1="146.893"
            x2="743.5"
            y2="379.835"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FFCEBB" />
            <stop offset="1" stop-color="#EA855E" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_35_573"
            x1="707"
            y1="-23.1842"
            x2="707"
            y2="503.616"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#282828" />
            <stop offset="1" stop-color="#121212" />
            <stop offset="1" stop-color="#393939" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_35_573"
            x1="836"
            y1="511.761"
            x2="836"
            y2="-15.0396"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#1B1B1B" />
            <stop offset="1" stop-color="#121212" />
            <stop offset="1" stop-color="#707070" />
          </linearGradient>
          <clipPath id="clip0_35_573">
            <rect width="2217" height="489" fill="white" transform="translate(-370)" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export { ZoomInPos };
