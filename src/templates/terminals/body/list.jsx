import React from "react";
import { Container } from "components";
import { TerminalCard } from "./terminal-card";
import { terminalData } from "./terminals";
const TerminalList = () => {
  return (
    <section className="mt-28 bg-primary-100">
      <Container>
        <div className="grid md:grid-cols-2 gap-4 md:gap-0 grid-cols-1">
          {terminalData.map((posdetails, index) => (
            <TerminalCard {...posdetails} key={`pos_card_${index}`} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export { TerminalList };
