import React from "react";
import Consumers from "./icons/consumers";
import { Ntext } from "components";
import Businesses from "./icons/businesses";

const SwitchBox = () => {
  return (
    <div className="switch-box ">
      <div className="grid1">
        <div>
          <div className="switch-container">
            <div className="bas-grid">
              <div className="flex gap2 switch-tabs-active">
                <div className="flex center">
                  <Consumers />
                </div>
                <div>
                  <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
                    <div className="switch-text"> For consumers</div>
                  </Ntext>
                </div>
              </div>
              <div className="end ">
                <div className="flex gap2 switch-tabs-inactive">
                  <div className="flex center">
                    <Businesses />
                  </div>
                  <div>
                    <Ntext variant="h4" color="primary-100" className="text-center" data-animation="ltr">
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
    </div>
  );
};

export default SwitchBox;
