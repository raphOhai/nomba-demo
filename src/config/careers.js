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
      <StaticImage alt="Jane Brown" src="../assets/images/jpegs/careers/home/testimonials/jane-brown.png" loading="lazy" />
    ),
  },
];

export const whatWeAreBuilding = {
  title: "We are building payment tools for every business",
  description: "A tool for every task. One platform for your business. Join over 100 of us in building these tools to help businesses.",
  images: [
    (<StaticImage
      alt="Two Smiling Ladies"
      src="../assets/images/jpegs/careers/home/what-we-are-building/two-smiling-ladies.png"
      loading="lazy"
    />),
    (<StaticImage
      alt="A Smiling Group Photo"
      src="../assets/images/jpegs/careers/home/what-we-are-building/smiling-group-photo.png"
      loading="lazy"
    />),
    (<StaticImage
      alt="A Smiling Man And Lady"
      src="../assets/images/jpegs/careers/home/what-we-are-building/smiling-man-and-lady.png"
      loading="lazy"
    />),
  ],
};

export const whatWeBelieveIn = {
  title: "We strongly believe in our culture",
  description: "We are building an ecosystem that simplifies how businesses accept payments, make payments and manage operations. This journey started in 2016 with simplifying access to financial services using \"Kudi.ai\" a chatbot integration that responds to financial requests on social apps.",
  videoCaption: "“More than a culture, it's an asset”",
};

export const ourValues = [
  {
    title: "Empathy",
    titleColour: "n-bronze",
    details: "We treat everyone with kindness and respect; our customers and people are valuable to us.",
    colour: "#FCDCCF",
  },
  {
    title: "Passion",
    titleColour: "n-grape",
    details: "We are committed to everything we do while leveraging our skills and grit to meet our goals.",
    colour: "#EFD9F2",
  },
  {
    title: "Integrity",
    titleColour: "n-olive",
    details: "We are accountable to our customers and our people to do what is right, and we stand by it.",
    colour: "#F7E189",
  },
  {
    title: "Collaboration",
    titleColour: "n-opal",
    details: "We work together as a team; with our customers, partners and our people to achieve our individual and collective growth.",
    colour: "#D9F2F2",
  }
];