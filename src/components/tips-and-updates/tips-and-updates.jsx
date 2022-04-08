import { BlogCard, Container, SectionHeader } from "components";
import { Ntext } from "components/ntext";
import React from "react";
import ctl from "@netlify/classnames-template-literals";

// This is a mock data. Real data to be pulled from CMS
import tipsList from "mocks/tips-and-updates.json";

const TipsAndUpdates = () => {
  console.log(tipsList);
  return (
    <Container>
      <SectionHeader>
        <Ntext variant="h3">
          Tips, updates and stories from <br />
          our community
        </Ntext>
      </SectionHeader>

      <div className={tipsGridStyle}>
        {tipsList.map((tip, index) => {
          return <BlogCard {...tip} key={`tip_${index}`} />;
        })}
      </div>
    </Container>
  );
};

const tipsGridStyle = ctl(`
grid
lg:grid-cols-4
sm:grid-cols-2
grid-cols-1
gap-8
`);

export { TipsAndUpdates };
