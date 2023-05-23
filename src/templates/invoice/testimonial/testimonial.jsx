import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { InvoiceTestimonialCard } from "./testimonial-card";
import NextIcon from "svgs/chevron-right.svg";
import PreviousIcon from "svgs/chevron-left.svg";
import { Container } from "components";

const InvoiceTestimonial = ({ testimonials }) => {
  const testimonialList = testimonials.map(item => (
    <SwiperSlide key={item.name}>
      <InvoiceTestimonialCard {...item} />
    </SwiperSlide>
  ));

  // <span class="' + className + '">' + "" + "</span>";

  return (
    <section className="md:py-[150px] py-[100px] bg-primary-100">
      <Container>
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

InvoiceTestimonial.propTypes = {
  testimonials: PropTypes.array,
};

export { InvoiceTestimonial };
