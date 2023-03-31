import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { TestimonialCard } from "components/card";
import { Ntext } from "components/ntext";

const Testimonial = ({ testimonials, headingText }) => {
  const testimonialList = testimonials.map(item => (
    <SwiperSlide key={item.name}>
      <TestimonialCard {...item} />
    </SwiperSlide>
  ));

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className}">""</span>`;
    },
  };

  // <span class="' + className + '">' + "" + "</span>";

  return (
    <div className="my-20">
      <Ntext variant="h3" value={headingText} className={headingTextStyle} />
      <Swiper pagination={pagination} modules={[Pagination]}>
        {testimonialList}
      </Swiper>
    </div>
  );
};

const headingTextStyle = ctl(`
  md:max-w-[693px] 
  max-w-[238px] 
  mx-auto 
  text-center 
  mb-[62px]
`);

Testimonial.propTypes = {
  testimonials: PropTypes.object,
  headingText: PropTypes.string,
};

export { Testimonial };
