import React, { useState, useRef } from "react";
import "./index.scss";
import { Br } from "components/br";
import ExperienceTerminal from "assets/images/svgs/terminal/experience-terminal.svg";
import Sideways from "assets/images/svgs/terminal/sideways.svg";
import { StaticImage } from "gatsby-plugin-image";
import spinTerminal from "assets/images/svgs/terminal/spin.mp4";
const TerminalSectionInteractions = () => {
  const [isHover, setHover] = useState(false);
  const video = useRef(null);
  const fadeOut = () => {
    setHover(!isHover);

    if (!isHover) {
      setTimeout(() => {
        video.current.play();
      }, 8000);
    } else {
      video.current.currentTime = 0;
      video.current.pause();
    }
  };

  return (
    <div className="c_terminal_sectInt">
      <div className="c_terminal_sectInt_paySol">
        <h1 data-animation="h">The perfect payment solution for smooth business transaction</h1>
        <div onMouseOver={fadeOut} onMouseLeave={fadeOut} className={` img_1 img ${!isHover ? "fadeIn" : "fadeOut"}`}>
          <StaticImage src="../../../assets/images/svgs/terminal/sideways-skeleton.svg" alt="" />
        </div>
        <div className={` img_2 img ${isHover ? "fadeIn" : "fadeOut"}`}>
          <Sideways />
        </div>
      </div>
      <div className="c_terminal_sectInt_experience">
        <ExperienceTerminal
          onMouseOver={fadeOut}
          onMouseLeave={fadeOut}
          className={`${!isHover ? "fadeIn" : "fadeOut"}`}
        />
        <video
          ref={video}
          className={`c_terminal_vid ${isHover ? "fadeIn" : "fadeOut"}`}
          loop
          muted
          src={spinTerminal}
        ></video>

        <div className="c_terminal_sectInt_experience_txt">
          <h1 data-animation="h">
            Experience the MAX in your <Br on="desktop" /> payment collection
          </h1>
          <p data-animation="p">
            Designed to the last pixel to give you the max performance - faster transaction, long lasting battery, high
            speed printer, durable and reliable POS terminal
          </p>
        </div>
      </div>
    </div>
  );
};

export { TerminalSectionInteractions };
