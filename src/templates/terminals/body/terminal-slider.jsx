import React, { useRef, useEffect, useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import ReactIdSwiper from "react-id-swiper/lib/ReactIdSwiper.custom";
import { Swiper, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TerminalCard } from "./terminal-card";
import NextIcon from "jpegs/terminal/max/svgs/next.svg";
import PreviousIcon from "jpegs/terminal/max/svgs/prev.svg";
import { Ntext, GetTerminal, ReadMore } from "components";
import NextIconDark from "svgs/chevron-right.svg";
import PreviousIconDark from "svgs/chevron-left.svg";
import { terminalData } from "../terminals";

const TerminalSlider = ({ addToCart }) => {
  const ref = useRef(null);
  const [swiper, updateSwiper] = useState(null);
  const [currentIndex, updateCurrentIndex] = useState(0);

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
  }, []);

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
      <div key={`pos_card_${index}`} className={` relative py-8  md:min-w-[407px] ${posdetails.bgColor}`}>
        <div className="h-full flex flex-col justify-between">
          <div className="text-center ">
            {posdetails.image}
            <div className="mx-5 mt-[40px] mb-3 text-left">
              <header className={posCardHeaderStyle}>
                <Ntext variant="text5" color={posdetails.textColor}>
                  {posdetails.device.name}
                </Ntext>
                <div className={`${posTitleIconStyle} ${iconsGridColumn}`}>{posdetails.icons}</div>
              </header>
              <Ntext variant="p14" color={posdetails.textColor} className="mt-3">
                {posdetails.features}
              </Ntext>
            </div>
          </div>

          <div className="-mt-[5px] mx-5">
            <div>
              <div className="mb-5">
                <ReadMore
                  extraTrackText={posdetails.device.name}
                  variant="p12bold"
                  defaultStyle={false}
                  className={"!text-xs"}
                  text="Learn more"
                  color={posdetails.textColor}
                  href={posdetails.link}
                />
              </div>
              <div
                className={`max-w-[110px] rounded-full ${
                  posdetails.colorScheme !== "dark" ? "bg-n-grey8" : "bg-n-light"
                } text-center px-2 py-1 mb-3`}
              >
                <p
                  className={`${
                    posdetails.colorScheme !== "dark" ? "text-n-light" : "text-primary"
                  } text-[10px] tracking-[-0.2px]`}
                >
                  {posdetails.device.priceType}
                </p>
              </div>
              <div className="flex flex-row  justify-between items-center">
                <Ntext variant="pricingBig" color={posdetails.textColor} className=" ">
                  {posdetails.device.price}
                </Ntext>
                <div className="btn" onClick={() => addToCart(posdetails.index)}>
                  <GetTerminal
                    text={posdetails.device.ctaText}
                    type="animate-button-reverse"
                    className={posdetails.textColor === "primary" ? "!text-black keep-dark" : ""}
                  />
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

export { TerminalSlider };
