import { Br, Ntext } from "components";
import React from "react";
import TerminalFeatures from "./terminalFeatures";

const Section1 = () => {
  return (
    <div className="main-menue-Box ">
      <div className="stack gap3 padding-top pb-10 ">
        <div className="stack gap1 flex center default-padding pt-10 shift-Top-deskto pb-10 ">
          <Ntext variant="h6" className="text-center">
            <div id="" className=" grey-text all-in-one-text">
              ALL-IN-ONE TOOL
            </div>
          </Ntext>
          <Ntext variant="h1" color="primary-100" className="text-center">
            <div className="hero- pos-moc">
              Built for you – and <Br on="desktop" /> your customers
            </div>
          </Ntext>
          <Ntext variant="text4lite" color="primary-100" className="text-center">
            <div className="grey-text  pos-moc">
              Improve your customer experience, increase productivity <Br on="desktop" /> and automate tasks with Nomba
              Menu.
            </div>
          </Ntext>
        </div>

        <div>
          <TerminalFeatures />
        </div>
      </div>
    </div>
  );
};

export default Section1;
