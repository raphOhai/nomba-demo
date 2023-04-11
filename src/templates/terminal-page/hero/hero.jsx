import React, { useEffect, useRef, useState } from "react";
import { Br } from "components";
import hero_gif from "assets/images/svgs/terminal/hero.mp4";
import "./index.scss";
import Play from "assets/images/svgs/terminal/play.svg";
import PlayMobile from "assets/images/svgs/terminal/play_mobile.svg";
import gsap from "gsap";
import HeroVid from "assets/images/svgs/terminal/video.mp4";
import { StaticImage } from "gatsby-plugin-image";

const TerminalHero = () => {
  const hero_vid = useRef(null);
  const heroGif = useRef(null);
  const [playVideo, setPlayVid] = useState(false);
  useEffect(() => {
    window.addEventListener("mousemove", e => {
      xTo(e.clientX - 250);
      yTo(e.clientY - 150);
    });

    gsap.set(".play_btn", { xPercent: -50, yPercent: -50 });
    let xTo = gsap.quickTo(".play_btn", "x", { duration: 0.3, delay: 0.2, ease: "power3" }),
      yTo = gsap.quickTo(".play_btn", "y", { duration: 0.3, delay: 0.2, ease: "power3" });
  });

  const playVid = () => {
    setPlayVid(!playVideo);
    const video = document.querySelector(".hero_video_pl video");
    if (playVideo) {
      video.pause();
      video.currentTime = 0;
    } else {
      video.play();
    }
  };

  const close = () => {
    setPlayVid(!playVideo);
  };
  return (
    <>
      <div className={`hero_video_pl ${playVideo ? "view" : null}`}>
        <video onClick={close} ref={hero_vid} controls src={HeroVid}></video>
      </div>
      <div className="terminal_hero">
        <div className="terminal_hero_video">
          <video autoPlay loop muted playsInline>
            <source ref={heroGif} src={hero_gif} type="video/mp4"></source>
          </video>
        </div>
        <div onClick={playVid} className="play_btn">
          {playVideo ? (
            <div className="close_vid">
              <span></span>
              <span></span>
            </div>
          ) : (
            <Play />
          )}
        </div>
        <div onClick={playVid} className="play_mobile">
          {playVideo ? (
            <div className="close_vid_m">
              <span></span>
              <span></span>
            </div>
          ) : (
            <PlayMobile />
          )}
        </div>
        <div className="terminal_hero_sect">
          <div className="terminal_hero_sect_txt">
            <div className="terminal_hero_sect_txt_l">
              <h1>Experience the</h1>
              <Br on="desktop" />
              <div className="img">
                <StaticImage alt="" src="../../../assets/images/svgs/terminal/max.png" />
              </div>
            </div>
            <div className={`terminal_hero_sect_txt_r ${playVideo && "off"}`}>
              <p data-animation="p">
                Built to maximise your business growth and efficiency through cutting-edge payment solutions.
              </p>
              <div className="btn">
                <a href="#waitlist">
                  <button>
                    Reserve your spot
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
                      <path
                        d="M12.5 9L15.5 12L12.5 15"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mq">
        <div className="first">
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/buypower-logo.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/lacore.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/sneaklin.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/marios.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/abc.png" />
        </div>
        <div className="second">
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/buypower-logo.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/lacore.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/sneaklin.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/marios.png" />
          <StaticImage alt="" src="../../../assets/images/jpegs/terminal/abc.png" />
        </div>
      </div>
    </>
  );
};

export { TerminalHero };
