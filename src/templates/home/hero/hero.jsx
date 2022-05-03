import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { Br, Button, Container, Ntext } from "components";
import { RotatingText } from "./rotating-text";
import constants from "config/constants.json";

const HomepageHero = () => {
  const { SIGNUP_URL } = constants;
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <Ntext variant="h1" color="primary-1000">
            Simple <RotatingText /> <Br on="mobile" />
            solutions <Br on="desktop" />
            for your business
          </Ntext>

          <Ntext variant="p18" className={subTextStyle}>
            Accept payments, send money, use tools that will help you grow your
            business
          </Ntext>
          <Button
            href={{ url: SIGNUP_URL }}
            size="medium"
            text="Create an account for Free"
          />
        </div>
        <div className={imageGridStyle}>
          <div className={imageWrapperStyle}></div>
          <div className={imageWrapperStyle}>
            <StaticImage
              width={510}
              height={506}
              src="../../../assets/images/jpegs/homepage/POS agent - nomba.jpg"
              style={{
                clipPath: "polygon(0% 100%, 0% 60%, 100% 0%, 100% 100%)",
              }}
              alt="Nomba POS Agent"
            />
          </div>
          <div className={`${imageWrapperStyle} !block`}>
            <StaticImage
              width={746}
              height={764}
              src="../../../assets/images/jpegs/homepage/woman making payment over POS - nomba.jpg"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 50%, 20% 100%, 0% 100%)",
              }}
              alt="Woman making payment over POS"
            />
          </div>

          <div className={imageWrapperStyle}>
            <StaticImage
              width={510}
              height={459}
              src="../../../assets/images/jpegs/homepage/market woman - nomba.jpg"
              style={{
                clipPath:
                  "polygon(0% 0%, 100% 0%, 100% 100%, 20% 100%, 0% 85%)",
              }}
              alt="Woman making payment over POS"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

const heroStyle = ctl(`
md:pt-[150px]
pt-[100px]
pb-[120px]
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-max
md:max-w-[605px]
max-w-[405px]
md:mb-[80px]
mb-12
`);

const subTextStyle = ctl(`
max-w-[355px]
mb-6
mt-2
`);

const imageWrapperStyle = ctl(`
md:block
hidden
odd:col-span-3
even:col-span-2
`);
const imageGridStyle = ctl(`
grid
md:grid-cols-5
grid-cols-1
gap-[40px]
lg:-mt-[450px]
md:-mt-[350px]
pointer-events-none
`);

export { HomepageHero };
