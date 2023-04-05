import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { imageStyle } from "./testimonial-image-style";

const SmallBusinessTestimonial = {
  name: "Azoronyeahu Uchenna Gentle",
  role: "Auwal Usman Akjfintech Solutions Global Resources",
  testimonial:
    "Nomba (Formerly Kudi) is loved here in Adamawa State and the North because Kudi means money in Hausa and with the Money means Numbers (Nomba).",
  image: (
    <StaticImage
      src="../../assets/images/jpegs/uchenna.png"
      alt="Azoronyeahu Uchenna Gentle"
      className={imageStyle}
    />
  ),
};

export { SmallBusinessTestimonial };
