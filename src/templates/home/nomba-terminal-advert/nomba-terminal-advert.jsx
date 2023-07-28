import React from "react";
import PromoButton from "./promo-button/promo-button";
import ButtonSection from "./button-section/button-section";
import ImageSection from "./image-section/image-section";
import TerminalIntroText from "./terminal-intro-text/terminal-intro-text";
import { Container } from "components";

const NombaTerminalAdvert = ({ children }) => {
  return (
    <section className="nomba-max-advert md:bg-bottom">
      <Container className="relative">
        <PromoButton />
        <TerminalIntroText />
        <ButtonSection />
        <ImageSection />
      </Container>
      {children}
    </section>
  );
};

export default NombaTerminalAdvert;
