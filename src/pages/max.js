import React, { useEffect } from "react";
import "style/terminal-page/main.scss";
import { MainFooter } from "components/layout/footer";
import { AppDownload } from "components/layout/footer/app-download";
import {
  TerminalHeader,
  CommonQuestions,
  TerminalSectionInteractions,
  TerminalHero,
  Waitlist,
  ZoomInPos,
  Drag,
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
      <AppDownload />
      <MainFooter />
    </div>
  );
};

export default TerminalPage;
