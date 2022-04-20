import React from "react";
import { Container, Ntext } from "components";
import Arrow from "svgs/readmore.svg";
import ctl from "@netlify/classnames-template-literals";

const AboutTimeline = () => {
  return (
    <section className={sectionWrapperStyles}>
      <Container>
        <div className={timelineGridStyle}>
          {timelineList.map((item, index) => {
            return (
              <div
                className={timelineItemWrapperStyle}
                key={`about_timeline_${index}`}
              >
                <div className={arrowLineWrapperStyle}>
                  <Arrow />
                  <div className={timelineLineStyles}></div>
                </div>
                <div className="max-w-[326px]">
                  <Ntext
                    variant="h4"
                    className={titleStyle}
                    value={item?.title}
                  />

                  <Ntext variant="p18" value={item?.description} />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

const timelineList = [
  {
    title: "The Problem",
    description:
      "Businesses find it hard to accept payments, track sales, manage operations and be incharge of their business.",
  },
  {
    title: "Our Big Idea",
    description:
      " A simple suite of tools to accept offline, online payments and manage sales.",
  },
  {
    title: "Our Solution",
    description:
      "Card payments, POS terminals, Management and Banking tools for over 100,000 businesses to grow and get paid.",
  },
];

const sectionWrapperStyles = ctl(`
bg-secondary-100
py-[77px]
md:pt-[102px]
`);

const timelineGridStyle = ctl(`
grid
grid-cols-1
md:grid-cols-3
md:gap-[10px]
gap-[53px]
`);

const timelineItemWrapperStyle = ctl(`
flex
flex-col
`);
const arrowLineWrapperStyle = ctl(`
flex 
flex-row 
items-center
`);
const timelineLineStyles = ctl(`
w-full 
ml-1 
border-b-[1px]
 border-black 
 border-solid
`);
const titleStyle = ctl(`
mt-7
md:mt-12
mb-1
md:mb-4
`);

export { AboutTimeline };
