import { Br, Ntext, Container } from "components";
import React, { useState } from "react";
import { Button } from "../button";
import Check from "svgs/check-yellow-outline.svg";
import ctl from "@netlify/classnames-template-literals";

const MenuSection6 = ({}) => {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <section className="bg-c-0 my-40 md:my-48 ">
      <Container>
        <div className="">
          <div className="flex flex-col justify-center items-center py-[10px] rounded-[52px] !w-[86px] bg-[#FEA] font-bold">
            Demo
          </div>
          <Ntext variant="prohero" color="n-light">
            Personalize your <Br on="all" /> Menu web address
          </Ntext>
        </div>
        <div className="mt-20">
          <div className="flex flex-wrap">
            <Ntext variant="text8" color="primary-600">
              menu.nomba.com/
            </Ntext>
            <div className={text8}>
              <input
                maxLength={20}
                onChange={e => setIsAvailable(e.target.value.length > 3)}
                className="bg-c-0 text-white max-w-[300px] md:max-w-[500px] placeholder:text-n-grey2"
                type="text"
                placeholder="yourbusinessname"
              />
              <div className={`${subText} ${isAvailable ? "opacity-100" : "opacity-0 "}`}>
                Such a beautiful name. We love it
              </div>
            </div>
            <Check className={`${checkClass} ${isAvailable ? "opacity-100" : "opacity-0 "}`} />
          </div>
        </div>

        <div className="mt-10 ">
          <Button className="!font-medium !text-[16px] !min-w-[100px] !w-[200px]" text="Get Started" withArrow={true} />
        </div>
      </Container>
    </section>
  );
};

const text8 = ctl(`
font-[700]
text-[40px]
leading-[48px]
tracking-[-0.04em]
md:text-[48px]
md:leading-[60px]
md:tracking-[-0.04em]
`);
const subText = ctl(`
text-[12px]
md:text-[16px]
text-n-yellow
md:leading-[28px]
leading-[14px]
tracking-normal
mt-2
transition-opacity
duration-300
`);
const checkClass = ctl(`
transition-opacity 
duration-300 
delay-300 
ml-3 
w-[24px] 
md:w-[54px]
`);
export { MenuSection6 };
