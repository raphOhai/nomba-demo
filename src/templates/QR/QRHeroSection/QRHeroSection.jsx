import React from "react";

import "../styles/index.scss";
import { Br, Container, Ntext } from "components";
import { StaticImage } from "gatsby-plugin-image";
import SwitchBox from "./tabSwitch/switch";
import ScrollContent from "./scrollContent/ScrollContent";

const QRHeroSection = () => {
  return (
    <div className=" Qr-hero-section">
      <Container>
        <div className="grid1 padding-buttom">
          <div>
            <div className="stack gap1 padding-top">
              <Ntext
                variant="h1"
                color="primary-100"
                className="text-center md:text-left "
                // data-animation="ltr"
              >
                <div className="Qr-hero-main-text">
                  Pay with QR – <Br on="mobile" /> Quicker & Easier.
                </div>
              </Ntext>

              <Ntext variant="text4lite" color="primary-100" className="text-center md:text-left">
                <div className="grey-text">
                  Nomba makes money matters and running businesses easier. With <Br on="desktop" /> our POS terminals to
                  receive payment and business tools to manage better.
                </div>
              </Ntext>

              <div className="flex gap2">
                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/appStore.svg"
                  className=""
                  // width={230}
                />

                <StaticImage
                  alt="Iphone with hand"
                  src="../../../assets/images/svgs/playStore.svg"
                  className=""
                  // width={230}
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
      <ScrollContent />
    </div>
  );
};

export default QRHeroSection;
