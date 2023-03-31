import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

export default function ImageSection() {

  return (
    <div className="hover:animate-pulseCustom">
      <StaticImage
        src="../../../../assets/images/jpegs/grouped-terminals.png"
        alt="terminals"
        className={imgClass}
      />
    </div>
  );
}

const imgClass = ctl(`
scroll-smooth
`)
