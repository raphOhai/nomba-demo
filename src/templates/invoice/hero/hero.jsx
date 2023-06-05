import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button } from "components";
import constants from "config/constants.json";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin([ScrollTrigger]);
const InvoicepageHero = ({ title, description }) => {
  const { SIGNUP_URL } = constants;

  useEffect(() => {
    const titleText = new SplitType(".invoice-hero-title", { type: "chars" });

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
        fontSize: "6rem",
        opacity: 0,
        y: "13rem",
        lineHeight: "6.5rem",
        // yPercent: 50,
      },
      {
        y: "11rem",
        opacity: 1,
        stagger: 0.05,
        duration: 0.8,
        ease: "power4.out",
      }
    );
    tl.to(titleText.chars, {
      fontSize: "4rem",
      y: "0",
      lineHeight: "5.25rem",
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
  });
  return (
    <section className={heroStyle}>
      <Container>
        <div className={heroTextWrapperStyle}>
          <div className={heroTextHeaders}>
            <Ntext variant="text9" color="primary-100" className="mb-[28px] text-center invoice-hero-title">
              {title}
            </Ntext>

            <Ntext variant="text4lite" className={subTextStyle} color="n-grey3">
              {description}
            </Ntext>
          </div>
          <div className={heroButtonsContainer}>
            <Button
              className="!font-medium !text-[16px]"
              text="Get Started"
              href={{ url: SIGNUP_URL }}
              withArrow={true}
            />
          </div>
        </div>
        <div className="hidden md:flex flex-row md:absolute md:bottom-0 justify-center items-baseline invoice-hero-image ">
          <StaticImage
            src="../../../assets/images/jpegs/invoice/hero/desktop-4x.png"
            alt="Desktop Image"
            className="invoice-desktop"
            loading="lazy"
            width={837}
            height={381}
          />
          <StaticImage
            src="../../../assets/images/jpegs/invoice/hero/mobile-4x.png"
            alt="Mobile Image"
            className="invoice-mobile"
            loading="lazy"
            style={{ marginLeft: "-20px" }}
            width={436}
            height={420}
          />
        </div>
        <div className="block md:hidden">
          <StaticImage src="../../../assets/images/jpegs/invoice/hero/m-mobile.png" alt="Mobile Image" loading="lazy" />
        </div>
      </Container>
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[90px]
bg-black
pt-[75px]
overflow-hidden
md:min-h-[100vh] relative
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
opacity-0
invoice-hero-description
`);

const heroButtonsContainer = ctl(`
flex
flex-col
md:flex-row
md:justify-center
gap-[30px]
md:items-center
w-full items-stretch 
invoice-hero-button
opacity-0
`);

InvoicepageHero.propTypes = {
  title: PropTypes.node,
  description: PropTypes.string,
};

export { InvoicepageHero };
