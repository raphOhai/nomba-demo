import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";

const AgentPageHeader = () => {
  return (
    <PageHeader
      pageHeaderText="Bring financial services to your community"
      pageHeaderSubText="Manage your business with powerful banking and payment tools"
      pageHeaderButtonText="Grow your business"
      image={
        <StaticImage
          width={629}
          height={644}
          src="../../../../assets/images/jpegs/Bring Financial service to your community.jpg"
          alt="Bring Financial service to your community"
          style={{
            clipPath: "polygon(64% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
          }}
        />
      }
    />
  );
};

export { AgentPageHeader };
