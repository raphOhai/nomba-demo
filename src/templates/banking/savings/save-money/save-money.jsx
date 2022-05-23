import React from "react";
import ctl from "@netlify/classnames-template-literals";
import {
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
  SectionBrandElement,
} from "components";

import { saveMoneyBankingCardsData } from "config/options-section/save-money-banking";

const SaveMoney = () => {
  return (
    <div className={saveMoneyCardsWrapperStyle}>
      <SectionBrandElement />
      <Container>
        <SectionHeader>
          <Ntext variant="h3" color="primary-100" className="mt-2">
            Save money on your terms
          </Ntext>
        </SectionHeader>

        <div className={cardsListStyle}>
          {saveMoneyBankingCardsData.map((feature, index) => {
            return (
              <IllustrationCard key={`save_money_card_${index}`} {...feature} />
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const saveMoneyCardsWrapperStyle = ctl(`
bg-primary
py-8
md:py-16
relative
overflow-hidden

`);

const cardsListStyle = ctl(`
flex
lg:flex-row
flex-col
md:justify-between
items-center
`);
export { SaveMoney };
