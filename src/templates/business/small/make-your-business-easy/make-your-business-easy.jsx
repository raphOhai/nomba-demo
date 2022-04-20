import React from "react";
import ctl from "@netlify/classnames-template-literals";

import {
  Br,
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
} from "components";

import { makeYourBussinessEasyCardsData } from "config";
const MakeYourBusinessEasy = () => {
  return (
    <div className={benefitsCardsWrapperStyle}>
      <Container>
        <SectionHeader>
          <Ntext variant="h3" color="primary-100" className="mt-2">
            Make your business easy with Nomba
          </Ntext>
        </SectionHeader>

        <div className={cardsListStyle}>
          {makeYourBussinessEasyCardsData.map((feature, index) => {
            return (
              <IllustrationCard
                key={`make_your_business_easy_card_${index}`}
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
export { MakeYourBusinessEasy };
