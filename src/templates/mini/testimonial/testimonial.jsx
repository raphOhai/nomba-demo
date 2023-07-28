import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TestimonialCard } from "./testimonial-card";
import NextIcon from "svgs/chevron-right.svg";
import PreviousIcon from "svgs/chevron-left.svg";
import { Container, SectionHeader, Ntext } from "components";

const MiniTestimonial = ({ testimonials, headingText }) => {
  const testimonialList = testimonials.map(item => (
    <SwiperSlide key={item.name}>
      <TestimonialCard {...item} />
    </SwiperSlide>
  ));

  // <span class="' + className + '">' + "" + "</span>";

  return (
    <section className="">
      <Container>
        <SectionHeader className="text-center">
          <Ntext variant="h2" color="n-light" value={headingText} className={headingTextStyle} />
        </SectionHeader>
        <SliderNavigation />
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
      </Container>
    </section>
  );
};

const SliderNavigation = () => (
  <div className="flex flex-row justify-between items-baseline" id="testimonials">
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

const headingTextStyle = ctl(`
  md:max-w-[593px] 
  mb-[10px]
  mx-auto
`);

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

MiniTestimonial.propTypes = {
  testimonials: PropTypes.array,
  headingText: PropTypes.string,
};

export { MiniTestimonial };