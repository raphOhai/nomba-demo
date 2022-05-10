import { InfoCard, Container, SectionHeader } from "components";
import React from "react";
import ctl from "@netlify/classnames-template-literals";

const InfoGridSection = ({ list, heading }) => {
  return (
    <Container>
      <SectionHeader>{heading}</SectionHeader>

      <div className={infoGridStyle}>
        {list.map((item, index) => {
          return <InfoCard {...item} key={`tip_${index}`} />;
        })}
      </div>
    </Container>
  );
};

const infoGridStyle = ctl(`
grid
lg:grid-cols-4
sm:grid-cols-2
grid-cols-1
gap-8
`);

export { InfoGridSection };
