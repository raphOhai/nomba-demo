import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";

const imageStyle = ctl(`
  w-full
  h-full
`);

const AgentTestimonials = [
  {
    name: "Goddey Duke",
    testimonial: `“In 2018/2019, I was introduced to Nomba (Formerly Kudi), and joining Nomba gave my business a new lease on life. Because I can cash out my funds immediately after a withdrawal, my capital has increased. In June 2021 I became a Nomba partner and in less than a year my business capital has increased 10X.”`,
    image: (
      <StaticImage
        src="../../assets/images/jpegs/Goddey Duke.jpg"
        alt="Goddey Duke"
        className={imageStyle}
      />
    ),
  },
  {
    name: "Salihu Ali Umar",
    testimonial: `“Nomba (Formerly Kudi) is one of the best platforms. They listen and respond to the Partner and Agent demands. The POS Terminal is durable, has a reliable network and a range of services.”`,
    image: (
      <StaticImage
        src="../../assets/images/jpegs/agents/salihu.png"
        alt="Salihu Ali Umar"
        className={imageStyle}
      />
    ),
  },
  {
    name: "Azoronyeahu Uchenna Gentle",
    testimonial: `“Partnering with Nomba (formerly Kudi) has been such an amazing journey. Nomba gives my agents one of the cheapest transaction charges in the market. Nomba has numerous products, services and juicy features to meet different payment needs.”`,
    image: (
      <StaticImage
        src="../../assets/images/jpegs/uchenna.png"
        alt="Azoronyeahu Uchenna Gentle"
        className={imageStyle}
      />
    ),
  },
  // {
  //   name: "Christian Ogala",
  //   testimonial: `"When I first started as a Nomba agent, I was scared of being robbed at my store. The Nomba cash insurance came to my rescue. Nomba has made me feel safe with my money, and I now work longer hours at my store without fear of losing money. The Nomba cash insurance has greatly assisted me in expanding my business."`,
  //   image: (
  //     <StaticImage
  //       src="../../assets/images/jpegs/agents/salihu.png"
  //       alt="Christian Ogala"
  //       className={imageStyle}
  //     />
  //   ),
  // },
];

export { AgentTestimonials };
