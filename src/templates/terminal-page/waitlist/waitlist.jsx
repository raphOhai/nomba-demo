import React from "react";
import "./index.scss";
import { Button, NLink } from "components";
function Waitlist() {
  return (
    <>
      <div className="d_waitlist">
        <div className="d_waitlist_tr text-center">
          <h1 data-animation="h">Get better, Get Nomba MAX!</h1>
          <p data-animation="p" className="mg_au">
            For better performance and smoother payment solution, Nomba MAX is here for you.
          </p>
          <div className="d_waitlist_tr_input justify-center gap-5  flex-center flex">
            <input type="email" placeholder="Enter Email" />
            <Button text="Join Waitlist" size="xsmall" />
          </div>
        </div>
        <div className="d_waitlist_th">
          <p className="text-center">
            If you have any questions, please contact <NLink href="mailto:support@nomba.com">support@nomba.com </NLink>{" "}
            for help
          </p>
        </div>
      </div>
      <hr />
    </>
  );
}

export { Waitlist };
