import React, { useEffect } from "react";
import { Container, Ntext } from "components";
import { BoxSlider } from "./box-slider";
const WhatsInTheBox = ({ title, InTheBox }) => {
  return (
    <section className="md:pt-[50px] feature-section4">
      <Container>
        <div className="md:max-w-[671px] md:mx-auto section_header4 md:text-center">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>
      </Container>
      <div className="pt-[50px] md:pt-[100px]">
        <BoxSlider slides={InTheBox} />
      </div>
    </section>
  );
};
export { WhatsInTheBox };
