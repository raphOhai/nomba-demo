import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { TestimonialCard } from "components/card";
import { Container } from "components";
import { Ntext } from "components/ntext";

const Testimonial = ({ testimonial, headingText }) => {
  return (
    <div className="py-20 bg-primary">
      <Container>
        <Ntext
          variant="text1"
          value={headingText}
          color="n-grey1"
          className={headingTextStyle}
        />
        <TestimonialCard {...testimonial} />
      </Container>
    </div>
  );
};

const headingTextStyle = ctl(`
  md:max-w-[693px] 
  max-w-[238px] 
  text-left 
  mb-[62px]
`);

Testimonial.propTypes = {
  testimonial: PropTypes.object,
  headingText: PropTypes.string,
};

export { Testimonial };
