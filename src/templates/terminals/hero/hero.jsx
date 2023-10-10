import React from "react";
import { Container } from "components";
import Terminals from "svgs/TERMINALS.svg";

const TerminalsHero = () => {
  return (
    <section className="mt-28">
      <Container>
        <div className="flex justify-center text-center">
          <Terminals className="max-w-[1000px]" />
        </div>
      </Container>
    </section>
  );
};

export { TerminalsHero };
