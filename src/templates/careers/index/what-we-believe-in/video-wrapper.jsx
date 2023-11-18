import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PlayButton from "svgs/white-play-button.svg";

import { whatWeBelieveIn } from "config/careers"
import { Ntext } from "components";

const VideoWrapper = () => {
  return (
    <section className={sectionStyle}>
      <Ntext
        variant="h1"
        className={captionStyle}
        value={whatWeBelieveIn.videoCaption}
        color="primary-100"
      />
      <PlayButton className={playButtonStyle} />
    </section>
  );
};

const playButtonStyle = ctl(`
  absolute
  right-12
  bottom-8
  md:right-24
  md:bottom-16
  cursor-pointer
`);

const sectionStyle = ctl(`
  flex
  flex-col
  h-[856px]
  mt-[120px]
  bg-video-thumbnail
  bg-cover
  relative
  w-full
`);

const captionStyle = ctl(`
  mx-8
  my-auto
  lg:mx-52
  max-w-[480px]
`);

export { VideoWrapper };
