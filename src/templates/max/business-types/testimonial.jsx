import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { MaxTestimonialCard } from "./testimonial-card";
import { SectionHeader } from "components";
import { Ntext } from "components/ntext";
import NextIcon from "svgs/chevron-right.svg";
import PreviousIcon from "svgs/chevron-left.svg";

const MaxTestimonial = ({ testimonials, headingText }) => {
  const testimonialList = testimonials.map(item => (
    <SwiperSlide key={item.name}>
      <MaxTestimonialCard {...item} />
    </SwiperSlide>
  ));

  // <span class="' + className + '">' + "" + "</span>";

  return (
    <div className="py-10 max-testimonial">
      <SliderNavigation title={headingText} />
      <Swiper
        pagination={{
          clickable: true,
          type: "bullets",
          el: ".max-pagination-class",
        }}
        navigation={{
          nextEl: ".next-element",
          prevEl: ".previous-element",
        }}
        modules={[Pagination, Navigation]}
      >
        {testimonialList}
      </Swiper>
      <div className="max-pagination-class !relative"></div>
    </div>
  );
};

const SliderNavigation = ({ title }) => (
  <div className="flex flex-row justify-between items-baseline" id="testimonials">
    <SectionHeader className="!text-left">
      <Ntext variant="h2" color="primary-100" value={title} className={headingTextStyle} data-animation="h" />
    </SectionHeader>
    <div className={controlButtonWrapStyle}>
      <button className={`${controlButtonStyle} previous-element`} aria-label="Previous Slide">
        <PreviousIcon className="mx-auto" />
      </button>
      <button className={`${controlButtonStyle} next-element`} aria-label="Next Slide">
        <NextIcon className="mx-auto" />
      </button>
    </div>
  </div>
);

const controlButtonWrapStyle = ctl(`
  relative
  flex 
  lg:gap-[28px] 
  gap-[11px]
`);
const controlButtonStyle = ctl(`
  w-[40px]
  h-[40px]
  rounded-full
  bg-n-yellow
  hover:bg-[#c1940b]
`);
const headingTextStyle = ctl(`

md:mb-[62px]
mb-[1px]
`);

MaxTestimonial.propTypes = {
  testimonials: PropTypes.array,
  headingText: PropTypes.string,
};

export { MaxTestimonial };
