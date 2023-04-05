import React, { useEffect } from "react";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
gsap.registerPlugin(ScrollTrigger);

const ZoomInPos = () => {
  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".c_czoom",
        start: "top center",
        toggleActions: "play reverse play reverse",
        scrub: true,
        end: "+=900",
        onComplete: () => {
          console.log("complete");
        },
      },
    });
    tl.to(".c_czoom_posLeft", {
      scale: 2,
      xPercent: 25,
      duration: 3,
      ease: ".easeInOut",
    });
    tl.to(
      ".c_czoom_posRight",
      {
        scale: 2,
        xPercent: -25,
        duration: 3,
        ease: "easeInOut",
      },
      0
    );
  });
  return (
    <div className="c_czoom">
      <div className="c_czoom_posLeft abs">
        <StaticImage alt="" src="../../../assets/images/svgs/terminal/left_pos.png" />
      </div>
      <div className="c_czoom_posRight abs">
        <StaticImage alt="" src="../../../assets/images/svgs/terminal/right_pos.png" />
      </div>
    </div>
  );
};

export { ZoomInPos };
