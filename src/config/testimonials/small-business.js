import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { imageStyle } from "./testimonial-image-style";

const SmallBusinessTestimonials = [
  {
    name: "Auwal Usman",
    role: "CEO, Auwalus Business Concept",
    testimonial:
      "Nomba (Formerly Kudi) is loved here in Adamawa State and the North because Kudi means money in Hausa and with the Money means Numbers (Nomba).",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/auwal-usman-1.png"
        alt="Auwal Usman"
        className={imageStyle}
      />
    ),
  },
  {
    name: "Goddey Duke",
    role: "",
    testimonial:
      "In 2018/2019, I was introduced to Nomba (Formerly Kudi), and joining Nomba gave my business a new lease on life. Because I can cash out my funds immediately after a withdrawal, my capital has increased. In June 2021 I became a Nomba partner and in less than a year my business capital has increased 10X.",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/small-business/Goddey Duke.jpg"
        alt="Mrs Grace"
        className={imageStyle}
      />
    ),
  },
];

export { SmallBusinessTestimonials };
