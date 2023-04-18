import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";
import { SponsorList } from "templates/home";
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
          src="../../../../assets/images/jpegs/large-business/woman-making-payment-over-POS-nomba.png"
          alt="woman making payment over POS - nomba"
        />
      }
    >
      <SponsorList
        gigm={true}
        buyPower={true}
        crossFit={true}
        gig={false}
        reliance={false}
        className="!justify-start"
      />
    </PageHeader>
  );
};

export { LargePageHeader };
