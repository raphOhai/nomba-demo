import React from "react";
import { Container } from "components";
import Terminals from "svgs/TERMINALS.svg";

const TerminalsHero = () => {
  return (
    <section>
      <Container>
        <div className="md:pt-32 pt-20 pb-14 flex justify-center text-center">
          <Terminals className="max-w-[1000px]" />
        </div>
      </Container>
    </section>
  );
};

export { TerminalsHero };
