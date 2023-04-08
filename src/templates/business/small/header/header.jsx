import React from "react";
import { PageHeaderNew } from "components";
import { heroImage } from "config/small-business";
const SmallPageHeader = () => {
  return (
    <PageHeaderNew
      pageHeaderText="Improve payment options for your growing business"
      pageHeaderSubText="Accept, confirm and get instant settlement for your business' payments"
      pageHeaderButtonText="Grow your business"
      image={heroImage}
    />
  );
};

export { SmallPageHeader };
