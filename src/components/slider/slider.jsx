import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { SliderCard } from "components";
import NextIcon from "svgs/chevron-right.svg";
import PreviousIcon from "svgs/chevron-left.svg";

SwiperCore.use([Navigation]);

const Slider = ({ slides }) => {
  const sliderItems = slides.map(item => (
    <SwiperSlide key={item.heading}>
      <SliderCard
        heading={item.heading}
        image={item.image}
        text={item.text}
        link={item?.link}
        caseStudy={item?.caseStudy}
      />
    </SwiperSlide>
  ));

  return (
    <div className={sectionWrapStyle}>
      <SliderNavigation />

      <div className="mt-[42px]">
        <Swiper
          navigation={{
            nextEl: ".next-element",
            prevEl: ".previous-element",
          }}
          className=" "
          loop={true}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={breakpoints}
        >
          {sliderItems}
        </Swiper>
      </div>
    </div>
  );
};

const SliderNavigation = () => (
  <div className={controlWrapStyle}>
    <div className={controlButtonWrapStyle}>
      <button
        className={`${controlButtonStyle} previous-element`}
        aria-label="Previous Slide"
      >
        <PreviousIcon />
      </button>

      <button
        className={`${controlButtonStyle} next-element`}
        aria-label="Next Slide"
      >
        <NextIcon />
      </button>
    </div>

    <div className={blackLineStyle}></div>
  </div>
);

const breakpoints = {
  280: {
    slidesPerView: 1,
  },
  320: {
    slidesPerView: 1.15,
  },
  390: {
    slidesPerView: 1.2,
  },
  450: {
    slidesPerView: 1.4,
  },
  640: {
    slidesPerView: 1.7,
  },
  850: {
    slidesPerView: 2,
  },
  1100: {
    slidesPerView: 2.5,
  },
  1400: {
    slidesPerView: 3,
  },
};

const controlWrapStyle = ctl(`
  mx-auto 
  flex 
  items-center 
  md:gap-[34px] 
  gap-[11px]
`);
const sectionWrapStyle = ctl(`
  slider-margin-left
  ml-[25px]
`);
const blackLineStyle = ctl(`
  bg-primary 
  xl:w-[75%] 
  w-[70%] 
  h-[.5px]
`);
const controlButtonWrapStyle = ctl(`
  flex 
  lg:gap-[28px] 
  gap-[11px]
`);
const controlButtonStyle = ctl(`
  rounded-full
  lg:p-[15px]
  p-[6px]
  border
  border-black
  hover:bg-secondary-100
`);

Slider.propTypes = {
  slides: PropTypes.array,
};

export { Slider };