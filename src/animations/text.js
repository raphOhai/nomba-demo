import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { IO } from "./observe";

export const split = () => {
  gsap.registerPlugin(ScrollTrigger);

  const f = document.querySelectorAll("[data-animation='h']");
  const g = document.querySelectorAll("[data-animation='v']");
  const j = document.querySelectorAll("[data-animation='j']");
  const ltr = document.querySelectorAll("[data-animation='ltr']");
  const rtl = document.querySelectorAll("[data-animation='rtl']");
  const upBeat = document.querySelectorAll("[data-animation='up-beat']");

  f.forEach(item => {
    gsap.set(item, {
      opacity: 1,
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
      opacity: 1,
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

  rtl.forEach(item => {
    gsap.set(item, {
      autoAlpha: 0,
      opacity: 1,
      xPercent: 100,
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
  ltr.forEach(item => {
    gsap.set(item, {
      autoAlpha: 0,
      opacity: 1,
      xPercent: -100,
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
  j.forEach(item => {
    gsap.set(item, {
      autoAlpha: 1,
      opacity: 0.3,
      yPercent: -50,
      transformStyle: "preserve-3d",
    });
    gsap.to(item, {
      scrollTrigger: {
        trigger: item,
        scrub: 1,
        start: "top 100%",
        end: "+=100px",
      },
      opacity: 1,
      autoAlpha: 1,
      duration: 0.3,
      yPercent: 0,
      ease: "easeInOut",
    });
  });

  upBeat.forEach(item => {
    gsap.set(item, {
      autoAlpha: 1,
      // rotateX: -90,
      yPercent: 10,
      scaleY: 0.5,
      skewX: -20,
      transformStyle: "preserve-3d",
    });

    IO(item).then(
      () => {
        gsap.to(item, {
          autoAlpha: 1,
          yPercent: 0,
          delay: 1,
          stagger: 1,
          scaleY: 1,
          duration: 2,
          skewX: 0,
          // rotateX: 90,
          ease: "easeOut",
        });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "300px",
            scrub: 1,
          },
          skewX: -20,
          duration: 1.5,
        });
      },
      { threshold: 1 }
    );
  });
};
