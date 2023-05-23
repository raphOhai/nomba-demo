import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";

const InvoiceTestimonialCard = ({ name, role, testimonial, image }) => {
  return (
    <div className={cardWrapStyle}>
      <div className={textWrapStyle}>
        <div className={testimonialTextStyle}>
          <Ntext variant="p24" color="primary" value={testimonial} />
        </div>

        <div className="mt-8 ">
          <Ntext variant="p18" color="n-dark" value={name} className="mb-2 !font-[600]" />

          {role && <Ntext variant="p18" color="n-grey3" value={role} className="!font-[600]" />}
        </div>
      </div>

      <div className={imageWrapStyle}>
        <div className={yellowLineStyle}></div>

        {image}
      </div>
    </div>
  );
};

const cardWrapStyle = ctl(`
  flex
  flex-col-reverse
  lg:flex-row-reverse
  lg:items-start
  justify-between
  mb-10
`);
const textWrapStyle = ctl(`
  xl:max-w-[698px]
  sm:max-w-[570px]
  max-w-[90%]
  mt-[30px]
  md:mt-[130px]
  slider-padding-left
  mb-10
  lg:mb-0
`);
const imageWrapStyle = ctl(`
  lg:w-[40%] 
  w-full 
  lg:h-[541px] 
  slider-padding-right
  md:h-[474px] 
  sm:h-[400px]
  rounded-[10px]
  relative
`);
const yellowLineStyle = ctl(`
  
`);
const testimonialTextStyle = ctl(`
  md:mb-[60px]
  md:max-w-[608px] 
  min-h-[200px] 
  lg:min-h-max
`);

InvoiceTestimonialCard.propTypes = {
  name: PropTypes.string,
  testimonial: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.node,
};

export { InvoiceTestimonialCard };
