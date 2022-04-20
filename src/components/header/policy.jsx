import React from "react";
import { Container, Ntext } from "components";

import ctl from "@netlify/classnames-template-literals";

const PolicyPageHeader = ({ heading, date }) => {
  return (
    <header className={policyPageHeaderStyle}>
      <Container>
        <Ntext value={heading} color="primary-100" variant="h1" />
        {date && (
          <Ntext
            value={`Effective as of ${date}`}
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
md:min-h-[500px]
min-h-[300px]
bg-primary
text-center
`);

export { PolicyPageHeader };
