import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, ReadMore } from "components";

const SliderCard = ({ image, heading, text, caseStudy, link }) => {
  return (
    <div>
      <div
        className={imageStyle}
        style={{
          clipPath: "polygon(0 0, 100% 0%, 100% 79%, 68% 100%, 0 100%)",
        }}
      >
        {image}
      </div>

      <div className={sliderCardWrapStyle}>
        {/*To check what context it's being used in. caseStudy shows in places like the about us page */}
        {caseStudy ? (
          <>
            <Ntext variant="h5" className={cardHeadingStyle} value={heading} />

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
            <Ntext variant="h4" className={cardHeadingStyle} value={heading} />

            <Ntext variant="p18" value={text} className={`${cardTextStyle}`} />

            {link && <ReadMore {...link} color="primary" />}
          </>
        )}
      </div>
    </div>
  );
};

const imageStyle = ctl(`
  md:max-w-[312px]
  md:h-[310px]
  max-w-[201px]
  h-[200px]
  ml-[26px]
  md:ml-[41px]
`);
const sliderCardWrapStyle = ctl(`
  -mt-[170px]
  md:-mt-[270px]
  pt-[170px]
  md:pt-[280px]
  bg-secondary-100
  pb-[39px]
  md:pl-[41px]
  pl-[26px]
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
