import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, ReadMore } from "components";

const SliderCard = ({ image, heading, text, caseStudy, link }) => {
  return (
    <div className=" shadow-md hover:shadow-xl border shadow-[rgba(0,0,0,0.1)] h-[443px] md:h-[500px] rounded-md">
      <div className={imageStyle}></div>

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
              className={`${cardTextStyle} mt-[18px]  min-h-[140px]`}
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
          <>
            <Ntext
              variant="text5"
              className={cardHeadingStyle}
              value={heading}
            />

            <Ntext variant="p14" value={text} className={`${cardTextStyle}`} />

            {link && <ReadMore {...link} color="primary" />}
          </>
        )}
      </div>
    </div>
  );
};

const imageStyle = ctl(`
  md:h-[290px]
  h-[234px]
  w-full
  bg-n-dark
`);
const sliderCardWrapStyle = ctl(`
  md:px-[32px]
  px-[25px]

  text-left
  md:min-h-[550px]
`);
const cardHeadingStyle = ctl(`
  mt-6 
  md:max-w-[380px] 
  max-w-[245px]
`);
const cardTextStyle = ctl(`
  my-6 
  md:max-w-[368px] 
  max-w-[256px]
`);
const caseStyle = ctl(`
  uppercase 

`);

export { SliderCard };
