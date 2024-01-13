import { Button } from "components/button";
import { Ntext } from "components/ntext";
import React, { useContext } from "react";
import { AppContext } from "states/context";

const SucessScrean = () => {
  const { closeAndReset } = useContext(AppContext);
  return (
    <div className="sucess-box flex center">
      <div className="stack gap3">
        <div className="stack gap-2">
          <Ntext variant="h4" className="text-center">
            <div style={{ color: "#fff" }}>Request sent!</div>
          </Ntext>
          <Ntext variant="text3" className="text-center">
            <div style={{ color: "#717171" }}>
              Thank you for your interest! Your demo request has been received We would get back to you as soon as
              possible via your email or phone number.
            </div>
          </Ntext>
        </div>

        <Button
          onClick={closeAndReset}
          className="!font-medium  !text-center contact-btn2 responsive-btn btn2"
          text="Got it!"
        />
      </div>
    </div>
  );
};

export default SucessScrean;
