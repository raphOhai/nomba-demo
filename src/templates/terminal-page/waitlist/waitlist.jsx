import React, { useState } from "react";
import "./index.scss";
import { Button, NLink, Br } from "components";

function Waitlist() {
  const [show, setShow] = useState(false);
  const submit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch(
      "https://script.google.com/macros/s/AKfycbw6XUBUMiolMoNjfZkycUXmtL2F97slRyL6D9FNlt2c7t9lOxFPCR3-Nd4i60LGFHn06w/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then(res => {
        if (res.ok) {
          setShow(!show);
          e.target.reset();
        } else {
        }
      })
      .catch(err => console.log(err));
  };

  const closeModal = e => {
    if (!e.target.classList.contains("waitlist_success")) {
      setShow(!show);
    }
  };

  return (
    <>
      <div onClick={closeModal} className={`confirm_bd animate__animated animate__bounceIn ${show && "shew"}`}>
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
            <h1>
              We’ve added you to our <Br on="desktop" /> waiting list!
            </h1>
            <p>
              Kindly check your email to know when the Nomba MAX <Br on="desktop" /> terminal is out for sale
            </p>
          </div>
        </div>
      </div>

      <div className="d_waitlist" id="waitlist">
        <div className="d_waitlist_tr text-center">
          <h1 data-animation="h">Get better, Get Nomba MAX!</h1>
          <p data-animation="p" className="mg_au">
            For better performance and smoother payment solution, Nomba MAX is here for you.
          </p>
          <form onSubmit={submit} className="d_waitlist_tr_input justify-center gap-5  flex-center flex">
            <input required name="Email" type="email" placeholder="Enter Email" />
            <Button type="submit" text="Join Waitlist" size="xsmall" />
          </form>
        </div>
        <div className="d_waitlist_th">
          <p className="text-center">
            If you have any questions, please contact <NLink href="mailto:support@nomba.com">support@nomba.com </NLink>{" "}
            for help
          </p>
        </div>
      </div>
      <hr />
      <Br on="desktop" />
      <Br on="desktop" />
    </>
  );
}

export { Waitlist };
