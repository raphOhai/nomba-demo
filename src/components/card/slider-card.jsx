import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, ReadMore } from "components";

const SliderCard = ({ image, heading, text, caseStudy, link }) => {
  return (
    <div className="border shadow-lg hover:shadow-xl h-full rounded-lg my-4">
      <div className={imageStyle}>{image}</div>

      <div className={sliderCardWrapStyle}>
        {/*To check what context it's being used in. caseStudy shows in places like the about us page */}
        {caseStudy ? (
          <>
            <Ntext
              variant="text5"
              className={cardHeadingStyle}
              value={heading}
            />

            <Ntext
              variant="p14"
              value={text}
              className={`${cardTextStyle} md:mt-[18px]  min-h-[140px]`}
            />

            <div>
              <Ntext variant="h7" value="Case:" className={caseStyle} />

              <Ntext
                variant="h6"
                value={caseStudy.businessName}
                className="my-[9px]"
              />

              <Ntext
                variant="p14"
                value={caseStudy.aboutBusiness}
                className="max-w-[346px] min-h-[80px]"
              />
            </div>
          </>
        ) : (
          <div className="flex flex-col justify-between gap-4 my-3 md:mt-6">
            <Ntext variant="text5" className="" value={heading} />

            <Ntext variant="text3" value={text} className="" />

            {link && <ReadMore {...link} color="primary" />}
          </div>
        )}
      </div>
    </div>
  );
};

const imageStyle = ctl(`
  md:h-[290px]
  rounded-t-lg
  h-[234px]
  w-full
  bg-n-dark
`);
const sliderCardWrapStyle = ctl(`
  md:px-[32px]
  px-[25px]
  text-left
`);
const cardHeadingStyle = ctl(`
  mt-4
  md:mt-6 
  md:max-w-[380px] 
  max-w-[245px]
`);
const cardTextStyle = ctl(`
  md:my-6
  my-4
  md:max-w-[368px] 
  max-w-[256px]
`);
const caseStyle = ctl(`
  uppercase 

`);

export { SliderCard };
