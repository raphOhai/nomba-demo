import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, ReadMore } from "components";

const SliderCard = ({ image, heading, text, caseStudy, link }) => {
  return (
    <div className=" h-full rounded-lg bg-primary-100 ">
      <div className={imageStyle}>{image}</div>

      <div className={sliderCardWrapStyle}>
        {/*To check what context it's being used in. caseStudy shows in places like the about us page */}

        <div className="flex flex-col justify-between gap-4 pt-8 py-8  md:py-8">
          <div className="max-w-[308px]">
            <Ntext variant="text3" className="!font-[700]" value={heading} />
          </div>

          <Ntext variant="text1" value={text} color="m-grey2" />

          {link && <ReadMore {...link} color="primary" />}
        </div>
      </div>
    </div>
  );
};

const imageStyle = ctl(`

  rounded-t-lg

  w-full
  bg-n-dark
`);
const sliderCardWrapStyle = ctl(`

  rounded-b-lg
  bg-primary-100
  text-left
`);

export { SliderCard };
