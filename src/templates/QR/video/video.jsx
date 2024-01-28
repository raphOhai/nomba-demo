import { Container } from "components";
import React from "react";

const Video = () => {
  return (
    <div className="flex center Qr-video-container">
      <div className="play-btn-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="40" fill="#D4AA00" />
          <path
            d="M49 38.2679C50.3333 39.0377 50.3333 40.9623 49 41.7321L37 48.6603C35.6667 49.4301 34 48.4678 34 46.9282V33.0718C34 31.5322 35.6667 30.5699 37 31.3397L49 38.2679Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default Video;
