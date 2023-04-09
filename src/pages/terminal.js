import React, { useEffect } from "react";
import "style/terminal-page/main.scss";
import {
  TerminalHeader,
  CommonQuestions,
  TerminalSectionInteractions,
  TerminalHero,
  Waitlist,
  ZoomInPos,
  Drag,
  Footer,
} from "templates/terminal-page";
import { split } from "animations/text";

const TerminalPage = () => {
  useEffect(() => {
    split();
  });
  return (
    <div className="terminal_wrap" data-scroll-container>
      <TerminalHeader />
      <TerminalHero />
      <ZoomInPos />
      <TerminalSectionInteractions />
      <CommonQuestions />
      <Drag />
      <Waitlist />
      <Footer />
    </div>
  );
};

export default TerminalPage;
