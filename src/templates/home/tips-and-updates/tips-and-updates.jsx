import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { tipsAndUpdatesList } from "mocks/tips-and-updates.js";

import { InfoGridSection, Br, Ntext } from "components";

const HomepageTipsAndUpdate = () => {
  return (
    <section className={tipsAndNewsUpdateWrapStyle}>
      <InfoGridSection
        list={tipsAndUpdatesList}
        heading={
          <Ntext variant="h3">
            Tips, updates and stories from <Br />
            our community
          </Ntext>
        }
      />
    </section>
  );
};

const tipsAndNewsUpdateWrapStyle = ctl(`
  bg-primary-200 
`);

export { HomepageTipsAndUpdate };
