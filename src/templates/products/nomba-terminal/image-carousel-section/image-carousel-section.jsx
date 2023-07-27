import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { SectionWrapper } from "../components";
import { image1, image2, image3, image4, image5 } from "./images";

export function ImageCarouselSection() {
  const images = [image2, image3, image4, image1, image5];

  return (
    <div className="bg-gradient-to-b  from-n-light to-[#F3F3F3]">
      <SectionWrapper className={`${imageSectionWrapper}`}>
        {/* <Slider {...settings}> */}
        <div className={imagesContainer}>
          {images.map((image, index) => {
            return <img key={index} src={image} className={defaultImageStyle} alt={`img-${index}`} />;
          })}
        </div>
        {/* </Slider> */}
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

// blur:rounded-[5px]
// const secondImage = ctl(`
// rounded-[250px]
// `);

const imageSectionWrapper = ctl(`
pl-[0%]
text-center 
md:pb-[44px] 
`);

// import useIsMobile from "hooks/useIsMobile";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// const mobile = useIsMobile();
// var settings = {
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   dots: false,
//   autoplay: true,
//   adaptiveHeight: true,
//   draggable: true,
//   easing: "linear",
//   focusOnSelect: true,
//   pauseOnHover: false,
//   row: 1,
//   swipeToSlide: true,
//   variableWidth: true,
//   centerMode: !mobile && true
// };
