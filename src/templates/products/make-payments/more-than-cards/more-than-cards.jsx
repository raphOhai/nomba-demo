import React from "react";
import ctl from "@netlify/classnames-template-literals";

import {
  Br,
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
} from "components";

import { aboutMoreThanCardsData } from "config";
const MoreThanCards = () => {
  return (
    <div className={moreThanCardsWrapperStyle}>
      <Container>
        <SectionHeader className="lg:text-left md:mx-0">
          <Ntext variant="h7" value="More than cards" color="secondary" />
          <Ntext variant="h3" color="primary-100" className="mt-2">
            Accept money through <Br on="desktop" />
            transfers and QR codes
          </Ntext>
        </SectionHeader>

        <div className={cardsListStyle}>
          {aboutMoreThanCardsData.map((feature, index) => {
            return (
              <IllustrationCard key={`about_more_card_${index}`} {...feature} />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const moreThanCardsWrapperStyle = ctl(`
bg-primary
py-16
min-h-[750px]
`);

const cardsListStyle = ctl(`
flex
lg:flex-row
flex-col
md:justify-between
items-center
`);
export { MoreThanCards };
