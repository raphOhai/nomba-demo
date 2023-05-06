import React, { useEffect, useState, useRef } from "react";
import { maxFeatures } from "config/terminal";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIsMobile from "hooks/useIsMobile";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import Play from "assets/images/svgs/terminal/play.svg";
import PlayMobile from "assets/images/svgs/terminal/play_mobile.svg";
import BusinessVid from "assets/images/svgs/terminal/Video.mp4";
import { MaxTestimonial } from "./testimonial";
import { SmallBusinessTestimonials } from "config/testimonials";
import { maxTestimonial } from "config/terminal";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const MaxBusinessTypes = ({ title }) => {
  const isMobile = useIsMobile();
  const [playVideo, setPlayVid] = useState(false);
  const hero_vid = useRef(null);

  useEffect(() => {
    const fontSize = isMobile ? "32px" : "48px";
    // gsap.set(".section_header2", {
    //     // fontSize: 0,
    //     yPercent: 30,
    //     opacity: 0,
    // });
    gsap.to(".section_header2", {
      scrollTrigger: {
        trigger: ".section_header2",
        start: "top 15%",
        scrub: true,
        toggleActions: "play reverse restart reverse",
        end: "=+200px",
      },
      opacity: 0.04,
      autoAlpha: 0,
      yPercent: -30,
      // fontSize: fontSize,
      xPercent: 0,
      duration: 0.4,
      ease: "easeIn",
    });
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
    <section className="pt-[150px] md:pt-[16rem] feature-section2">
      <div className={`hero_video_pl ${playVideo ? "view" : null}`}>
        <video onClick={close} ref={hero_vid} controls src={BusinessVid}></video>
      </div>
      <Container>
        <div className="md:max-w-[671px] md:mx-auto section_header2 md:text-center">
          <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
        <div className="flex flex-row mt-12">
          <div className={businessTab}>For small businesses</div>
          <div className={businessTab}>For large businesses</div>
        </div>
        <div className="relative">
          <div className="mt-[50px] business-video ">
            <StaticImage
              className={coverVideo}
              alt="video cover"
              src="../../../assets/images/jpegs/terminal/max/video-cover.png"
            />
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
        </div>
        <MaxTestimonial testimonials={maxTestimonial} headingText="Don’t just take our word for it" />
      </Container>
    </section>
  );
};

const businessTab = ctl(`
flex-1 
text-[14px] 
md:text-[17px] 
leading-[22px] 
md:leading-8 
text-center 
border 
border-m-yellow
py-[23px]
text-primary-100 
rounded-[10px]
`);
const coverVideo = ctl(`
rounded-[3.23px]
bg-gradient-to-r from-m-yellow1

`);
export { MaxBusinessTypes };
