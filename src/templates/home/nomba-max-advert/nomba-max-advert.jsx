import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PromoButton from "./promo-button/promo-button";
import ButtonSection from "./button-section/button-section";
import ImageSection from "./image-section/image-section";
import MaxIntroText from "./max-intro-text/max-intro-text";
import { Container } from "components";

const NombaProAdvert = ({ children }) => {
  return (
    <section className="nomba-max-advert md:bg-bottom">
      <Container className="relative">
        <PromoButton />
        <MaxIntroText />
        <ButtonSection />
        <ImageSection />
      </Container>
      {children}
    </section>
  );
};

export default NombaProAdvert;
