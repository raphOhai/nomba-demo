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
      "We treat everyone with kindness and respect; our customers and people are valuable to us.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/empathy.jpg"
        alt=""
        className={imageStyle}
      />
    ),
  },
  {
    title: "Passion",
    info:
      "We are committed to everything we do while leveraging our skills and grit to meet our goals.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/Passion.jpeg"
        alt=""
        className={imageStyle}
      />
    ),
  },
  {
    title: "Integrity",
    info:
      "We are accountable to our customers and our people to do what is right, and we stand by it.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/Integrity.jpg"
        alt="A chance to move your business to the next level"
        className={imageStyle}
      />
    ),
  },
  {
    title: "Collaboration",
    info:
      "We work together as a team; with our customers, partners and our people to achieve our individual and collective growth.",
    image: (
      <StaticImage
        src="../assets/images/jpegs/about/Collaboration.jpeg"
        alt=""
        className={imageStyle}
      />
    ),
  },
];

export { accordionInfo };
