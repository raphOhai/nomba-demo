import { Br, Button, Container, Ntext, ReadMore } from "components";
import React, { useContext } from "react";
import "../styles/index.scss";
import { StaticImage } from "gatsby-plugin-image";
import Glow from "./glowSvgs/glow";
import Glow2 from "./glowSvgs/glow2";
import { TypingAnimation } from "./hooks/typingAnimation";
import { AppContext } from "states/context";

import Rive from "rive-react";
import { useRive } from "@rive-app/react-canvas";
// import mockup from "../../../assets/rives/menu.riv";
const HeroUp = () => {
  const { rive, RiveComponent } = useRive({
    src: "menux.riv",
    stateMachines: "Menu Interaction",
    autoplay: true,
    // animations: "",
  });
  if (rive) {
    console.log(rive.contents);
  }

  TypingAnimation();
  const { onOpen } = useContext(AppContext);
  return (
    <div>
      <div className="heroSection">
        <Container>
          <div className="grid1 shift-Top-desktop padding-buttom">
            <div id="hero-box" className="shift-Top-deskto padding-top">
              <div className="svg-Container2">
                <Glow2 />
              </div>
              <div className="stack gap2">
                <div className="stack gap1">
                  <div className="stack gap2">
                    <Ntext
                      variant="h1"
                      color="primary-100"
                      className="text-center md:text-left md:leading-[20px]"
                      // data-animation="ltr"
                    >
                      <div className="hero-text">
                        Power your <Br on="all" />{" "}
                        <span id="text-output" className="highLighted-text text-output"></span>
                      </div>
                    </Ntext>
                  </div>

                  <Ntext
                    variant="text4lite"
                    color="primary-100"
                    className="text-center md:text-left"
                    data-animation="ltr"
                  >
                    <div className="grey-text">
                      A unified system to process and manage your food <Br on="desktop" /> items, receive payment and
                      streamline operations.
                    </div>
                  </Ntext>
                </div>

                <div className=" hero-btn gap flex elevate2">
                  <div className="hero-btn-grid">
                    <div>
                      <Button
                        onClick={onOpen}
                        className="!font-medium  !text-center responsive-btn btn1"
                        text=""
                        withArrow={true}
                      />
                    </div>
                    <div>
                      <ReadMore
                        className="!font-medium !text-center contact-btn responsive-btn btn2"
                        // color="n-grey6"
                        variant="text3"
                        href={{ url: "tel:+23401888899" }}
                        text="Contact sales"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rive-container flex center">
              <RiveComponent />
            </div>
          </div>
        </Container>
        <div className="svg-Container">
          <Glow />
        </div>
      </div>
    </div>
  );
};

export default HeroUp;
