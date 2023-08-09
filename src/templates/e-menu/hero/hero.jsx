import { Container, Ntext } from "components";
import React, { useEffect } from "react";
import heroVideo from "jpegs/e-menu/hero/hero1.mp4";
import ctl from "@netlify/classnames-template-literals";
import gsap from "gsap";
import SplitType from "split-type";
import { Button } from "../button";

const EmenuHero = () => {
  useEffect(() => {
    if (document.readyState === "complete") {
      document.querySelector(".rootLoader").style.display = "none";
    } else {
      window.addEventListener("load", () => {
        document.querySelector(".rootLoader").style.display = "none";
      });
    }

    var vsOpts = {
      slides: document.querySelectorAll(".v-slide"),
      list: document.querySelector(".v-slides"),
      duration: 0.3,
      lineHeight: window.innerWidth > 760 ? 65 : 44,
    };

    var vSlide = gsap.timeline({
      paused: true,
      repeat: -1,
    });

    vsOpts.slides.forEach(function (slide, i) {
      // Create a label
      let label = "slide" + i;
      vSlide.add(label);

      let letters = new SplitType(slide, { type: "chars" }).chars;

      // Move the whole word
      if (i > 0) {
        vSlide.to(
          vsOpts.list,
          {
            duration: vsOpts.duration,
            y: i * -1 * vsOpts.lineHeight,
          },
          label
        );

        // Move each letter
        vSlide.from(
          letters,
          {
            duration: vsOpts.duration,
            y: 15,
            stagger: vsOpts.duration / 10,
          },
          label
        );
      }

      if (i < vsOpts.slides.length - 1) {
        vSlide.to(
          letters,
          {
            duration: vsOpts.duration,
            y: -15,
            stagger: vsOpts.duration / 10,
          },
          "+=1"
        );
      }
    });
    vSlide.play();
  });

  return (
    <section className="bg-black min-h-[100vh] md:mt-[-70px] flex flex-col justify-center items-center">
      <div className="rootLoader" id="rootLoader">
        <div class="loader-wrapper">
          <div class="loader"></div>
        </div>
      </div>
      <Container className="">
        <div className=" w-full">
          <div className="flex md:flex-row flex-col justify-center items-center md:-ml-[2rem] mt-10 ">
            <div className="max-w-[336px] md:max-w-[23rem]">
              <Ntext
                variant="h1"
                color="primary-100"
                className="text-center md:text-left md:leading-[63px]"
                data-animation="ltr"
              >
                <div>Power your</div>
              </Ntext>
              <div className="md:h-[60px] h-[44px] overflow-hidden ">
                <ul class="v-slides p-0 m-0">
                  <li className={`${vSlide} text-[#FFF5CC]`}>Restaurant</li>
                  <li className={`${vSlide} text-[#D9F2F2]`}>Bars</li>
                  <li className={`${vSlide} text-[#CFF1CC]`}>Cafe</li>
                  <li className={`${vSlide} text-[#FFF5CC]`}>Restaurant</li>
                </ul>
              </div>
            </div>
            <video src={heroVideo} controls={false} muted playsInline autoPlay loop width={430} height={500}></video>
            <div className=" mx-auto  max-w-[290px] md:max-w-[21rem]">
              <Ntext variant="h1" className="md:leading-[63px]" color="primary-100" data-animation="rtl">
                Scan. <br /> Order. Pay
              </Ntext>
              <div className="absolute md:block pt-3  hidden">
                <Button
                  className="!font-medium !text-[16px] !min-w-[100px] !w-[200px] !text-center"
                  text="Get Started Now"
                  withArrow={true}
                />
              </div>
            </div>
          </div>

          <div className={heroButtonsContainer}>
            <div className="mx-auto ">
              <Button
                className="!font-medium !text-[16px] !min-w-[100px] !w-[200px] !text-center"
                text="Get Started Now"
                withArrow={true}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
const heroButtonsContainer = ctl(`
mt-10
block md:hidden
w-full
text-center
`);

const vSlide = ctl(`
md:text-[65px] text-[37px]  leading-[44.4px] font-bold  md:leading-[63px]   v-slide
`);

export { EmenuHero };
