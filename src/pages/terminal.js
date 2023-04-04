import React from "react";
import "style/terminal-page/main.scss";
import {
  TerminalHeader,
  CommonQuestions,
  TerminalHero,
} from "templates/terminal-page";

const TerminalPage = () => {
  return (
    <div className="terminal_wrap">
      <TerminalHeader />
      <TerminalHero />
      {/* <CommonQuestions /> */}
    </div>
  );
};

export default TerminalPage;
