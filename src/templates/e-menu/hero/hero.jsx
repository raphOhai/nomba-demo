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
    <section className="bg-black min-h-[100vh] md:mt-[-70px] flex flex-col justify-center items-center">
      <Container className="">
        <div className=" w-full">
          <div className="flex md:flex-row flex-col justify-center items-center md:-ml-[2rem] mt-10 ">
            <div className="   max-w-[336px] md:max-w-[23rem]">
              <Ntext
                variant="h1"
                color="primary-100"
                className="text-center md:text-left md:leading-[63px]"
                data-animation="ltr"
              >
                Power your Restaurant
              </Ntext>
            </div>
            <video src={heroVideo} controls={false} muted playsInline autoPlay loop width={430} height={500}></video>
            <div className=" mx-auto  max-w-[290px] md:max-w-[21rem]">
              {" "}
              <Ntext variant="h1" className="md:leading-[63px]" color="primary-100" data-animation="rtl">
                Scan. <br /> view. pay
              </Ntext>
              <div className="absolute md:block pt-3 w-[195px] hidden">
                <Button
                  className="!font-medium !text-[16px]"
                  text="Get Started"
                  href={{ url: SIGNUP_URL }}
                  withArrow={true}
                />
              </div>
            </div>
          </div>

          <div className={heroButtonsContainer}>
            <div className="mx-auto w-[195px] ">
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
mt-10
block md:hidden
w-full
text-center
`);
export { EmenuHero };
