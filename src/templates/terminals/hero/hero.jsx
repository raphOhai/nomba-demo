import React from "react";
import { Container } from "components";
import Terminals from "svgs/TERMINALS.svg";

const TerminalsHero = () => {
  return (
    <section className="mt-28">
      <Container>
        <div className="text-center">
          <Terminals />
        </div>
      </Container>
    </section>
  );
};

export { TerminalsHero };
