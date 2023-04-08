import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { imageStyle } from "./testimonial-image-style";

const SmallBusinessTestimonials = [
  {
    name: "Azoronyeahu Uchenna Gentle",
    role: "Akjfintech Solutions Global Resources",
    testimonial:
      "Nomba (Formerly Kudi) is loved here in Adamawa State and the North because Kudi means money in Hausa and with the Money means Numbers (Nomba).",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/auwal-usman.png"
        alt="Azoronyeahu Uchenna Gentle"
        className={imageStyle}
      />
    ),
  },
  {
    name: "Mrs Grace Uchenna",
    role: "Solutions Global Resources",
    testimonial:
      "Nomba (Formerly Kudi) is loved here in Adamawa State and the North because Kudi means money in Hausa and with the Money means Numbers (Nomba).",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/woman-smiling.png"
        alt="Mrs Grace"
        className={imageStyle}
      />
    ),
  },
];

export { SmallBusinessTestimonials };
