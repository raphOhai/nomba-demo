import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";

const TestimonialCard = ({ name, role, testimonial, image }) => {
  return (
    <div className={cardWrapStyle}>
      <div className={textWrapStyle}>
        <div className={testimonialTextStyle}>
          <Ntext variant="text4" color="primary-100" value={testimonial} />
        </div>

        <Ntext
          variant="text3"
          color="n-grey1"
          value={name}
          className="mt-14 "
        />

        {role && <Ntext variant="text3" color="n-grey4" value={role} />}
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
  flex-col
  lg:flex-row
  lg:items-center
  justify-between
  bg-primary
  mb-10
`);
const textWrapStyle = ctl(`
  xl:max-w-[698px]
  sm:max-w-[570px]
  max-w-[90%]

  mt-10
  mb-10
  lg:mb-0
`);
const imageWrapStyle = ctl(`
  lg:w-[40%] 
  w-full 
  lg:h-[541px] 
  md:h-[800px] 
  sm:h-[620px] 
  xs:h-[484px]
  h-[383px]
  rounded-xl
  relative
`);
const yellowLineStyle = ctl(`
  bg-secondary 
  w-[73px] md:w-[107px] 
  lg:h-10  h-8 
  -skew-y-[24deg] 
  absolute 
  z-10 
  lg:-left-16 
  lg:top-[50%] 
  left-[40%] 
  -top-3 
`);
const testimonialTextStyle = ctl(`
  lg:mb-[106px] 
  min-h-[200px] 
  sm:min-h-[350px] 
  lg:min-h-max
`);

TestimonialCard.propTypes = {
  name: PropTypes.string,
  testimonial: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.node,
};

export { TestimonialCard };
