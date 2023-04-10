import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Container } from "components";

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
      autoplay={{
        delay: 6500,
        disableOnInteraction: false,
      }}
    >
      {imageList}
    </Swiper>
  );
};

HeroSlider.propTypes = {
  images: PropTypes.array,
  className: PropTypes.string,
};

export { HeroSlider };
