import React from "react";
import { Container, Ntext } from "components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

const BusinessStageSlide = () => {
  return (
    <section className="py-[60px] lg:py-[150px]">
      <Container>
        <div className={gridWrapperStyle}>
          <div className="col-span-1">
            <Ntext variant="h3">
              We've been with you, at every stage of your business
            </Ntext>
            <Ntext variant="p18" className="mt-4">
              Have a great look at what we've achieved together
            </Ntext>
          </div>
          <div className="col-span-2">
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  );
};

const Slider = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={3}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[Autoplay, EffectCoverflow]}
      className="mySwiper"
    >
      {slides.map((slide, index) => {
        return (
          <SwiperSlide key={`business_stage_swiper_${index}`}>
            {slide}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

const slideImageSizeProps = {
  width: 336,
  height: 415,
};

const slides = [
  <StaticImage
    {...slideImageSizeProps}
    src="../../../assets/images/jpegs/about/Kudi Team.jpg"
    alt="Kudi Team"
  />,
  <StaticImage
    {...slideImageSizeProps}
    src="../../../assets/images/jpegs/about/Kudi Terminal.jpg"
    alt="Kudi Terminal"
  />,
  <StaticImage
    {...slideImageSizeProps}
    src="../../../assets/images/jpegs/about/Kudi Old product.jpg"
    alt="Kudi Old product"
  />,
];

const gridWrapperStyle = ctl(`
grid 
grid-cols-1 
lg:grid-cols-3 
gap-[40px]
`);
export { BusinessStageSlide };
