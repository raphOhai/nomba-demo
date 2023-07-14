import React, { useRef, useEffect } from "react";
import { Container } from "components";
import { StaticImage } from "gatsby-plugin-image";
import { SponsorList } from "./sponsorsList";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIsMobile from "hooks/useIsMobile";

gsap.registerPlugin(ScrollTrigger);

const TerminalSectionInteractions = () => {
  const skeleton = useRef(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      const observer = new window.IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            observer.disconnect();
          }
        });
      });
      observer.observe(skeleton.current);
    }
  }, [skeleton, isMobile]);

  useEffect(() => {
    gsap.set(".img_2", {
      opacity: 0,
    });
    gsap.to(".img_2", {
      scrollTrigger: {
        trigger: ".c_terminal_sectInt_paySol",
        start: "top 80%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        end: "=+500px",
      },
      opacity: 1,
      xPercent: 0,
      yPercent: 0,
      duration: 1.5,
      ease: "easeOut",
    });

    gsap.to(".img_1", {
      scrollTrigger: {
        trigger: ".c_terminal_sectInt_paySol",
        start: "top 80%",
        scrub: true,
        toggleActions: "play reverse play reverse",
        end: "=+100px",
      },
      opacity: 0,
      xPercent: 0,
      yPercent: 0,
      duration: 0.6,
      ease: "easeOut",
    });
  });

  return (
    <section>
      <Container>
        <div className="c_terminal_sectInt">
          <div className="c_terminal_sectInt_paySol">
            <div ref={skeleton} className={` img_1 img `}>
              <StaticImage src="../../../assets/images/svgs/terminal/sideways-skeleton.svg" alt="" />
            </div>
            <div className={` img_2 img`}>
              <StaticImage alt="" src="../../../assets/images/svgs/terminal/sideways.png" />
            </div>
          </div>
          <div>
            <SponsorList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export { TerminalSectionInteractions };
