import React from "react";

import { PageHeader } from "components/header/pageheader";

import { StaticImage } from "gatsby-plugin-image";

const AcceptPaymentsPageHeader = () => {
  return (
    <>
      <PageHeader
        pageHeaderText=" Accepting payments  has never been easier"
        pageHeaderSubText="Accept bank cards | Receive transfers  | Collect payment via QR Codes "
        pageHeaderButtonText="Get Started"
        image={
          <StaticImage
            width={629}
            height={644}
            src="../../../../assets/images/jpegs/Accepting payments has never been easier.jpg"
            alt="Accepting payments has never been easier"
            style={{
              clipPath: "polygon(64% 0, 100% 0, 100% 100%, 0 100%, 0 50%)",
            }}
          />
        }
      />
    </>
  );
};

export { AcceptPaymentsPageHeader };
