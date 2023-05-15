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
import BusinessVid from "assets/images/svgs/terminal/Supermarket.mp4";
import { MaxTestimonial } from "./testimonial";
import { SmallBusinessTestimonials } from "config/testimonials";
import { maxTestimonial } from "config/terminal";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const MaxBusinessTypes = ({ title }) => {
  const isMobile = useIsMobile();
  const [playVideo, setPlayVid] = useState(false);
  const hero_vid = useRef(null);

  useEffect(() => {});

  const playVid = () => {
    setPlayVid(!playVideo);
    // const video = document.querySelector(".hero_video_pl video");
    // if (playVideo) {
    //   video.pause();
    //   video.currentTime = 0;
    // } else {
    //   video.play();
    // }
  };
  const close = () => {
    setPlayVid(!playVideo);
  };

  return (
    <section className="pt-[150px] md:pt-[16rem] feature-section2" id="business-types">
      <div className={`hero_video_pl ${playVideo ? "view" : null}`}>
        {playVideo && <video onClick={close} ref={hero_vid} controls autoPlay src={BusinessVid}></video>}
      </div>
      <Container>
        <div className="md:max-w-[671px] md:mx-auto  md:text-center">
          <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
        <div className="md:flex md:flex-row mt-12 gap-6 hidden">
          <div className={businessTab}>For small businesses</div>
          <div className={businessTab}>For large businesses</div>
        </div>
        <div className="relative">
          <div className="mt-[50px] business-video ">
            <StaticImage
              className={`${coverVideo} hidden md:block`}
              alt="video cover"
              src="../../../assets/images/jpegs/terminal/max/video-cover.png"
            />
            <StaticImage
              className={`${coverVideo} md:hidden`}
              alt="video cover"
              src="../../../assets/images/jpegs/terminal/max/video-cover-mobile.png"
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
        <div className="flex flex-col mt-12 gap-6 md:!hidden">
          <div className={businessTabMobile}>For small businesses</div>
          <div className={businessTabMobile}>For large businesses</div>
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
export { MaxBusinessTypes };
