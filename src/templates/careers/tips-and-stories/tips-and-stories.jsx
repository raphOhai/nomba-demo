import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { tipsAndStoriesList } from "mocks/tips-and-stories.js";

import { InfoGridSection, Br, Ntext } from "components";

const CareersTipsAndStories = () => {
  return (
    <section className={tipsAndStoriesWrapperStyle}>
      <InfoGridSection
        list={tipsAndStoriesList}
        heading={
          <Ntext variant="h3">
            Tips, updates and stories <Br on="desktop" /> from our community
          </Ntext>
        }
      />
    </section>
  );
};

const tipsAndStoriesWrapperStyle = ctl(`
  bg-primary-200 pb-20
`);

export { CareersTipsAndStories };
