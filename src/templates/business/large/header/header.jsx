import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";

const LargePageHeader = () => {
  return (
    <PageHeader
      pageHeaderText="Simplify payment across multiple sales points"
      pageHeaderSubText="Manage your business with powerful banking and payment tools"
      pageHeaderButtonText="Grow your business"
      image={
        <StaticImage
          width={629}
          height={644}
          src="../../../../assets/images/jpegs/large-business/large-business-header.jpg"
          alt="woman making payment over POS - nomba"
        />
      }
    />
  );
};

export { LargePageHeader };
