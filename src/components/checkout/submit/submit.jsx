import React, { useContext, useState } from "react";
import "./index.scss";
import { Button, Br } from "components";
import { AppContext } from "states/context";
import { useMixpanel } from "gatsby-plugin-mixpanel";

function Submit({ isTermsAccepted, data }) {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { onClose, resetInfo } = useContext(AppContext);
  const mixpanel = useMixpanel();
  const submit = () => {
    setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbyTGq_7hiZXf1M86ISh_JkOy4LUX4_DL8xLJE-7w5YzoApp2wI5sDgD5nf4d-3-_EYr0A/exec",
      {
        method: "POST",
        body: JSON.stringify(data),
      }
    )
      .then(res => {
        if (res.ok) {
          setShow(!show);
          mixpanel.track("Mini - checkout - Customer has submited their info", {
            customerData: JSON.stringify(data),
          });
        } else {
        }
      })
      .catch(err => {
        mixpanel.track("Mini - checkout - Error submiting customer info", {
          customerData: JSON.stringify(data),
        });
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const closeModal = e => {
    if (!e.target.classList.contains("waitlist_success")) {
      setShow(!show);
      resetInfo();
      onClose();
    }
  };

  return (
    <>
      <div
        onClick={closeModal}
        onKeyDown={closeModal}
        className={`confirm_bd animate__animated animate__bounceIn ${show && "shew"}`}
      >
        <div className="waitlist_success">
          <svg width="140" height="140" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="70.5" cy="69.5" r="32.5" fill="white" />
            <path
              d="M69.9998 36.6667C51.6332 36.6667 36.6665 51.6334 36.6665 70.0001C36.6665 88.3667 51.6332 103.333 69.9998 103.333C88.3665 103.333 103.333 88.3667 103.333 70.0001C103.333 51.6334 88.3665 36.6667 69.9998 36.6667ZM85.9332 62.3334L67.0332 81.2334C66.5665 81.7001 65.9332 81.9667 65.2665 81.9667C64.5998 81.9667 63.9665 81.7001 63.4998 81.2334L54.0665 71.8001C53.0998 70.8334 53.0998 69.2334 54.0665 68.2667C55.0332 67.3001 56.6332 67.3001 57.5998 68.2667L65.2665 75.9334L82.3998 58.8001C83.3665 57.8334 84.9665 57.8334 85.9332 58.8001C86.8998 59.7667 86.8998 61.3334 85.9332 62.3334Z"
              fill="#11BB00"
            />
            <circle cx="70" cy="70" r="52.5" stroke="#053400" />
            <circle cx="70" cy="70" r="69.5" stroke="url(#paint0_linear_296_528)" />
            <defs>
              <linearGradient id="paint0_linear_296_528" x1="70" y1="0" x2="70" y2="140" gradientUnits="userSpaceOnUse">
                <stop stopColor="#074501" />
                <stop offset="1" stopColor="#032200" />
              </linearGradient>
            </defs>
          </svg>
          <div className="waitlist_success_txt text-center">
            <h1 className="text-balance">
              Thank you for your interest! <br /> Your order has been successfully received and added to our waiting
              list.
            </h1>

            <p>Our sales team will contact you soon</p>
          </div>
        </div>
      </div>
      <div className="my-5 ">
        <Button
          className="!font-medium !text-[16px] !w-full"
          text="Confirm"
          disabled={!isTermsAccepted}
          isLoading={isLoading}
          onClick={() => submit()}
        />
      </div>
      <hr />
      <Br on="desktop" />
      <Br on="desktop" />
    </>
  );
}

export { Submit };
