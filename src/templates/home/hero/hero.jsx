import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Button, Container, Ntext, ReadMore } from "components";
import constants from "config/constants.json";
import { HeroSlider, SponsorList } from "./index";

const HomepageHero = ({ title, description, images, mobileImages }) => {
  const { SIGNUP_URL } = constants;
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <div className={heroTextHeaders}>
            <Ntext variant="h1" color="primary-1000" className="basis-3/5">
              {title}
            </Ntext>

            <Ntext variant="p18" className={subTextStyle}>
              {description}
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <Button href={{ url: SIGNUP_URL }} size="medium" text="Create an account for Free" />
            <ReadMore color="n-grey6" variant="text3" href={{ url: "tel:+23401888899" }} text="Contact sales" />
          </div>
        </div>
        <div className={imageGridStyle}>
          {images.map((image, i) => (
            <div kay={i} className={imageWrapperStyle}>
              {image}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <HeroSlider images={mobileImages} />
        </div>
        <SponsorList />
      </Container>
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[150px]
md:pb-[50px]
pt-[100px]
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-max
max-w-[100%]
lg:mb-[80px]
sm:mb-[120px]
md:mx-2
mb-10
`);

const heroTextHeaders = ctl(`
md:flex
md:flex-row
md:items-start
mb-10
`);

const subTextStyle = ctl(`
mb-8
mt-6
md:mt-3
basis-2/5
`);

const imageWrapperStyle = ctl(`
rounded 
w-full lg:w-1/3
text-center
`);
const imageGridStyle = ctl(`
md:flex flex-nowrap
pointer-events-none
hidden
overflow-x-auto
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

HomepageHero.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
  images: PropTypes.array,
};
export { HomepageHero };
