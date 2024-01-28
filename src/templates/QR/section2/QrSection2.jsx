import { Button, Container, Ntext } from "components";
import { StaticImage } from "gatsby-plugin-image";

import React from "react";
import Cta from "../CTA/Cta";
import SlideImages from "../slideImages/SlideImages";

const QrSection2 = ({ mainText, subText }) => {
  return (
    <div className="Qr-Section padding-top padding-buttom">
      <Container>
        <div className="stack gap5">
          <Cta
            mainText={"Pay securely through the Nomba QR"}
            subText={
              "Using the Nomba App or the QR card(s) provides you, our customers,with advanced protection during each and every transactions."
            }
          />
          <SlideImages />
        </div>
      </Container>
    </div>
  );
};

export default QrSection2;
