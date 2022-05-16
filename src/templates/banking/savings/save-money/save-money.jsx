import React from "react";
import ctl from "@netlify/classnames-template-literals";
import {
  Br,
  Container,
  IllustrationCard,
  Ntext,
  SectionHeader,
  OurStoryTerminalCard,
} from "components";

import { saveMoneyBankingCardsData } from "config/options-section/save-money-banking";

const SaveMoney = () => {
  return (
    <OurStoryTerminalCard>
      <div className={benefitsCardsWrapperStyle}>
        <Container>
          <SectionHeader>
            <Ntext variant="h3" color="primary-100" className="mt-2">
              Save money on your terms
            </Ntext>
          </SectionHeader>

          <div className={cardsListStyle}>
            {saveMoneyBankingCardsData.map((feature, index) => {
              return (
                <IllustrationCard
                  key={`save_money_card_${index}`}
                  {...feature}
                />
              );
            })}
          </div>
        </Container>
      </div>
    </OurStoryTerminalCard>
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
export { SaveMoney };
