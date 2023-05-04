import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IO } from "./observe";
gsap.registerPlugin(ScrollTrigger);

export const split = () => {
  const f = document.querySelectorAll("[data-animation='h']");
  const g = document.querySelectorAll("[data-animation='v']");

  f.forEach(item => {
    gsap.set(item, {
      autoAlpha: 0,
      yPercent: 50,
      transformStyle: "preserve-3d",
    });
    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          yPercent: 0,
          duration: item.length > 100 ? 0.7 : 0.6,
          ease: "easeOut",
        });
      },
      { threshold: 1 }
    );
  });

  g.forEach(item => {
    gsap.set(item, {
      autoAlpha: 0,
      xPercent: 50,
      transformStyle: "preserve-3d",
    });
    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          xPercent: 0,
          duration: 1,
          ease: "easeOut",
        });
      },
      { threshold: 1 }
    );
  });
};
