import React, { useRef, useEffect, useState, useContext } from "react";
import ctl from "@netlify/classnames-template-literals";
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TerminalCard } from "./terminal-card";
import NextIcon from "jpegs/terminal/max/svgs/next.svg";
import PreviousIcon from "jpegs/terminal/max/svgs/prev.svg";
import { Ntext, GetTerminal } from "components";
import NextIconDark from "svgs/chevron-right.svg";
import PreviousIconDark from "svgs/chevron-left.svg";
// import { AppContext } from "states/context";
import { terminalData } from "../terminals";

const TerminalSlider = ({ addToCart }) => {
  const ref = useRef(null);
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);
  // const { addToCart } = useContext(AppContext);

  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
      updateCurrentIndex(ref.current.swiper.activeIndex);
    }
  };

  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
      updateCurrentIndex(ref.current.swiper.activeIndex);
    }
  };

  useEffect(() => {
    updateCurrentIndex(ref.current.swiper.activeIndex);
  }, [ref.current]);
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
    900: {
      slidesPerView: 2.3,
    },
    1100: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 3.1,
    },
    1400: {
      slidesPerView: 3.3,
    },
  };

  const params = {
    Swiper,
    slidesPerView: 1,
    spaceBetween: 0,
    modules: [Navigation, Pagination],
    loop: false,
    pagination: {
      el: ".pagination-class",
      type: "progressbar",
    },
    getSwiper: updateSwiper,
    breakpoints: breakpoints,
  };

  const sliderItems = terminalData.map((posdetails, index) => {
    const iconsGridColumn = posdetails.device.type !== "lite" ? "grid-cols-6" : "grid-cols-3";
    return (
      // <TerminalCard {...posdetails} key={`pos_card_${index}`} />
      <div key={`pos_card_${index}`} className={` relative py-8  md:min-w-[407px] ${posdetails.bgColor}`}>
        <div className="h-full flex flex-col justify-between">
          <div className="text-center ">
            {posdetails.image}
            <div className="mx-5 my-[40px] text-left">
              <header className={posCardHeaderStyle}>
                <Ntext variant="text5" color={posdetails.textColor}>
                  {posdetails.device.name}
                </Ntext>
                <div className={`${posTitleIconStyle} ${iconsGridColumn}`}>{posdetails.icons}</div>
              </header>
              <Ntext variant="p14" color={posdetails.textColor} className="mt-5">
                {posdetails.features}
              </Ntext>
            </div>
          </div>

          <div className="-mt-[5px] mx-5">
            <div>
              <Ntext variant="p12" color={posdetails.textColor} className=" m-0 p-0">
                {posdetails.device.priceType}
              </Ntext>
              <div className="flex flex-row  justify-between items-baseline">
                <Ntext variant="text5" color={posdetails.textColor} className="flex">
                  {posdetails.device.price}
                </Ntext>
                <div className="btn" onClick={() => addToCart(posdetails.index)}>
                  <GetTerminal text="By now" type="animate-button-reverse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

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
      <div className="pagination-class !relative swiper-pagination-progressbar swiper-pagination-horizontal">
        <span
          className="swiper-pagination-progressbar-fill"
          style={{
            transform: `translate3d(0px, 0px, 0px) scaleX(${currentIndex == 0 ? 0.5 : currentIndex}) scaleY(1)`,
            transitionDuration: "300ms",
          }}
        ></span>
      </div>
    </div>
  );

  return (
    <>
      <div className={sectionWrapStyle}>
        <div className="my-[42px]">
          <SliderNavigation />
          <ReactIdSwiper className=" !overflow-visible" {...params} ref={ref}>
            {sliderItems}
          </ReactIdSwiper>
        </div>
      </div>
      <div className="md:!hidden flex flex-col items-center  gap-10  pb-5">
        {terminalData.map((posdetails, index) => (
          <TerminalCard {...posdetails} key={`pos_card_${index}`} />
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
mb-[40px]
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

const posCardHeaderStyle = ctl(`
flex
justify-between
items-center
bo
`);

const posTitleIconStyle = ctl(`
grid
gap
place-items-center 
`);

TerminalSlider.propTypes = {
  // slides: PropTypes.array,
};

export { TerminalSlider };
