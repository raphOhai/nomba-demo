import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PromoButton from "./promo-button/promo-button";
import ButtonSection from "./button-section/button-section";
import ImageSection from "./image-section/image-section";
import MaxIntroText from "./max-intro-text/max-intro-text";
import MaxFeatures from "./max-features/max-features";
import { Container } from "components";

const NombaProAdvert = () => {
  return (
    <section className="nomba-max-advert md:bg-bottom">
      <Container className="relative">
        <PromoButton />
        <MaxIntroText />
        <ButtonSection />
        <ImageSection />
      </Container>
      <MaxFeatures />
    </section>
  );
};

export default NombaProAdvert;
