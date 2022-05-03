import React from "react";
import { Ntext, Br } from "components";
import { largeBusinessTips } from "config/large-business";
import { TipsAndUpdates } from "components";

const LargeBusinessTipsAndUpdates = () => {
  return (
    <div className="mt-20 lg:mb-40">
      <TipsAndUpdates
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

export { LargeBusinessTipsAndUpdates };
