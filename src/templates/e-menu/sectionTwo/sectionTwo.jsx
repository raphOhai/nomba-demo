import React, { useEffect, createRef } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button } from "components";
import constants from "config/constants.json";
import iPhone from "jpegs/e-menu/phone1.png";
import heroVideo from "jpegs/e-menu/hero/hero.mp4";
import { StaticImage } from "gatsby-plugin-image";

gsap.registerPlugin([ScrollTrigger]);
const EmenuSection2 = () => {
  const { SIGNUP_URL } = constants;
  useEffect(() => {
    const titleText = new SplitType(".emenu-hero-title", { type: "chars" });
  });
  return (
    <section class=" bg-n-yellow1">
      <Container className="mt-8 md:mt-[100px] ">
        <div class="relative py-[200px] md:py-24 md:px-0 px-[50px] min-h-[100vh] flex flex-col justify-center items-center">
          <img src={iPhone} width={347} height={682} />
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
