import React from "react";
import ctl from "@netlify/classnames-template-literals";

import {
  Br,
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
} from "components";

import { convenienceCardsData } from "config";
const Convenience = () => {
  return (
    <div className={benefitsCardsWrapperStyle}>
      <Container>
        <SectionHeader>
          <Ntext variant="h3" color="primary-100" className="mt-2">
            The convenience of accepting payments
            <Br on="desktop" /> and managing operations
          </Ntext>
        </SectionHeader>

        <div className={cardsListStyle}>
          {convenienceCardsData.map((feature, index) => {
            return (
              <IllustrationCard
                key={`convenience_card_${index}`}
                {...feature}
              />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const benefitsCardsWrapperStyle = ctl(`
bg-primary
pt-8
pb-16

`);

const cardsListStyle = ctl(`
flex
lg:flex-row
flex-col
md:justify-between
items-center
`);
export { Convenience };
