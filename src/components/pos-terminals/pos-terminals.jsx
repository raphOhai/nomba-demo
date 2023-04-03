import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Container, SectionHeader, TerminalCard } from "components";
import { posCardData } from "config/nomba-terminals";

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
            <TerminalCard {...posdetails} key={`pos_card_${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

const posCardWrapperStyle = ctl(`
md:grid md:grid-cols-3 gap-7 flex flex-col
`);

POSTerminals.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node, PropTypes.element]),
};
export { POSTerminals };
