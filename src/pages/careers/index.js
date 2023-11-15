import React, { useEffect } from "react";
import Layout from "components/layout-max";
import { GetStarted, Testimonial } from "components";
import { careersTestimonials } from "config/careers";
import {
  CareersTipsAndStories,
  WhatWeAreBuilding,
  WhatWeBelieveIn,
  OurValues
} from "templates";
// import {
//   CareersPageHero,
// } from "templates/careers";
import { split } from "animations/text";
import SeoConf from "config/seo/meta";

const CareersPage = () => {
  useEffect(() => {
    split();
  });

  return (
    <Layout
      title={SeoConf.careers.title}
      description={SeoConf.careers.description}
      useStickyNav={false}
    >
      {/* <CareersPageHero
        description="Get Nomba MAX, the all-in-one business solution that offers more than just payment processing."
        title={
          <>
            {" "}
            Switch to the MAX, <Br on="all" /> experience more than payments!
          </>
        }
      /> */}
      <WhatWeBelieveIn />
      <OurValues />
      <Testimonial
        className="!bg-black"
        testimonials={careersTestimonials}
        headingText={<>Hear what our employees are saying about us</>}
      />
      <WhatWeAreBuilding />
      <GetStarted
        title="Join us at Nomba today"
        buttonText="View Available Roles"
        buttonLink="/careers/roles"
        buttonStyle="px-8"
        withArrow={false}
      />
      <CareersTipsAndStories />
    </Layout>
  );
};

export default CareersPage;
