import React, { useEffect, useRef, useState } from "react";
import { Br } from "components";
import hero_gif from "assets/images/svgs/terminal/hero.mp4";
import "./index.scss";
import Play from "assets/images/svgs/terminal/play.svg";
import PlayMobile from "assets/images/svgs/terminal/play_mobile.svg";
import gsap from "gsap";
// import HeroVid from "assets/images/svgs/terminal/video.mp4";
import { MaxSponsorList } from "config/terminal";

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
        <video onClick={close} ref={hero_vid} controls src="../../../assets/images/svgs/terminal/video.mp4"></video>
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
              <svg
                className="one"
                width="761"
                height="235"
                viewBox="0 0 761 235"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.0951 5.12842H95.3873L132.141 155.389H134.705L221.203 5.12842H279.495L242.571 228.896H196.758L221.032 83.2503H219.152L137.269 227.87H105.815L72.1388 82.7375H70.2584L45.8133 228.896H0L37.0951 5.12842Z"
                  fill="white"
                />
                <path
                  d="M320.009 228.896H269.238L383.771 5.12842H444.799L484.629 228.896H433.858L406.849 56.4119H405.14L320.009 228.896ZM331.462 141.03H451.295L445.141 177.954H325.308L331.462 141.03Z"
                  fill="white"
                />
                <path
                  d="M598.478 93.507L611.982 116.926L625.487 93.507L638.992 70.0875L652.496 46.668L666.001 23.2485L679.506 0H733.524L720.02 23.2485L706.515 46.668L693.01 70.0875L679.506 93.507L666.001 116.926H693.01L706.515 140.346L720.02 163.765L733.524 187.185L747.029 210.604L760.534 234.024H706.515L693.01 210.604L679.506 187.185L666.001 163.765L652.496 140.346L638.992 116.926L625.487 140.346L611.982 163.765L598.478 187.185L584.802 210.604L571.298 234.024H517.279L530.784 210.604L544.288 187.185L557.793 163.765L571.298 140.346L584.802 116.926H557.793L544.288 93.507L530.784 70.0875L517.279 46.668L503.774 23.2485L490.27 0H544.288L557.793 23.2485L571.298 46.668L584.802 70.0875L598.307 93.507H598.478Z"
                  fill="white"
                />
              </svg>

              <svg
                className="two"
                width="361"
                height="111"
                viewBox="0 0 361 111"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5946 2.43237H45.2432L62.6757 73.7026H63.8919L104.919 2.43237H132.568L115.054 108.568H93.3243L104.838 39.4864H103.946L65.1081 108.081H50.1892L34.2162 39.2432H33.3243L21.7297 108.568H0L17.5946 2.43237Z"
                  fill="white"
                />
                <path
                  d="M151.783 108.568H127.702L182.027 2.43237H210.973L229.865 108.568H205.783L192.973 26.7567H192.162L151.783 108.568ZM157.216 66.8918H214.054L211.135 84.4054H154.297L157.216 66.8918Z"
                  fill="white"
                />
                <path
                  d="M283.865 44.3514L290.27 55.4595L296.675 44.3514L303.081 33.2432L309.486 22.1351L315.892 11.027L322.297 0H347.919L341.513 11.027L335.108 22.1351L328.702 33.2432L322.297 44.3514L315.892 55.4595H328.702L335.108 66.5676L341.513 77.6757L347.919 88.7838L354.324 99.8919L360.729 111H335.108L328.702 99.8919L322.297 88.7838L315.892 77.6757L309.486 66.5676L303.081 55.4595L296.675 66.5676L290.27 77.6757L283.865 88.7838L277.378 99.8919L270.973 111H245.351L251.757 99.8919L258.162 88.7838L264.567 77.6757L270.973 66.5676L277.378 55.4595H264.567L258.162 44.3514L251.757 33.2432L245.351 22.1351L238.946 11.027L232.54 0H258.162L264.567 11.027L270.973 22.1351L277.378 33.2432L283.784 44.3514H283.865Z"
                  fill="white"
                />
              </svg>
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
        <div className="first">{MaxSponsorList}</div>
        <div className="second">{MaxSponsorList}</div>
      </div>
    </>
  );
};

export { TerminalHero };
