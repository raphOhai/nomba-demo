import React, { useRef, useEffect, useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
// import Swiper from "react-id-swiper";
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Box } from "./box";
import NextIcon from "jpegs/terminal/max/svgs/next.svg";
import PreviousIcon from "jpegs/terminal/max/svgs/prev.svg";
import { Ntext } from "components";
import NextIconDark from "svgs/chevron-right.svg";
import PreviousIconDark from "svgs/chevron-left.svg";

// SwiperCore.use([Navigation, Pagination]);
const BoxSlider = ({ slides }) => {
  const ref = useRef(null);
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      console.log(ref);
      ref.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };
  // Add eventlisteners for swiper after initializing
  useEffect(() => {
    if (swiper !== null) {
      console.log(swiper);
      swiper.on("slideChange", () => updateCurrentIndex(swiper.realIndex));
    }

    return () => {
      if (swiper !== null) {
        swiper.off("slideChange", () => updateCurrentIndex(swiper.realIndex));
      }
    };
  }, [swiper]);
  const breakpoints = {
    280: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 1.15,
    },
    390: {
      slidesPerView: 1.2,
    },
    450: {
      slidesPerView: 1.4,
    },
    640: {
      slidesPerView: 1.7,
    },
    850: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 2.5,
    },
    1400: {
      slidesPerView: 3,
    },
  };

  const params = {
    Swiper,
    slidesPerView: 1,
    spaceBetween: 24,
    modules: [Navigation, Pagination],
    loop: true,
    pagination: {
      el: ".pagination-class",
      type: "progressbar",
    },
    getSwiper: updateSwiper,
    breakpoints: breakpoints,
  };

  const sliderItems = slides.map(item => (
    <div key={item.id}>
      <div className={boxWrapper}>
        <Ntext variant="text4lite" color="n-grey4">
          {item.title}
        </Ntext>

        <div className="">{item.image}</div>
      </div>
    </div>
  ));

  const SliderNavigation = () => (
    <div className={controlWrapStyle}>
      <div className={controlButtonWrapStyle}>
        <button
          className={`${controlButtonStyle} previous-element-box box-navigation`}
          aria-label="Previous Slide"
          onClick={goPrev}
        >
          <PreviousIcon className="mx-auto icon-default" />
          <PreviousIconDark className="mx-auto icon-dark hidden" />
        </button>

        <button
          className={`${controlButtonStyle} next-element-box box-navigation`}
          aria-label="Next Slide"
          onClick={goNext}
        >
          <NextIcon className="mx-auto icon-default" />
          <NextIconDark className="mx-auto icon-dark hidden" />
        </button>
      </div>
      <div class="pagination-class !relative "></div>
    </div>
  );

  return (
    <>
      <div className={sectionWrapStyle}>
        <div className="mb-[42px]">
          <ReactIdSwiper className=" !overflow-x-clip !overflow-visible" {...params} ref={ref}>
            {sliderItems}
          </ReactIdSwiper>{" "}
          <SliderNavigation />
        </div>
      </div>
      <div className="md:!hidden flex flex-col items-stretch gap-10  pb-5">
        {slides.map(item => (
          <Box title={item.title} key={item.id} image={item.image} />
        ))}
      </div>
    </>
  );
};

const controlWrapStyle = ctl(`
  mx-auto 
  flex 
  items-center 
  md:gap-[34px]
  mt-10 
  gap-[11px]
`);

const sectionWrapStyle = ctl(`
!relative
overflow-hidden
slider-margin-left
hidden 
md:block
mx-5
`);

const controlButtonWrapStyle = ctl(`
  relative
  flex 
  lg:gap-[28px] 
  gap-[11px]
`);

const controlButtonStyle = ctl(`
  w-[53px]
  h-[53px]
  rounded-full
  grey-bordered-button
  hover:!border-0
  hover:bg-n-yellow
`);

const boxWrapper = ctl(`
flex
flex-col
justify-between 
shadow-lg 
hover:shadow-xl
cursor-pointer
rounded-[10px] 
bg-primary 
md:max-w-[380px] 
h-[400px] 
max-w-[388px] 
md:h-[408px] 
px-[30px]
pt-[30px]
overflow-hidden
box-wrapper
md:ml-1
`);

BoxSlider.propTypes = {
  slides: PropTypes.array,
};

export { BoxSlider };
