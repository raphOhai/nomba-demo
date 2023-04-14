import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";

const AboutUsPageHeader = () => {
  return (
    <>
      <PageHeader
        pageHeaderText="Improving payment experience for businesses"
        pageHeaderSubText="We are creating tools for businesses to manage sales, money and payments without hurdles"
        pageHeaderButtonText="Get Started"
        image={
          <StaticImage
            width={612}
            height={637}
            className="rounded-lg shadow-md"
            src="../../../assets/images/jpegs/about/About Us - Improving experience.jpg"
            alt="About Us Improving experience"
          />
        }
      />
    </>
  );
};

export { AboutUsPageHeader };
