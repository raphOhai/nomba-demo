import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

export default function ImageSection() {
  return (
    <div className="hover:animate-pulseCustom mt-14 ">
      <StaticImage
        src="../../../../assets/images/jpegs/homepage/Nomba-Mini.png"
        alt="terminals"
        width={700}
        height={264}
        className={imgClass}
      />
    </div>
  );
}

const imgClass = ctl(`
scroll-smooth
`);
