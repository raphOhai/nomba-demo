import React, { useEffect, useState } from "react";
import { Button } from "components/button";
import { Br } from "components";
import heroGif from "assets/images/svgs/terminal/hero.mp4";
import "./index.scss";
import Play from "assets/images/svgs/terminal/play.svg";
import gsap from "gsap";
import { StaticImage } from "gatsby-plugin-image";
<StaticImage />;

const TerminalHero = () => {
  // useEffect(() => {
  //   const win = document.querySelector('.terminal_hero');
  //   gsap.set(".play_btn", { xPercent: -50, yPercent: -50 });

  //   let xTo = gsap.quickTo(".play_btn", "x", { duration: 0.6, ease: "power3" }),
  //     yTo = gsap.quickTo(".play_btn", "y", { duration: 0.6, ease: "power3" });

  //   win.addEventListener("mousemove", e => {
  //     xTo(e.clientX);
  //     yTo(e.clientY);
  //   });
  // });

  // const [position, setPosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (e) => {
  //   const x = e.clientX;
  //   const y = e.clientY;
  //   setPosition({ x, y });
  // };

  // const getTransformStyle = () => {

  //   const newX = lerp * (position.x - window.innerWidth / 4);
  //   const newY = lerp * (position.y - window.innerHeight /4);
  //   return `translate3d(${newX}px, ${newY}px, 0)`;
  // };

  const playVid = () => {
    console.log("vid");
  };
  return (
    <>
      <div className="terminal_hero">
        <div className="terminal_hero_video">
          <video loop autoPlay muted src={heroGif}></video>
        </div>
        {/* <div onClick={playVid} className="play_btn">
          <Play />
        </div> */}
        <div className="terminal_hero_sect">
          <div className="terminal_hero_sect_txt">
            <div className="terminal_hero_sect_txt_l">
              <h1>Experience the</h1>
              <Br on="desktop" />
              <svg width="761" height="235" viewBox="0 0 761 235" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                  <g id="M">
                    <path
                      id="Vector"
                      d="M37.095 5.12842H95.3872L132.14 155.389H134.705L221.203 5.12842H279.495L242.571 228.896H196.758L221.032 83.2503H219.151L137.269 227.87H105.815L72.1387 82.7375H70.2583L45.8132 228.896H-0.00012207L37.095 5.12842Z"
                      fill="white"
                    />
                  </g>
                  <g id="A">
                    <path
                      id="Vector_2"
                      d="M320.009 228.896H269.238L383.771 5.12842H444.799L484.629 228.896H433.858L406.849 56.4119H405.14L320.009 228.896ZM331.462 141.03H451.295L445.141 177.954H325.308L331.462 141.03Z"
                      fill="white"
                    />
                  </g>
                  <g id="x">
                    <path
                      id="Vector_3"
                      d="M598.478 93.507L611.982 116.926L625.487 93.507L638.992 70.0875L652.496 46.668L666.001 23.2485L679.506 0H733.524L720.02 23.2485L706.515 46.668L693.01 70.0875L679.506 93.507L666.001 116.926H693.01L706.515 140.346L720.02 163.765L733.524 187.185L747.029 210.604L760.534 234.024H706.515L693.01 210.604L679.506 187.185L666.001 163.765L652.496 140.346L638.992 116.926L625.487 140.346L611.982 163.765L598.478 187.185L584.802 210.604L571.298 234.024H517.279L530.784 210.604L544.288 187.185L557.793 163.765L571.298 140.346L584.802 116.926H557.793L544.288 93.507L530.784 70.0875L517.279 46.668L503.774 23.2485L490.27 0H544.288L557.793 23.2485L571.298 46.668L584.802 70.0875L598.307 93.507H598.478Z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="terminal_hero_sect_txt_r">
              <p data-animation="p">
                Built to maximise your business growth and efficiency through cutting-edge payment solutions.
              </p>
              <div className="btn">
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
                    <path d="M12.5 9L15.5 12L12.5 15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mq">
        <StaticImage alt="" src="../assets/images/jpegs/terminal/buypower-logo.png" />
        <StaticImage alt="" src="../assets/images/jpegs/terminal/smg.png" />
        <StaticImage alt="" src="../assets/images/jpegs/terminal/lacore.png" />
        <StaticImage alt="" src="../assets/images/jpegs/terminal/grillspizza.png" />
        <StaticImage alt="" src="../assets/images/jpegs/terminal/sneaklin.png" />
        <StaticImage alt="" src="../assets/images/jpegs/terminal/marios.png" />
        <StaticImage alt="" src="../assets/images/jpegs/terminal/abc.png" />
      </div>
    </>
  );
};

export { TerminalHero };
