import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { whatWeBelieveIn } from "config/careers"
import { Container, Ntext } from "components";
import { VideoWrapper } from "./video-wrapper";

const WhatWeBelieveIn = () => {
  const { title, description, videoCaption, videoThumbnail } = whatWeBelieveIn;

  return (
    <section className={sectionStyle}>
      <Container className="flex flex-col">
        <section className={headingStyle}>
          <Ntext className="max-w-[440px]" variant="h2" value={title} />
          <Ntext className="max-w-[620px]" variant="p16" value={description} />
        </section>
      </Container>
      <VideoWrapper />
    </section>
  );
};

const sectionStyle = ctl(`
  pt-[120px]
  bg-white
`);

const headingStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  lg:justify-between
  space-y-10
  lg:space-y-0
  w-full
`);

export { WhatWeBelieveIn };
