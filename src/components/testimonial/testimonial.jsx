import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { TestimonialCard } from "components/card";
import { SectionHeader, Container } from "components";
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
    <div className="pb-10 bg-primary">
      <Container>
        <SectionHeader className="!text-left">
          <Ntext variant="h2" color="primary-100" value={headingText} className={headingTextStyle} />
        </SectionHeader>
        <Swiper
          pagination={pagination}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 6500,
            disableOnInteraction: false,
          }}
        >
          {testimonialList}
        </Swiper>
      </Container>
    </div>
  );
};

const headingTextStyle = ctl(`
  md:max-w-[593px] 
  mb-[62px]
`);

Testimonial.propTypes = {
  testimonials: PropTypes.object,
  headingText: PropTypes.string,
};

export { Testimonial };
