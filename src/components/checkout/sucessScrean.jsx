import { Button } from "components/button";
import Confetti from "components/confetti/confetti";
import { Ntext } from "components/ntext";
import React, { useContext, useEffect } from "react";
import { AppContext } from "states/context";

import Check from "../../assets/images/svgs/check-circle.svg";

const SucessScrean = () => {
  const { closeAndReset } = useContext(AppContext);
  const [showConfetti, setShowConfetti] = React.useState(false);
  useEffect(() => {
    const trigger = "yoo";
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entry => {
          if (entry.isIntersecting) {
            setShowConfetti(true);
          } else {
          }
        },
        { threshold: 0.2 }
      );
    });
    const hiddenElements = document.querySelectorAll("." + trigger);

    hiddenElements.forEach(el => observer.observe(el));
  }, []);
  return (
    <div className="sucess-box flex center">
      <Confetti run={showConfetti} />
      <div className="stack gap4">
        <div className="stack gap-3 inner-box">
          <div className="flex center">
            <div className="circle flex center">
              <Check />
            </div>
          </div>
          <Ntext variant="h4" className="text-center">
            <div style={{ color: "#fff", fontSize: "20px" }}>Request sent!</div>
          </Ntext>
          <Ntext variant="text3" className="text-center yoo">
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
