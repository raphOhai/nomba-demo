import React from "react";
import "style/terminal-page/main.scss";
import {
  TerminalHeader,
  CommonQuestions,
  TerminalSectionInteractions,
  TerminalHero,
  Waitlist,
  Footer,
} from "templates/terminal-page";

const TerminalPage = () => {
  return (
    <div className="terminal_wrap">
      <TerminalHeader />
      <TerminalHero />
      <TerminalSectionInteractions />
      <CommonQuestions />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default TerminalPage;
