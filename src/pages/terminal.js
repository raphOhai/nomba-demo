import React, { useEffect } from "react";
import "style/terminal-page/main.scss";
// import "loconative-scroll/dist/loconative-scroll.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
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
import LoconativeScroll from "loconative-scroll";
import { split } from "animations/text";

const TerminalPage = () => {
  useEffect(() => {
    split();

    new LoconativeScroll({
      smooth: true,
      el: document.querySelector("[data-scroll-container]"),
    });
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
