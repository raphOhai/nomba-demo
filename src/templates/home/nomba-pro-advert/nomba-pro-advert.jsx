import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PromoButton from "./promo-button/promo-button";
import ButtonSection from "./button-section/button-section";
import ImageSection from "./image-section/image-section";
import ProIntroText from "./pro-intro-text/pro-intro-text";
import { Container } from "components";

const NombaProAdvert = () => {
  return (
    <section className={nombaproadvertStyle}>
      <Container>
        <PromoButton />
        <ProIntroText />
        <ButtonSection />
        <ImageSection />
      </Container>
    </section>
  );
};

// lg:mt-[6.2rem]
const nombaproadvertStyle = ctl(`
text-center
relative
px-0
-mt-[50px]
md:-mt-[130px]
bg-no-repeat
md:bg-bottom
bg-nomba-subtract
bg-center
bg-cover
`);

export default NombaProAdvert;
