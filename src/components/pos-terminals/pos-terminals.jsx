import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Container, SectionHeader, PosCard } from "components";
import { posCardData } from "config/pos-cards-data";

const POSTerminals = ({ title }) => {
  return (
    <section className="py-24">
      <Container>
        {title && (
          <SectionHeader>
            <Ntext variant="h3">{title}</Ntext>
          </SectionHeader>
        )}
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

POSTerminals.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node, PropTypes.element]),
};
export { POSTerminals };
