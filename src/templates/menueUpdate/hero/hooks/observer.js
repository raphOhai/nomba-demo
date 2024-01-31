import { useEffect } from "react";
import { glowLight, removeLight } from "./microAnimation";

export default function InterSectionChecker(trigger, item, className) {
  useEffect(() => {
    const hiddenElements1 = document.getElementById(item);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(
        entry => {
          if (entry.isIntersecting) {
            // action();
            glowLight("glow1", "glow");
            const showPicture = () => {
              hiddenElements1?.classList.add(className);
              //   entry.target.classList.add("show");
            };
            showPicture();
            const removeGlow = () => {
              removeLight("glow1", "glow");
            };

            const fadeOut = () => {
              hiddenElements1?.classList.add("vanish");
            };
            setTimeout(removeGlow, 1000);
            setTimeout(fadeOut, 1200);
          } else {
            removeLight("glow1", "glow");
            const showPicture = () => {
              hiddenElements1?.classList.remove(className);
              //   entry.target.classList.add("show");
            };
            showPicture();
            const removeGlow = () => {
              glowLight("glow1", "glow");
            };

            const fadeOut = () => {
              hiddenElements1?.classList.remove("vanish");
            };
            setTimeout(removeGlow, 1000);
            setTimeout(fadeOut, 1200);
          }
        },
        { threshold: 0.2 }
      );
    });
    const hiddenElements = document.querySelectorAll("." + trigger);

    hiddenElements.forEach(el => observer.observe(el));
  }, []);
}
