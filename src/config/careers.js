import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const careersTestimonials = [
  {
    name: "Jane Brown",
    role: "Senior Software Engineer, Nomba",
    testimonial: "I have had the privilege of working with the exceptional team at Nomba for the past few years. As a software engineer, I have been thoroughly impressed with their commitment to innovation, unwavering dedication to security, and their relentless pursuit of excellence",
    textVariant: "text4lite",
    italicizeRole: false,
    image: (
      <StaticImage alt="Jane Brown" src="../assets/images/jpegs/careers/testimonials/jane-brown.png" loading="lazy" />
    ),
  },
];