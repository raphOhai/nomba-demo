import React from "react";
import "style/terminal-page/main.scss";
import { TerminalHeader, CommonQuestions } from "templates/terminal-page";

const TerminalPage = () => {
  return (
    <div className="terminal_wrap">
      <TerminalHeader />
      <CommonQuestions />
    </div>
  );
};

export default TerminalPage;
