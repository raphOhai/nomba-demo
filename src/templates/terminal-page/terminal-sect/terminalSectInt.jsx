import React, { useState, useRef, useEffect } from "react";
import "./index.scss";
import { Br } from "components/br";
import ExperienceTerminal from "assets/images/svgs/terminal/experience-terminal.svg";
import Sideways from "assets/images/svgs/terminal/sideways.svg";
import { StaticImage } from "gatsby-plugin-image";
import spinTerminal from "assets/images/svgs/terminal/spin.mp4";
import TerminalPrint from "assets/images/svgs/terminal/comp.mp4";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IO } from "animations/observe";
gsap.registerPlugin(ScrollTrigger);

const TerminalSectionInteractions = () => {
  const [isHover, setHover] = useState(false);
  const [isHoverVid, setHoverVid] = useState(false);
  const video = useRef(null);

  const fadeOut = () => {
    setHover(!isHover);
  };

  const fadeOutVid = () => {
    setHoverVid(true);
  };

  useEffect(() => {
    const wrap = document.querySelector(".c_terminal_sectInt_experience");
    IO(wrap).then(
      () => {
        setTimeout(() => {
          fadeOutVid();
        }, 500);
        setTimeout(() => {
          video.current.play();
        }, 2000);
      },
      {
        threshold: 1,
      }
    );

    const sections = gsap.utils.toArray(".c_feature");
    gsap.set(sections, {
      opacity: 0,
      xPercent: 10,
      yPercent: 10,
    });
    gsap.to(sections, {
      scrollTrigger: {
        trigger: ".c_terminal_sectInt_print_fl_features",
        start: "top center",
        scrub: true,
        toggleActions: "play reverse play reverse",
        end: "+=700",
      },
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      stagger: 1.5,
      duration: 3,
      ease: "easeOut",
    });
  });

  return (
    <div className="c_terminal_sectInt">
      <div className="c_terminal_sectInt_paySol">
        <h1 data-animation="h">The perfect payment solution for smooth business transaction</h1>
        <div onMouseOver={fadeOut} onMouseLeave={fadeOut} className={` img_1 img ${!isHover ? "fadeIn" : "fadeOut"}`}>
          <StaticImage src="../../../assets/images/svgs/terminal/sideways-skeleton.svg" alt="" />
        </div>
        <div className={` img_2 img ${isHover ? "fadeIn" : "fadeOut"}`}>
          <StaticImage alt="" src="../../../assets/images/svgs/terminal/sideways.png" />
        </div>
      </div>
      <div className="c_terminal_sectInt_experience">
        <ExperienceTerminal className={isHoverVid ? "fadeOut" : null} />
        <video ref={video} className={isHoverVid ? "fadeIn" : null} loop muted src={spinTerminal}></video>

        <div className="c_terminal_sectInt_experience_txt">
          <h1 data-animation="h">
            Experience the MAX in your <Br on="desktop" /> payment collection
          </h1>
          <p className="c_terminal_sectInt_experience_txt_p" data-animation="p">
            Designed to the last pixel to give you the max performance - faster transaction, long lasting battery, high
            speed printer, durable and reliable POS terminal
          </p>
          <div className="cta">
            <p>Join the waitlist</p>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.93994 13.28L10.2866 8.9333C10.7999 8.41997 10.7999 7.57997 10.2866 7.06664L5.93994 2.71997"
                stroke="#FFCC00"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="c_terminal_sectInt_print child_wrap text-center">
        <h1 data-animation="h">
          Get ahead with the power of <Br on="all" /> Nomba MAX!
        </h1>
        <div className="c_terminal_sectInt_print_fl">
          <video autoPlay muted src={TerminalPrint}></video>
          <div className="c_terminal_sectInt_print_fl_features">
            <div className="c_feature">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="black" />
                <path
                  d="M40.9375 31.5625C40.9375 37.6 36.0375 42.5 30 42.5C23.9625 42.5 19.0625 37.6 19.0625 31.5625C19.0625 25.525 23.9625 20.625 30 20.625C36.0375 20.625 40.9375 25.525 40.9375 31.5625Z"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path d="M30 25V31.25" stroke="#FFD42B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path
                  d="M26.25 17.5H33.75"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Faster Transactions</p>
            </div>
            <div className="c_feature">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="black" />
                <path
                  d="M24.0625 23.75H35.9375V21.25C35.9375 18.75 35 17.5 32.1875 17.5H27.8125C25 17.5 24.0625 18.75 24.0625 21.25V23.75Z"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M35 33.75V38.75C35 41.25 33.75 42.5 31.25 42.5H28.75C26.25 42.5 25 41.25 25 38.75V33.75H35Z"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M41.25 27.5V33.75C41.25 36.25 40 37.5 37.5 37.5H35V33.75H25V37.5H22.5C20 37.5 18.75 36.25 18.75 33.75V27.5C18.75 25 20 23.75 22.5 23.75H37.5C40 23.75 41.25 25 41.25 27.5Z"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.25 33.75H34.7375H23.75"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.75 28.75H27.5"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>High Speed Printers</p>
            </div>
            <div className="c_feature">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="black" />
                <path
                  d="M40.625 26.875C42.5 26.875 42.5 27.5 42.5 28.75V31.25C42.5 32.5 42.5 33.125 40.625 33.125"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.9751 27.5C23.3876 29.1375 23.3876 30.8625 22.9751 32.5"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M27.3501 27.5C27.7626 29.1375 27.7626 30.8625 27.3501 32.5"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.7251 27.5C32.1376 29.1375 32.1376 30.8625 31.7251 32.5"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.25 38.75H23.75C18.75 38.75 17.5 37.5 17.5 32.5V27.5C17.5 22.5 18.75 21.25 23.75 21.25H31.25C36.25 21.25 37.5 22.5 37.5 27.5V32.5C37.5 37.5 36.25 38.75 31.25 38.75Z"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Long Lasting Battery</p>
            </div>
            <div className="c_feature">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="black" />
                <path
                  d="M21.1375 29.8001C26.5125 25.6501 33.5 25.6501 38.875 29.8001"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 25.45C25.075 19.6 34.925 19.6 42.5 25.45"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.4875 34.3625C27.425 31.3125 32.5626 31.3125 36.5001 34.3625"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.75 38.9375C28.725 37.4125 31.2875 37.4125 33.2625 38.9375"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>Reliable Network Connectivity</p>
            </div>

            <div className="c_feature">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="30" cy="30" r="30" fill="black" />
                <path
                  d="M22.6124 31.6H26.4749V40.6C26.4749 42.7 27.6124 43.125 28.9999 41.55L38.4624 30.8C39.6249 29.4875 39.1374 28.4 37.3749 28.4H33.5124V19.4C33.5124 17.3 32.3749 16.875 30.9874 18.45L21.5249 29.2C20.3749 30.525 20.8624 31.6 22.6124 31.6Z"
                  stroke="#FFD42B"
                  strokeWidth="2"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p>High Speed Performance</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TerminalSectionInteractions };
