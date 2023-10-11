import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import gsap from "gsap";
import SplitType from "split-type";
import { Container, Ntext, Br, NLink } from "components";
import heroVideo from "jpegs/e-menu/hero/hero1.mp4";
import QrCode from "jpegs/e-menu/qr-code.svg";
import { Button } from "../button";
import constants from "config/constants.json";

const EmenuHero = () => {
  const { MENU_DEMO } = constants;

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
          <div className="flex md:flex-row flex-col justify-center items-center md:-ml-[2rem] mt-6 ">
            <div className="max-w-[336px] md:max-w-[23rem] md:mt-0 -mt-4">
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
              <div className={qrClass}>
                <QrCode />
                <div className="text-[14px] font-semibold my-auto leading-4 mr-[6px] text-white">
                  Scan to <br /> view Demo
                </div>
              </div>
            </div>
            <video src={heroVideo} controls={false} muted playsInline autoPlay loop width={400} height={470}></video>
            <div className=" mx-auto  max-w-[350px] md:max-w-[21rem] mt-3 md:mt-[-93px]">
              <Ntext
                variant="h1"
                className="md:leading-[63px] md:text-left text-center "
                color="primary-100"
                data-animation="rtl"
              >
                Scan. <Br on="all" /> Order. Pay
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
            <div className="mx-auto mb-4">
              <Button
                className="!font-medium !text-[16px] !min-w-[100px] !w-[200px] !text-center"
                text="Get Started Now"
                withArrow={true}
              />
            </div>
            <NLink className="text-white" href={MENU_DEMO}>
              Click to view Demo
            </NLink>
          </div>
        </div>
      </Container>
    </section>
  );
};
const heroButtonsContainer = ctl(`
mt-7
block md:hidden
w-full
text-center
`);

const vSlide = ctl(`
md:text-[65px] 
text-[37px]  
leading-[44.4px] 
font-bold  
md:leading-[63px]   
v-slide
`);

const qrClass = ctl(`
mt-5 
p-2 
hidden 
md:flex 
justify-between 
w-[182px] 
border-[0.34px] 
border-n-grey5 
bg-n-grey10 
rounded-[3.4px]
`);
export { EmenuHero };
