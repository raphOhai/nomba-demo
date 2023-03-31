import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { Br, Button, Container, Ntext, ReadMore } from "components";
import { RotatingText } from "./rotating-text";
import constants from "config/constants.json";

const HomepageHero = () => {
  const { SIGNUP_URL } = constants;
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <Ntext variant="h1" color="primary-1000">
            Get better at business <Br on="desktop" /> with Nomba.
          </Ntext>

          <Ntext variant="p18" className={subTextStyle}>
            Over <span className={coloredText}>235,000</span> businesses trust Nomba to securely accept card
            and transfer payments, manage their money, and grow their
            business.
          </Ntext>
          <div className={heroButtonsContainer}>
            <Button
              href={{ url: SIGNUP_URL }}
              size="medium"
              text="Create an account for Free"
            />
            <ReadMore
              color="n-grey6"
              variant="text3"
              href={{ "url": "tel:+23401888899" }}
              text="Contact sales"

            />
          </div>
        </div>
        <div className={imageGridStyle}>
          <div className={imageWrapperStyle}></div>
          <div className={imageWrapperStyle}>
            <StaticImage
              width={510}
              height={406}
              src="../../../assets/images/jpegs/homepage/POS agent - nomba.jpg"
              style={{
                clipPath: "polygon(0% 99%, 0 68%, 86% 0, 100% 0, 100% 100%)",
              }}
              alt="Nomba POS Agent"
            />
          </div>
          <div className={`${imageWrapperStyle} !block`}>
            <StaticImage
              width={746}
              height={600}
              src="../../../assets/images/jpegs/homepage/dfrte.png"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% 50%, 33% 50%, 23% 66%, 0 66%)",
              }}
              alt="Woman at the closing store."
            />
          </div>

          <div className={imageWrapperStyle}>
            <StaticImage
              width={510}
              height={459}
              src="../../../assets/images/jpegs/homepage/market woman - nomba.jpg"
              style={{
                clipPath: "inset(0% 0% 31%)",
              }}
              alt="Woman making payment over POS"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[150px]
pt-[100px]
`);

const coloredText = ctl(`
font-bold
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-max
md:max-w-[605px]
max-w-[100%]
lg:mb-[80px]
sm:mb-[120px]
mb-12
`);

const subTextStyle = ctl(`
lg:max-w-[605px]
max-w-[405px]
mb-8
mt-6
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

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
items-center
`);

export { HomepageHero };
