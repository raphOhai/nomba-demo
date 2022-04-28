import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { imageStyle } from "./testimonial-image-style";

const LargeBusinessTestimonials = [
  {
    name: "Pinnacle Risk Advisory Ltdn",
    testimonial: `"As a startup, partnering with Nomba (formerly Kudi) has been extremely beneficial to our growth, particularly in terms of our digital risk solutions. Nomba provides excellent customer service, and the team is always available, responsive, and competent."`,
    image: (
      <StaticImage
        src="../../assets/images/jpegs/large-business/pinnacle.png"
        alt="Kenneth Kelvin"
        className={imageStyle}
      />
    ),
  },
];

export { LargeBusinessTestimonials };
