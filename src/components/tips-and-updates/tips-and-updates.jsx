import { BlogCard, Container, SectionHeader } from "components";
import React from "react";
import ctl from "@netlify/classnames-template-literals";

const TipsAndUpdates = ({ list, heading }) => {
  return (
    <Container>
      <SectionHeader>{heading}</SectionHeader>

      <div className={tipsGridStyle}>
        {list.map((tip, index) => {
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
