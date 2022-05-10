import React from "react";

import { PageHeader } from "components/header/pageheader";

import { StaticImage } from "gatsby-plugin-image";

const MakePaymentsPageHeader = () => {
  return (
    <PageHeader
      pageHeaderText=" Make and manage  your payments like you
         
          mean business"
      pageHeaderSubText="Send money to your vendors  and customers in two minutes. "
      pageHeaderButtonText="Get Started"
      image={
        <StaticImage
          width={629}
          height={644}
          src="../../../../assets/images/jpegs/Make Payments.jpg"
          alt="Make Payments"
        />
      }
    />
  );
};

export { MakePaymentsPageHeader };
