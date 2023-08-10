import { Br, Ntext, Container } from "components";
import React, { useState } from "react";
import { Button } from "../button";
import Check from "svgs/check-yellow-outline.svg";
import ctl from "@netlify/classnames-template-literals";

const MenuSection6 = ({}) => {
  const [isAvailable, setIsAvailable] = useState(false);

  return (
    <section className="bg-c-0 my-40 md:my-48">
      <Container>
        <div className="">
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
                maxLength={10}
                onChange={e => setIsAvailable(e.target.value.length > 3)}
                className="bg-c-0 text-white max-w-[400px]"
                type="text"
                placeholder="yourbusinessname"
              />
              {isAvailable && <div className={subText}>Such a beautiful name. We love it </div>}
            </div>
            {isAvailable && <Check />}
          </div>
        </div>

        <div className="mt-10">
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
`);

export { MenuSection6 };
