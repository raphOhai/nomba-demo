import { Container, Ntext, Button } from "components";
import React, { useEffect } from "react";
import heroVideo from "jpegs/e-menu/hero/hero.mp4";
import constants from "config/constants.json";
import ctl from "@netlify/classnames-template-literals";

const EmenuHero = () => {
  const { SIGNUP_URL } = constants;
  useEffect(() => {
    const ltr = document.querySelector("[data-animation='ltr']");
    const rtl = document.querySelector("[data-animation='rtl']");
    // console.log(rtl);
  });

  return (
    <section className="bg-black min-h-[100vh]">
      <Container className="mt-8 md:mt-10">
        <div className="relative w-full min-h-[600px]">
          <div className="absolute lg:left-[13.5rem] top-[-5rem] md:top-[-8rem] max-w-[336px] md:max-w-[23rem]">
            <Ntext variant="h1" color="primary-100" className=" md:leading-[63px]" data-animation="ltr">
              Power your Restaurant
            </Ntext>
          </div>
          <div className="flex flex-col justify-center items-center md:-ml-[2rem] mt-28 md:mt-52 ">
            <video src={heroVideo} controls={false} muted playsInline autoPlay loop width={430} height={500}></video>
          </div>
          <div className="absolute lg:right-[9rem] right-10 md:top-[68%] bottom-[-13%] max-w-[290px] md:max-w-[21rem]">
            {" "}
            <Ntext variant="h1" className=" md:leading-[63px]" color="primary-100" data-animation="rtl">
              Scan. <br /> view. pay
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <div className="mx-auto w-[195px]">
              <Button
                className="!font-medium !text-[16px]"
                text="Get Started"
                href={{ url: SIGNUP_URL }}
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
absolute
bottom-[-27%] md:bottom-[-10%] 
w-full
text-center
`);
export { EmenuHero };
