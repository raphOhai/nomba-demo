import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

const imageStyle = ctl(`
  w-full
  h-full
`);

const AcceptPaymentTestimonials = [
  {
    name: "Mr. Goddey Duke",
    role: "G5 Communication And Accessories",
    testimonial:
      "Before I started accepting payments with Nomba, my business suffered a lot of setbacks ranging from delayed settlement, unsettled transactions, and high service charge cuts. Nomba, on the other hand, transformed my business by instantly crediting my Nomba wallet on every transaction. Accepting payments is simple with Nomba.",
    image: (
      <StaticImage
        src="../../assets/images/jpegs/Goddey Duke.jpg"
        alt="Mr, Goddey Duke. A business owner"
        className={imageStyle}
      />
    ),
  },
];

export { AcceptPaymentTestimonials };
