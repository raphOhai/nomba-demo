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
          <div className={heroTextHeaders}>
            <Ntext variant="h1" color="primary-1000" className="basis-2/3">
              Get better at business <Br on="desktop" /> with Nomba.
            </Ntext>

            <Ntext variant="p18" className={subTextStyle}>
              Over 235,000 businesses trust Nomba to securely accept card and
              transfer payments, manage their money, and grow their business.
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <Button
              href={{ url: SIGNUP_URL }}
              size="medium"
              text="Create an account for Free"
            />
            <ReadMore
              color="n-grey6"
              variant="text3"
              href={{ url: "tel:+23401888899" }}
              text="Contact sales"
            />
          </div>
        </div>
        <div className={imageGridStyle}>
          <div className={imageWrapperStyle}>
            <StaticImage
              width={397}
              height={387}
              src="../../../assets/images/jpegs/homepage/hero-images/hero1.jpg"
              alt="Nomba POS Agent"
            />
          </div>
          <div className={imageWrapperStyle}>
            <StaticImage
              width={397}
              height={387}
              src="../../../assets/images/jpegs/homepage/hero-images/hero2.jpg"
              alt="Woman at the closing store."
            />
          </div>

          <div className={imageWrapperStyle}>
            <StaticImage
              width={397}
              height={387}
              src="../../../assets/images/jpegs/homepage/hero-images/hero3.jpg"
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
md:mx-2
mb-10
`);

const heroTextHeaders = ctl(`
flex
flex-col
md:flex-row
mb-10
`);

const subTextStyle = ctl(`
mb-8
mt-6
basis-1/3
`);

const imageWrapperStyle = ctl(`
rounded 
flex-auto
grow
text-center
hidden
md:block

`);
const imageGridStyle = ctl(`
flex flex-row
pointer-events-none
mb-10
md:gap-10
gap-4
`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
gap-[30px]
items-center
`);

export { HomepageHero };
