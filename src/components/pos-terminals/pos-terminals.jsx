import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Container, SectionHeader, TerminalCard } from "components";
import { posCardData } from "config/nomba-terminals";

const POSTerminals = ({ title }) => {
  return (
    <section className="bg-primary-100 pb-[80px]">
      <Container>
        {title && (
          <SectionHeader>
            <Ntext variant="h3">{title}</Ntext>
          </SectionHeader>
        )}{" "}
      </Container>
      <div className={posCardWrapperStyle}>
        {posCardData.map((posdetails, index) => (
          <TerminalCard {...posdetails} key={`pos_card_${index}`} />
        ))}
      </div>
    </section>
  );
};

const posCardWrapperStyle = ctl(`
flex 
justify-start 
px-[25px] 
md:px-0 
gap-10 
mt-[50px] 
items-center 
md:items-stretch
md:flex-nowrap 
flex-col 
md:flex-row  
scrollbar-hide
overflow-auto 
 slider-margin-left
 md:pb-[30px]
`);

POSTerminals.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node, PropTypes.element]),
};
export { POSTerminals };
