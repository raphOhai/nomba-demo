import { Br, Container, Ntext } from "components";
import React from "react";
import Section3Grid from "./section3Grid";

const HomePageSection3 = () => {
  return (
    <div className="home-page-section3-root padding-top">
      <Container>
        <div className="stack gap3">
          <div className="main-box padding-top ">
            <div className="padding-top">
              <Ntext variant="h4" color="primary-100" className="text-left">
                <div className="intro-text-section3">
                  Find everything you need. <Br on="all" /> Everything for your business.
                </div>
              </Ntext>
            </div>
          </div>

          <Section3Grid />
        </div>
      </Container>
    </div>
  );
};

export default HomePageSection3;
