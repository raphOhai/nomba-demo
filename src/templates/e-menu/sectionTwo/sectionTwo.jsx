import { Container, Ntext, Button } from "components";
import React, { useEffect } from "react";
import heroVideo from "jpegs/e-menu/hero/hero.mp4";
import constants from "config/constants.json";
import ctl from "@netlify/classnames-template-literals";

const EmenuSection2 = () => {
  const { SIGNUP_URL } = constants;
  return (
    <section bg>
      <Container className="mt-8 md:mt-[100px]">
        <div class="relative w-full">
          <div className="absolute lg:left-[13.5rem] top-[3rem] max-w-[336px] md:max-w-[23rem]">
            <Ntext variant="h1" color="primary-100">
              Power your Restaurant
            </Ntext>
          </div>
          <div className="flex justify-center md:-ml-[12rem] -ml-[10rem] md:mt-[-5rem] -mt-[4rem]">
            <video src={heroVideo} controls={false} muted playsInline autoPlay loop width={793} height={990}></video>
          </div>
          <div class="absolute lg:right-[12rem] right-0 md:top-[57%] top-[70%] max-w-[290px] md:max-w-[21rem]">
            {" "}
            <Ntext variant="h1" className="" color="primary-100">
              Scan. <br /> view. pay
            </Ntext>
          </div>
          <div className={heroButtonsContainer} side>
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
md:top-[77%] top-[83%]
w-full
text-center
`);
export { EmenuSection2 };
