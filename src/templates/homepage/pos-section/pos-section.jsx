import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Container, SectionHeader, Br, PosCard } from "components";
import { posCardData } from "config/pos-cards-data";

const HomepagePosSection = () => {
  return (
    <section>
      <Container>
        <SectionHeader>
          <Ntext variant="h3">
            Durable, easy-to-use payment machines <Br variant="desktop" /> for
            businesses in Africa
          </Ntext>
        </SectionHeader>
        <div className={posCardWrapperStyle}>
          {posCardData.map((posdetails, index) => (
            <PosCard {...posdetails} key={`pos_card_${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const posCardWrapperStyle = ctl(`
grid 
gap-[50px] 
lg:grid-cols-2 
md:overflow-hidden
`);

export { HomepagePosSection };
