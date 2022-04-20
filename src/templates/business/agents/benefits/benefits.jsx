import React from "react";
import ctl from "@netlify/classnames-template-literals";

import {
  Br,
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
} from "components";

import { agentsBenefitsCardsData } from "config";
const Benefits = () => {
  return (
    <div className={benefitsCardsWrapperStyle}>
      <Container>
        <SectionHeader>
          <Ntext variant="h3" color="primary-100" className="mt-2">
            You don’t just earn, you enjoy packed
            <Br variant="desktop" />
            benefits for every service
          </Ntext>
        </SectionHeader>

        <div className={cardsListStyle}>
          {agentsBenefitsCardsData.map((feature, index) => {
            return (
              <IllustrationCard key={`about_more_card_${index}`} {...feature} />
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
export { Benefits };
