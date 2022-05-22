import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { TimelineSteps } from "./timeline-steps";
import { Ntext } from "components/ntext";
import { Container } from "components/container";

const Timeline = ({ reverse, timelineData, image, heading, subHeading }) => {
  const timelineLength = timelineData.length;

  const timeLineData = timelineData.map((item, i) => (
    <TimelineSteps {...item} key={i} step={i + 1} length={timelineLength} />
  ));

  return (
    <Container>
      <div className={`${pageWrapStyle} ${reverse && "lg:flex-row-reverse"}`}>
        <div className={imageWrapStyle}>{image}</div>

        <div>
          <Ntext variant="h3" value={heading} className={headingStyle} />
          <Ntext variant="p18" value={subHeading} className={subHeadingStyle} />
          {timeLineData}
        </div>
      </div>
    </Container>
  );
};

const pageWrapStyle = ctl(`
  flex
  flex-col
  lg:flex-row
  items-center
  justify-between
  gap-6
  lg:my-[150px]
  my-[90px]
`);
const headingStyle = ctl(`
  max-w-[559px] 
  mb-4
  mt-14 lg:mt-0
`);
const subHeadingStyle = ctl(`
  lg:mb-[78px] 
  mb-12
  md:mb-16
  max-w-[410px]
`);
const imageWrapStyle = ctl(`
  pt-[69px]
  pb-[47px]
  px-[80px]
  bg-secondary-100
  rounded-lg
`);

Timeline.propTypes = {
  reverse: PropTypes.bool,
  timeLineData: PropTypes.object,
  image: PropTypes.node,
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export { Timeline };
