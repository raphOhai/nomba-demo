import React from "react";
import Logo from "assets/images/svgs/terminal/logo.svg";
import { Button } from "components/button";
import "./index.scss";
const TerminalHeader = () => {
  return (
    <header className="terminal_header">
      <Logo />
      <Button text="Join the waitlist" size="xsmall" />
      <div className="cta">
        <p>Join the waitlist</p>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.93994 13.28L10.2866 8.9333C10.7999 8.41997 10.7999 7.57997 10.2866 7.06664L5.93994 2.71997"
            stroke="#FFCC00"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </header>
  );
};

export { TerminalHeader };
