import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imageStyle = ctl(`
  w-full
  h-full
`);

const accordionInfo = [
  {
    title: "Empathy",
    info:
      "We care about the needs of our customers. Hence, our commitment to create tools to ease how everyone spends, manages and saves money.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/accordion-empathy.jpg"
        alt=""
        className={imageStyle}
      />
    ),
  },
  {
    title: "Ownership",
    info:
      "Everything we do for our customers is right from the depth of our hearts.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/accordion-ownership.jpg"
        alt=""
        className={imageStyle}
      />
    ),
  },
  {
    title: "Growth",
    info:
      "We love to scale impact by creating excellent tools and encouraging businesses to take charge of their finances.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/A chance to move your business to the next level.jpg"
        alt="A chance to move your business to the next level"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Learning",
    info:
      "We are never too big to find the best ways to make people manage their numbers. ",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/accordion-learning.jpg"
        alt=""
        className={imageStyle}
      />
    ),
  },
  {
    title: "Open Communication",
    info:
      "We are open-minded, respectful & honest in our communication. We listen to the needs of our customers.o ease how everyone spends, manages and saves money.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/accordion-communication.jpg"
        alt=""
        className={imageStyle}
      />
    ),
  },
];

export { accordionInfo };
