import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button } from "components";
import { BuyButton } from "../button";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin([ScrollTrigger]);
const PageHero = ({ title }) => {
  useEffect(() => {
    const titleText = new SplitType(".invoice-hero-title", { type: "chars" });
    if (window.innerWidth > 767) {
      gsap.set(".invoice-hero-description", {
        autoAlpha: 0,
        opacity: 1,
        xPercent: 50,
        transformStyle: "preserve-3d",
      });
      gsap.set(".invoice-desktop", {
        opacity: 0,
        yPercent: 10,
        scaleY: 0,
        // skewX: -10,
        transformStyle: "preserve-3d",
      });
      gsap.set(".invoice-mobile", {
        opacity: 0,
        yPercent: 60,
        scaleY: 1,
        // skewX: -10,
        transformStyle: "preserve-3d",
      });
      const tl = gsap.timeline();
      tl.fromTo(
        titleText.chars,
        {
          fontSize: window.innerWidth > 767 ? "6rem" : "5rem",
          opacity: 0,
          y: window.innerWidth > 760 ? "13rem" : "6rem",
          lineHeight: window.innerWidth > 767 ? "6.5rem" : "5.3rem",
          // yPercent: 50,
        },
        {
          y: window.innerWidth > 760 ? "11rem" : "7.5rem",
          opacity: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: "power4.out",
        }
      );
      tl.to(titleText.chars, {
        fontSize: window.innerWidth > 767 ? "4rem " : "3rem",
        y: "0",
        lineHeight: window.innerWidth > 767 ? "5.25rem" : "3.3rem",
        duration: 1,
        ease: "easeOut",
      });
      tl.to(".invoice-hero-description", {
        autoAlpha: 1,
        xPercent: 0,
        duration: 0.8,
        ease: "easeOut",
      });
      tl.fromTo(
        ".invoice-hero-button",
        {
          yPercent: 20,
          opacity: 0,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "easeOut",
        }
      );
      tl.to(".invoice-desktop", {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 1,
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        skewX: 0,
        ease: "easeOut",
      });
      tl.to(".invoice-mobile", {
        autoAlpha: 1,
        yPercent: 0,
        stagger: 1,
        scaleY: 1,
        opacity: 1,
        duration: 0.5,
        skewX: 0,
        ease: "easeOut",
      });
    }
  }, []);
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <div className={heroTextHeaders}>
            <Ntext variant="text9" color="primary-100" className=" text-center invoice-hero-title">
              {title}
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <BuyButton text={"Get Started"} />
            <Button variant="blackCta" className="!font-medium !text-[16px] " text="Try Demo" withArrow={false} />
          </div>
        </div>
        <div className="flex flex-row -mb-2 md:top-3 md:bottom-[-7px] md:left-0 justify-center md:items-baseline items-end invoice-hero-image ">
          <StaticImage width={401} height={380} src="../../../assets/images/jpegs/checkout/hero.png" />
        </div>
      </Container>
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[90px]
bg-black
pt-[55px]
overflow-hidden
md:min-h-[880px] relative
`);

const heroTextWrapperStyle = ctl(`

lg:mx-auto
max-w-[100%]
lg:mb-[50px]

`);

const heroTextHeaders = ctl(`
md:flex
md:flex-col
md:items-center
mb-[40px]
lg:mb-[50px]
`);

const subTextStyle = ctl(`
text-center
md:opacity-0
invoice-hero-description
`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
md:justify-center
md:items-center
mb-5
w-full items-stretch 
invoice-hero-button
md:opacity-0
`);

PageHero.propTypes = {
  title: PropTypes.node,
};

export { PageHero };
