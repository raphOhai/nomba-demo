import React from "react";
import { Ntext, Br } from "components";
import { smallBusinessTips } from "config/small-business";
import { TipsAndUpdates } from "components";

const SmallBusinessTipsAndUpdates = () => {
  return (
    <div className="mt-20 lg:mb-40">
      <TipsAndUpdates
        list={smallBusinessTips}
        heading={
          <Ntext variant="h3">
            Nomba for small <Br variant="mobile" /> businesses of all types
          </Ntext>
        }
      />
    </div>
  );
};

export { SmallBusinessTipsAndUpdates };
