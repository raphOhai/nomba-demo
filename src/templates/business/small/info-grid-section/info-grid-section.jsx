import React from "react";
import { Ntext, Br } from "components";
import { smallBusinessTips } from "config/small-business";
import { InfoGridSection } from "components";

const SmallBusinessInfoGridSection = () => {
  return (
    <div className="mt-20 lg:mb-40">
      <InfoGridSection
        list={smallBusinessTips}
        heading={
          <Ntext variant="h3">
            Nomba for small <Br on="mobile" /> businesses of all types
          </Ntext>
        }
      />
    </div>
  );
};

export { SmallBusinessInfoGridSection };
