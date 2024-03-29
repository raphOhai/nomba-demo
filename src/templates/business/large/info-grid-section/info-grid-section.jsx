import React from "react";
import { Ntext, Br } from "components";
import { largeBusinessTips } from "config/large-business";
import { InfoGridSection } from "components";

const LargeBusinessInfoGridSection = () => {
  return (
    <div className="mt-20 lg:mb-40">
      <InfoGridSection
        list={largeBusinessTips}
        heading={
          <Ntext variant="h3">
            Nomba for large <Br on="mobile" /> businesses and fleets
          </Ntext>
        }
      />
    </div>
  );
};

export { LargeBusinessInfoGridSection };
