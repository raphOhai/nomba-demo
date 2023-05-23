import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Box } from "./box";
import NextIcon from "jpegs/terminal/max/svgs/next.svg";
import PreviousIcon from "jpegs/terminal/max/svgs/prev.svg";

import NextIconDark from "svgs/chevron-right.svg";
import PreviousIconDark from "svgs/chevron-left.svg";

SwiperCore.use([Navigation, Pagination]);

const BoxSlider = ({ slides }) => {
  const sliderItems = slides.map(item => (
    <SwiperSlide key={item.id}>
      <Box title={item.title} image={item.image} key={item.id} />
    </SwiperSlide>
  ));

  return (
    <>
      <div className={sectionWrapStyle}>
        <div className="mb-[42px]">
          <Swiper
            navigation={{
              nextEl: ".next-element-box",
              prevEl: ".previous-element-box",
            }}
            pagination={{
              type: "progressbar",
              el: ".pagination-class",
            }}
            className=" !overflow-x-clip !overflow-visible"
            loop={true}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={breakpoints}
          >
            {sliderItems}
            {/* <SwiperSlide>
              <Box title={slides[0].title} image={slides[0].image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box title={slides[1].title} image={slides[1].image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box title={slides[2].title} image={slides[2].image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box title={slides[3].title} image={slides[3].image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box title={slides[4].title} image={slides[4].image} />
            </SwiperSlide>
            <SwiperSlide>
              <Box title={slides[5].title} image={slides[5].image} />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <SliderNavigation />
      </div>
      <div className="md:!hidden flex flex-col items-stretch gap-10  pb-5">
        {slides.map(item => (
          <Box title={item.title} key={item.id} image={item.image} />
        ))}
      </div>
    </>
  );
};

const SliderNavigation = () => (
  <div className={controlWrapStyle}>
    <div className={controlButtonWrapStyle}>
      <button className={`${controlButtonStyle} previous-element-box box-navigation`} aria-label="Previous Slide">
        <PreviousIcon className="mx-auto icon-default" />
        <PreviousIconDark className="mx-auto icon-dark hidden" />
      </button>

      <button className={`${controlButtonStyle} next-element-box box-navigation`} aria-label="Next Slide">
        <NextIcon className="mx-auto icon-default" />
        <NextIconDark className="mx-auto icon-dark hidden" />
      </button>
    </div>

    <div className="pagination-class !relative"></div>
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
hidden 
md:block
mx-5
`);

const controlButtonWrapStyle = ctl(`
  relative
  flex 
  lg:gap-[28px] 
  gap-[11px]
`);

const controlButtonStyle = ctl(`
  w-[53px]
  h-[53px]
  rounded-full
  grey-bordered-button
  hover:!border-0
  hover:bg-n-yellow
`);

BoxSlider.propTypes = {
  slides: PropTypes.array,
};

export { BoxSlider };
