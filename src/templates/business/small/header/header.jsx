import React from "react";
import { PageHeaderNew } from "components";
import { heroImage } from "config/small-business";
const SmallPageHeader = () => {
  return (
    <PageHeaderNew
      pageHeaderText="Improve payment options for your growing business"
      pageHeaderSubText="Manage your growing business and accept payments with creative tools"
      pageHeaderButtonText="Grow your business"
      image={heroImage}
    />
  );
};

export { SmallPageHeader };
