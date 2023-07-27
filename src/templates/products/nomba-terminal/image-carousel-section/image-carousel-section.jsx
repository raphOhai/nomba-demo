import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { SectionWrapper } from "../components";
import { image1, image2, image3, image4, image5 } from "./images";

export function ImageCarouselSection() {
  const images = [image2, image3, image4, image1, image5];

  return (
    <div className="bg-gradient-to-b  from-n-light to-[#F3F3F3]">
      <SectionWrapper className={`${imageSectionWrapper}`}>
        <div className={imagesContainer}>
          {images.map((image, index) => {
            return <img key={index} src={image} className={defaultImageStyle} alt={`img-${index}`} />;
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}

const imagesContainer = ctl(`
flex 
justify-between 
w-fit
gap-[20px]
pl-[2%]
md:pl-initial
md:gap-[50px]
overflow-x-scroll
pb-[25px]
snap-x
scroll-smooth	
will-change-transform	
`);
const defaultImageStyle = ctl(`
md:hover:animate-squareToCircle
snap-center 
hover:rounded-full
rounded-[5px]
w-[330px]
h-[370px]
md:w-[427px]
md:h-[542px]
mr-[20px]
`);

const imageSectionWrapper = ctl(`
pl-[0%]
text-center 
md:pb-[44px] 
`);
