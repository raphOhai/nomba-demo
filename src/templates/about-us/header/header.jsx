import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";

const AboutUsPageHeader = () => {
  return (
    <>
      <PageHeader
        pageHeaderText="Improving payment experience for businesses"
        pageHeaderSubText="Accept bank cards, receive transfers, and collect payment via QR codes"
        pageHeaderButtonText="Get Started"
        image={
          <StaticImage
            width={629}
            height={644}
            src="../../../assets/images/jpegs/about/About Us - Improving experience.jpg"
            alt="About Us Improving experience"
            style={{
              clipPath: "polygon(0% 100%, 0% 60%, 100% 0%, 100% 100%)",
            }}
          />
        }
      />
    </>
  );
};

export { AboutUsPageHeader };
