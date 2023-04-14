import React from "react";

import { PageHeader } from "components/header/pageheader";

import { StaticImage } from "gatsby-plugin-image";

const AcceptPaymentsPageHeader = () => {
  return (
    <>
      <PageHeader
        pageHeaderText=" Accepting payments  has never been easier"
        pageHeaderSubText="Accept bank cards, receive transfers, and collect payment via QR codes"
        pageHeaderButtonText="Get Started"
        image={
          <StaticImage
            width={612}
            height={637}
            className="rounded-lg shadow-md"
            src="../../../../assets/images/jpegs/Accepting payments has never been easier.jpg"
            alt="Accepting payments has never been easier"
          />
        }
      />
    </>
  );
};

export { AcceptPaymentsPageHeader };
