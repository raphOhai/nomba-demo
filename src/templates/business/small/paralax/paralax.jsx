import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Br, Container, Button, Ntext, SectionHeader } from "components";
import constants from "config/constants.json";

const { SIGNUP_URL } = constants;

const Paralax = () => {
  return (
    <section className={parallaxWrapper}>
      <div className={parallaxBlankWrapper}>
        <div className="max-w-[946px] text-center gap-10 px-5 ">
          <Ntext variant="h3" color="primary-100" className="mb-12">
            Get better with your <Br on="mobile" /> business and become
            <Br on="all" /> a Nomba Agent today
          </Ntext>
          <Button
            link={{ href: { url: SIGNUP_URL } }}
            text="Get your business started"
            size="medium"
          />
        </div>
      </div>
    </section>
  );
};

const parallaxWrapper = ctl(`
bg-bg-parallax
w-full
md:h-[680px]
bg-center
bg-cover
h-[560px]
relative

`);

const parallaxBlankWrapper = ctl(`
bg-bg-parallax-blank
w-full
h-full
bg-center
bg-cover
flex flex-col justify-center items-center
relative
`);
const optionsListStyle = ctl(`
grid
grid-cols-1
md:grid-cols-2

`);
const subFooterRightImage = ctl(`
  absolute 
  hidden
  md:block
  -right-5
  bottom-0
`);
export { Paralax };
