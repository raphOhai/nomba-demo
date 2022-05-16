import React from "react";
import { PageHeader } from "components";
import { StaticImage } from "gatsby-plugin-image";

const SavingsPageHeader = () => {
  return (
    <PageHeader
      pageHeaderText="Earn competitive interest rates when you save on Nomba"
      pageHeaderSubText="With a single account, you can automate your savings, and earn returns in percentages"
      pageHeaderButtonText="Start saving"
      image={
        <StaticImage
          width={629}
          height={644}
          src="../../../../assets/images/jpegs/Savings Image.jpg"
          alt="Savings Image"
        />
      }
    />
  );
};

export { SavingsPageHeader };
