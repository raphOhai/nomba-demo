import React, { useEffect, useRef, useState } from "react";

import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext } from "components";
import ExperienceTerminal from "svgs/terminal/experience-terminal.svg";

import { IO } from "animations/observe";
import { videoLinks } from "utils/videoLinks";

const ExperienceMax = ({ title, description }) => {
  const [isHoverVid, setHoverVid] = useState(false);
  const video = useRef(null);

  const fadeOutVid = () => {
    setHoverVid(true);
  };

  useEffect(() => {
    const wrap = document.querySelector(".spininTerminal");
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
  });
  return (
    <section className="mt-[75px] md:mt-[100px] md:pt-[100px] pt-[75px] bg-black">
      <Container>
        <div className={heroTextHeaders}>
          <Ntext variant="text8" color="primary-100" className="basis-3/5 " data-animation="h">
            {title}
          </Ntext>

          <div className={subTextStyle}>
            <Ntext variant="text3" color="n-grey1" data-animation="h">
              {description}
            </Ntext>
            <a href="#waitlist" className="cta">
              <div className="flex gap-3 items-center text-n-yellow">
                <Ntext variant="text3" color="n-yellow">
                  Join the experience
                </Ntext>
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
            </a>
          </div>
        </div>

        <div className="c_terminal_sectInt_experience spininTerminal">
          <ExperienceTerminal className={isHoverVid ? "fadeOut" : null} />
          <video
            ref={video}
            className={isHoverVid ? "fadeIn" : null}
            loop
            autoPlay
            muted
            playsInline
            src={videoLinks.spinTerminal}
          ></video>
        </div>
      </Container>
    </section>
  );
};

const heroTextHeaders = ctl(`
md:flex
md:flex-row
md:items-start
mb-10
gap-5
`);

const subTextStyle = ctl(`
mb-8
mt-6
md:mt-3
basis-2/5
flex 
flex-col
gap-10
max-w-[426.85px]
`);

export { ExperienceMax };
