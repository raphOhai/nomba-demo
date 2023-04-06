import React, { useEffect } from "react";
import "./index.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { StaticImage } from "gatsby-plugin-image";
gsap.registerPlugin(ScrollTrigger);

const ZoomInPos = () => {
  return <div className="c_czoom"></div>;
};

export { ZoomInPos };
