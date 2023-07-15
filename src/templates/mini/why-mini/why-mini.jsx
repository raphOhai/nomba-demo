import React, { useEffect, useState, useRef } from "react";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import PlayMobile from "assets/images/svgs/terminal/play_mobile.svg";
import BusinessVid from "assets/images/jpegs/terminal/max/ghatview.mp4";
import constants from "config/constants.json";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const WhyMini = ({ title }) => {
  const { SIGNUP_URL } = constants;
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
    // <section className="pt-[150px] md:pt-[16rem] feature-section2" id="business-types">
    //   <div className={`hero_video_pl ${playVideo ? "view" : null}`}>
    //     {loadVideo && <video onClick={close} ref={hero_vid} controls src={BusinessVid}></video>}
    //   </div>
    //   <Container>
    //     <div className="md:max-w-[671px] md:mx-auto  md:text-center">
    //       <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
    //         {title}
    //       </Ntext>
    //     </div>

    //     <div className="relative">
    //       <div className="mt-[50px] business-video ">
    //         <div className="!hidden md:!block">
    //           <StaticImage
    //             className={coverVideo}
    //             alt="video cover"
    //             src="../../../assets/images/jpegs/terminal/max/video-cover.png"
    //           />
    //         </div>
    //         <div className="md:!hidden">
    //           <StaticImage
    //             className={coverVideo}
    //             alt="video cover"
    //             src="../../../assets/images/jpegs/terminal/max/video-cover-mobile.png"
    //           />
    //         </div>
    //       </div>
    //       <div onClick={playVid} className="play_mobile">
    //         {playVideo ? (
    //           <div className="close_vid_m">
    //             <span></span>
    //             <span></span>
    //           </div>
    //         ) : (
    //           <PlayMobile />
    //         )}
    //       </div>
    //     </div>
    //   </Container>
    // </section>
    <section className="bg-black min-h-[100vh] md:mt-[-70px] flex flex-col justify-center items-center">
      <Container className="relative">
        <div className=" w-full">
          <div className="flex md:flex-row flex-col justify-center items-center md:-ml-[2rem] mt-10 ">
            {/* <div className="   max-w-[336px] md:max-w-[23rem]">
              <Ntext
                variant="h1"
                color="primary-100"
                className="text-center md:text-left md:leading-[63px]"
                data-animation="ltr"
              >
                Power your Restaurant
              </Ntext>
            </div> */}
            <div className="">
              <video
                src={BusinessVid}
                controls={false}
                muted
                playsInline
                className=""
                autoPlay
                loop
                width={1440}
                height={808}
              ></video>
            </div>
            {/* <div className=" mx-auto  max-w-[290px] md:max-w-[21rem]">
              {" "}
              <Ntext variant="h1" className="md:leading-[63px]" color="primary-100" data-animation="rtl">
                Scan. <br /> view. pay
              </Ntext>
            </div> */}
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
export { WhyMini };
