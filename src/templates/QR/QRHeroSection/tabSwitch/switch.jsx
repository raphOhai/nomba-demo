import React from "react";
import Consumers from "./icons/consumers";
import { Container, Ntext } from "components";
import Businesses from "./icons/businesses";
import ConsumersIcon from "./icons/consumers";

const SwitchBox = () => {
  return (
    <div className="switch-box ">
      <Container>
        <div className="grid1">
          <div>
            <div className="switch-container">
              <div className="bas-grid">
                <div className="flex gap-2 switch-tabs-active">
                  <div className="flex center hide-mobile-flex">
                    <ConsumersIcon />
                  </div>
                  <div>
                    <Ntext variant="h4" color="primary-100" className="text-center">
                      <div className="switch-text"> For consumers</div>
                    </Ntext>
                  </div>
                </div>
                <div className="end ">
                  <div className="flex gap-2 switch-tabs-inactive">
                    <div className="flex center hide-mobile-flex">
                      <BusinessesIcon />
                    </div>
                    <div>
                      <Ntext variant="h4" color="primary-100" className="text-center">
                        <div className="switch-text">For Business</div>
                      </Ntext>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </div>
  );
};

export default SwitchBox;
