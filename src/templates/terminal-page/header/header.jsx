import React from "react";
import Logo from "assets/images/svgs/terminal/logo.svg";
import { Button } from "components/button";
import "./index.scss";
const TerminalHeader = () => {
  return (
    <header className="terminal_header">
      <Logo />
      <Button text="Join the waitlist" size="xsmall" />
    </header>
  );
};

export { TerminalHeader };
