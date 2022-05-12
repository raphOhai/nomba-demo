import React from "react";
import { Container, Ntext } from "components";
import ShapeTop from "svgs/banner-shape-1.svg";
import ShapeBottom from "svgs/banner-shape-2.svg";

import ctl from "@netlify/classnames-template-literals";

const PolicyPageHeader = ({ heading, date }) => {
  return (
    <header className={policyPageHeaderStyle}>
      <ShapeTop className={shapeTopStyle} />
      <ShapeBottom className={shapeBottomStyle} />
      <Container className="relative z-10">
        <Ntext value={heading} color="primary-100" variant="h1" />
        {date && (
          <Ntext
            value={`Revision Date: ${date}`}
            color="primary-100"
            variant="p18"
          />
        )}
      </Container>
    </header>
  );
};

const policyPageHeaderStyle = ctl(`
flex
items-center
justify-center
md:min-h-[566px]
min-h-[366px]
bg-primary
text-center
relative
overflow-hidden
pt-[66px]
`);

const shapeBaseStyle = ctl(`
absolute
md:w-auto
w-[240px]
z-0
`);
const shapeTopStyle = ctl(`
left-0
md:top-0
top-[-140px]
${shapeBaseStyle}
`);

const shapeBottomStyle = ctl(`
right-0
md:bottom-0
bottom-[-80px]
${shapeBaseStyle}
`);

export { PolicyPageHeader };
