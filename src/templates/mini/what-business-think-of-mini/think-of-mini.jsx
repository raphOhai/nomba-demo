import React, { useEffect, useState, useRef } from "react";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import PlayMobile from "assets/images/svgs/terminal/play_mobile.svg";
import BusinessVid from "assets/images/jpegs/mini/BusinessVideo.mp4";

// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const ThinkOfMini = ({ title }) => {
  const [playVideo, setPlayVid] = useState(false);
  const [loadVideo, setLoadVideo] = useState(false);
  const hero_vid = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      setLoadVideo(true);
    }, 5000);
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
    const video = document.querySelector(".hero_video_pl video");
    if (playVideo) {
      video.pause();
      video.currentTime = 0;
    }
  };

  return (
    <section className="feature-section2" id="business-types">
      <div className={`hero_video_pl ${playVideo ? "view" : null}`}>
        {loadVideo && <video onClick={close} ref={hero_vid} controls src={BusinessVid}></video>}
      </div>
      <Container>
        <div className="md:max-w-[700px] md:mx-auto  md:text-center">
          <Ntext variant="h2" className="text-center text-balance" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>

        <div className="relative">
          <div className="mt-[50px] text-center mx-auto business-video ">
            <div className="!hidden md:!block">
              <StaticImage
                className={coverVideo}
                alt="video cover"
                src="../../../assets/images/jpegs/mini/video-cover.png"
              />
            </div>
            <div className="md:!hidden">
              <StaticImage
                className={coverVideo}
                alt="video cover"
                src="../../../assets/images/jpegs/mini/video-cover-mobile.png"
              />
            </div>
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
const businessTabMobile = ctl(`
flex-1 
text-[14px] 
md:text-[17px] 
leading-[22px] 
md:leading-8 
text-center 
border 
border-m-yellow
py-[13px]
text-primary-100 
rounded-[10px]
`);
const coverVideo = ctl(`
rounded-[3.23px]
bg-gradient-to-r from-m-yellow1

`);
export { ThinkOfMini };
