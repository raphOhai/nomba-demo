import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components/ntext";
import { StaticImage } from "gatsby-plugin-image";

const TestimonialCard = ({ name, role, testimonial, image, side }) => {
  return (
    <div className={cardWrapStyle}>
      <div className={textWrapStyle}>
        <div className="bg-n-grey6 p-10 rounded-[10px] mb-4">
          <div className={testimonialTextStyle}>
            <Ntext variant="p24regular" color="n-light" value={testimonial} />
          </div>

          <div className="mt-4">
            <Ntext variant="p18" color="n-light" value={name} className="mb-1 !font-[600]" />

            {role && <Ntext variant="p18" color="n-light" value={role} className="!font-[600]" />}
          </div>
        </div>
        <div class="hidden md:block">{side}</div>
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
  gap-5
  lg:items-start
  justify-center
  mb-10
`);
const textWrapStyle = ctl(`

  max-w-[610px]

  mb-10
  lg:mb-0
`);
const imageWrapStyle = ctl(`
max-w-[576px]


  lg:h-[541px] 
  
  md:h-[474px] 
  sm:h-[400px]
  rounded-[10px]
  relative
`);
const yellowLineStyle = ctl(`
  
`);
const testimonialTextStyle = ctl(`
  mb-[30px]
  md:max-w-[608px] 
  lg:min-h-max
`);

TestimonialCard.propTypes = {
  name: PropTypes.string,
  testimonial: PropTypes.string,
  role: PropTypes.string,
  image: PropTypes.node,
};

export { TestimonialCard };
