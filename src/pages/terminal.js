import React from "react";
import "style/terminal-page/main.scss";
import { TerminalHeader, CommonQuestions, TerminalSectionInteractions, TerminalHero } from "templates/terminal-page";

const TerminalPage = () => {
  return (
    <div className="terminal_wrap">
      <TerminalHeader />
      <TerminalHero />
      <TerminalSectionInteractions />
      <CommonQuestions />
    </div>
  );
};

export default TerminalPage;
