import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";

const imgStyle = ctl(`
bg-[#999999]
rounded-[10px]
md:w-[174px]
md:h-[388px]
`);

const imageSection = ctl(`
flex
flex-row
justify-between
gap-[20px]
mb-[54px]
max-w-[597px]
max-h-[397px]
animate-fadeIn
`);

export const FirstLevel = ({ opacity }) => {
  return (
    <div className={imageSection} style={{ opacity }}>
      <StaticImage className={imgStyle} src={"./images/1m.png"} alt={"image-4"} />

      <StaticImage className={imgStyle} src={"./images/2m.png"} alt={"image-5"} />

      <StaticImage className={imgStyle} src={"./images/3m.png"} alt={"image-6"} />
    </div>
  );
};

export const SecondLevel = ({ opacity }) => {
  return (
    <div className={imageSection} style={{ opacity }}>
      <StaticImage className={imgStyle} src={"./images/1t.png"} alt={"image-1"} />

      <StaticImage className={imgStyle} src={"./images/2t.png"} alt={"image-2"} />

      <StaticImage className={imgStyle} src={"./images/3t.png"} alt={"image-3"} />
    </div>
  );
};

export const ThirdLevel = ({ opacity }) => {
  return (
    <div className={imageSection} style={{ opacity }}>
      <StaticImage className="rounded-[10px]" src={"./images/123b.png"} alt={"image-7"} />
    </div>
  );
};
