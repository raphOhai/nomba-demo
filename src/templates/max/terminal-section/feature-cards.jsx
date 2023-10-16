import React, { useEffect, useRef, useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";
import { maxFeatures } from "config/terminal";
import battery from "assets/images/jpegs/terminal/max/features/battery5.mp4";
import { IO } from "animations/observe";
import { videoLinks } from "utils/videoLinks";

const FeatureCards = () => {
  const [isHoverVid1, setHoverVid1] = useState(false);
  const [isHoverVid2, setHoverVid2] = useState(false);
  const [isHoverVid3, setHoverVid3] = useState(false);
  const [isHoverVid4, setHoverVid4] = useState(false);
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  const video4 = useRef(null);

  useEffect(() => {
    const wrap1 = document.querySelector(".card1");
    IO(wrap1).then(
      () => {
        setTimeout(() => {
          setHoverVid1(true);
        }, 500);
        setTimeout(() => {
          video1.current.play();
        }, 1600);
      },
      {
        threshold: 1,
      }
    );

    // wrapper 2
    const wrap2 = document.querySelector(".card2");
    IO(wrap2).then(
      () => {
        setTimeout(() => {
          setHoverVid2(true);
        }, 500);
        setTimeout(() => {
          video2.current.play();
        }, 1600);
      },
      {
        threshold: 1,
      }
    );

    // wrapper 3
    const wrap3 = document.querySelector(".card3");
    IO(wrap3).then(
      () => {
        setTimeout(() => {
          setHoverVid3(true);
        }, 500);
        setTimeout(() => {
          video3.current.play();
        }, 1600);
      },
      {
        threshold: 1,
      }
    );

    // wrapper 4
    const wrap4 = document.querySelector(".card4");
    IO(wrap4).then(
      () => {
        setTimeout(() => {
          setHoverVid4(true);
        }, 500);
        setTimeout(() => {
          video4.current.play();
        }, 1600);
      },
      {
        threshold: 1,
      }
    );
  });
  return (
    <div className={featureContainer}>
      <div className={`${featureCard} features`}>
        <div>
          <Ntext variant="text6heavy" color="primary-100">
            {maxFeatures[0].title}
          </Ntext>

          <Ntext variant="text3" color="primary-500" className="mt-[20px] md:mt-[28px]">
            {maxFeatures[0].description}
          </Ntext>
        </div>

        <div className="relative card1">
          <div
            className={`${isHoverVid1 ? "fadeOut" : null}  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {maxFeatures[0].image}
          </div>
          {/* <div className="c_terminal_sectInt_experience spininTerminal">
                        <ExperienceTerminal className={isHoverVid ? "fadeOut" : null} /> */}
          <video
            ref={video1}
            className={`${isHoverVid1 ? "fadeIn" : null}   max-h-[340px] md:max-h-[400px] mx-auto`}
            muted
            playsInline
            src={videoLinks.fastPayment}
          ></video>
          {/* </div> */}
        </div>
      </div>

      {/* Second featureCard */}
      <div className={`${featureCard} features md:mt-[42px]`}>
        <div>
          <Ntext variant="text6heavy" color="primary-100">
            {maxFeatures[1].title}
          </Ntext>

          <Ntext variant="text3" color="primary-500" className="mt-[20px] md:mt-[28px]">
            {maxFeatures[1].description}
          </Ntext>
        </div>

        <div className="relative card2">
          <div
            className={`${isHoverVid2 ? "fadeOut" : null}  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {maxFeatures[1].image}
          </div>
          {/* <div className="c_terminal_sectInt_experience spininTerminal">
                        <ExperienceTerminal className={isHoverVid ? "fadeOut" : null} /> */}
          <video
            ref={video2}
            className={`${isHoverVid2 ? "fadeIn" : null}  max-h-[340px]  md:max-h-[400px] mx-auto`}
            muted
            playsInline
            src={videoLinks.speedPrinters}
          ></video>
          {/* </div> */}
        </div>
      </div>

      {/* Third featureCard */}
      <div className={`${featureCard} features !bg-[#121113]`}>
        <div>
          <Ntext variant="text6heavy" color="primary-100">
            {maxFeatures[2].title}
          </Ntext>

          <Ntext variant="text3" color="primary-500" className="mt-[20px] md:mt-[28px]">
            {maxFeatures[2].description}
          </Ntext>
        </div>

        <div className="text-center relative card3">
          <div
            className={`${isHoverVid3 ? "fadeOut" : null}  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {maxFeatures[2].image}
          </div>
          {/* <div className="c_terminal_sectInt_experience spininTerminal">
                        <ExperienceTerminal className={isHoverVid ? "fadeOut" : null} /> */}
          <video
            ref={video3}
            className={`${isHoverVid3 ? "fadeIn" : null}   max-h-[340px] md:max-h-[400px] mx-auto`}
            muted
            playsInline
            src={battery}
          ></video>
          {/* </div> */}
        </div>
      </div>

      {/* Fourth featureCard */}
      <div className={`${featureCard} md:mt-[42px] features`}>
        <div>
          <Ntext variant="text6heavy" color="primary-100">
            {maxFeatures[3].title}
          </Ntext>

          <Ntext variant="text3" color="primary-500" className="mt-[20px] md:mt-[28px]">
            {maxFeatures[3].description}
          </Ntext>
        </div>

        <div className="text-center relative card4">
          <div
            className={`${isHoverVid4 ? "fadeOut" : null}  absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2`}
          >
            {maxFeatures[3].image}
          </div>
          {/* <div className="c_terminal_sectInt_experience spininTerminal">
                        <ExperienceTerminal className={isHoverVid ? "fadeOut" : null} /> */}
          <video
            ref={video4}
            className={`${isHoverVid4 ? "fadeIn" : null}   max-h-[340px] mx-auto bg-primary`}
            muted
            playsInline
            src={videoLinks.signal}
          ></video>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

const featureCard = ctl(`
flex flex-col justify-between p-[20px] md:p-[40px] h-[495px] md:h-[680px] md:mx-4 bg-[#121113]
`);
const featureContainer = ctl(`
grid grid-cols-1 gap-5 md:gap-0 md:grid-cols-2  mt-[50px] md:mt-[100px]
`);

export { FeatureCards };
