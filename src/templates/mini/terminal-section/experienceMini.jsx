import React, { useLayoutEffect, useRef, useState } from "react";

import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext } from "components";
import Mini from "svgs/mini.svg";
import spinTerminal from "jpegs/mini/terminal/MINI1.mp4";
import gsap from "gsap";
import { IO } from "animations/observe";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const ExperienceMini = ({ title, description }) => {
  const comp = useRef(null);
  const [isHoverVid, setHoverVid] = useState(false);
  const video = useRef(null);

  const fadeOutVid = () => {
    setHoverVid(true);
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: comp.current,
        start: "top top",
        end: "+=1000px",
        pin: true,
        // pinSpacing: false,
      });
      const wrap = document.querySelector(".spininTerminal");
      IO(wrap).then(
        () => {
          console.log(90);
          setTimeout(() => {
            fadeOutVid();
          }, 500);
          setTimeout(() => {
            video.current.playbackRate = 0.5;
            video.current.play();
          }, 2000);
        },
        {
          threshold: 1,
        }
      );
    });
    return () => ctx.revert();
  });
  return (
    <section ref={comp} className="my-[75px] md:mt-[100px] md:pt-[100px] pt-[75px] bg-black experience-mini">
      <Container>
        <div className="md:max-w-[671px] md:mx-auto  md:text-center mb-[30px] md:mb-[80px]">
          <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>

        <div className="c_terminal_sectInt_experience mini-experience spininTerminal md:!min-h-[100vh]">
          <Mini className={`${isHoverVid ? "" : null} md:!w-[400px] !h-[900px] md:!top-[-15%] `} />
          <video
            ref={video}
            className={`${isHoverVid ? "fadeIn" : null} md:!w-[35%] !w-[40%] md:!top-[-15%]`}
            loop
            autoPlay
            height={900}
            width={400}
            muted
            playsInline
            src={spinTerminal}
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

export { ExperienceMini };
