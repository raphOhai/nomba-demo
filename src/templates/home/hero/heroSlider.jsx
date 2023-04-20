import React from "react";
import PropTypes from "prop-types";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

const HeroSlider = ({ images, className }) => {
  const imageList = images.map((image, i) => (
    <SwiperSlide key={i}>
      <div className="min-w-[250px] min-h-[200px] px-2-">{image}</div>
    </SwiperSlide>
  ));

  return (
    <Swiper
      spaceBetween={24}
      slidesPerView={1.2}
      modules={[Autoplay]}
      className={className}
      breakpoints={breakpoints}
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
    >
      {imageList}
    </Swiper>
  );
};
const breakpoints = {
  280: {
    slidesPerView: 1,
  },
  320: {
    slidesPerView: 1.3,
  },
  390: {
    slidesPerView: 1.4,
  },
  450: {
    slidesPerView: 1.6,
  },
  640: {
    slidesPerView: 2,
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
HeroSlider.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
};

export { HeroSlider };
