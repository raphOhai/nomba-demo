import React from "react";
import { PageHeader } from "components/header/pageheader";

import { StaticImage } from "gatsby-plugin-image";

const PosPageHeader = () => {
  return (
    <PageHeader
      pageHeaderText=" Get paid in-store or on-the-go"
      pageHeaderSubText="Collect card payments using the Nomba POS Terminals."
      pageHeaderButtonText="Request a Terminal"
      image={
        <StaticImage
          width={629}
          height={644}
          src="../../../../assets/images/jpegs/Get paid in-store or on-the-go.jpg"
          alt="Get paid in-store or on-the-go"
          style={{
            clipPath: "polygon(64% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
          }}
        />
      }
    />
  );
};

export { PosPageHeader };
