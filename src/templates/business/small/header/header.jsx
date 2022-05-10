import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";

const SmallPageHeader = () => {
  return (
    <PageHeader
      pageHeaderText="Increase payment options for your growing business"
      pageHeaderSubText="Manage your growing business and accept payments with creative tools"
      pageHeaderButtonText="Grow your business"
      image={
        <StaticImage
          width={629}
          height={644}
          src="../../../../assets/images/jpegs/Small Business.jpg"
          alt="Small Business"
        />
      }
    />
  );
};

export { SmallPageHeader };
