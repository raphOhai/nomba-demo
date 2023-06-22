import React, { useEffect, useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Container, Ntext, Button, SectionHeader, ReadMore } from "components";
import constants from "config/constants.json";
import iPhoneWithHand from "jpegs/e-menu/section4/page1.png";
import heroVideo from "jpegs/e-menu/hero/hero.mp4";
import { StaticImage } from "gatsby-plugin-image";
import { IO } from "src/animations/observe";

gsap.registerPlugin([ScrollTrigger]);
const EmenuSection4 = ({ headingText, tools }) => {
  const { SIGNUP_URL } = constants;
  const [active, setActive] = useState(0);
  useEffect(() => {
    const dom = document.querySelector(".section-four");
    // const titleText = new SplitType(".section-two-title", { type: "chars" });
    // gsap.set("setion-two-image", {
    //   opacity: 0.5,
    //   yPercent: -100,
    // });
    // gsap.set(titleText.chars, {
    //   fontSize: window.innerWidth > 767 ? "18rem" : "5rem",
    //   opacity: 0,
    //   yPercent: window.innerWidth > 760 ? 200 : 30,
    //   lineHeight: window.innerWidth > 767 ? "6.5rem" : "5.3rem",
    // });
    // gsap.to(titleText.chars, {
    //   scrollTrigger: {
    //     trigger: ".section-two",
    //     start: "top top",
    //     end: "+=1000px",
    //     // scrub: true,
    //     pin: true,
    //   },
    //   yPercent: window.innerWidth > 760 ? 400 : 20,
    //   opacity: 1,
    //   stagger: 0.05,
    //   duration: 0.8,
    //   ease: "power4.out",
    // });
    // IO(dom).then(
    //   () => {

    //   },
    //   { threshold: 1 }
    // );
    const container = gsap.utils.toArray(".section-four-rect-card");
    ScrollTrigger.create({
      trigger: dom,
      start: "center center",
      end: `${dom.offsetHeight} ${container[0].offsetHeight}`,
      pin: true,
    });
    const tl = gsap.timeline();
    container.forEach((element, i) => {
      if (i !== 0) {
        gsap.set(element, { position: "absolute", yPercent: 100 * i, opacity: 0 });
      } else {
        gsap.set(element, { position: "absolute", yPercent: 0 });
      }
      tl.to(element, {
        yPercent: 4 * i,
        stagger: 0.5,
        opacity: 1,
        scrollTrigger: {
          trigger: element,
          markers: true,
          start: "top top",
          scrub: true,
          onScrubComplete() {
            console.log(i);
          },
        },
      }).then(function () {});
      if (i > 0) {
        tl.to(container[i - 1], {
          scrollTrigger: {
            trigger: element,
            markers: true,
            start: "top top",
            scrub: true,
          },
          scale: 0.7 + (i - 1) * 0.1,
          // yPercent: 20 * i
        });
      }
    });
    // gsap.to(container, {
    //   yPercent: 0,
    //   stagger: 0.5,
    //   opacity: 1,
    //   scrollTrigger: {
    //     trigger: dom,
    //     markers: true,
    //     start: "top top",
    //     //   end: "+=6000px",
    //     pin: true,

    //     scrub: true,
    //   },
    // });
    //   } else {
    //     gsap.set(element, { position: "absolute", yPercent: 0 });
    //   }
    // });
  }, [active]);
  return (
    <section class=" bg-n-light relative section-four pb-20">
      <Container className="">
        <SectionHeader>
          <div className="flex flex-row justify-center max-w-[753px] mx-auto pt-10">
            <Ntext variant="text8" color="primary" className="">
              {headingText}
            </Ntext>
          </div>
        </SectionHeader>
        <div className="text-center pb-10">
          {tools.map((t, i) => (
            <div className={`px-5 py-2 inline-flex rounded-full border border-black`}>{t.title}</div>
          ))}
        </div>
        <div className="relative section-four-rect">
          {tools.map((t, i) => (
            <div class={`w-full ${t.color} rounded-[20px] section-four-rect-card section-four-rect-card-${i}`} key={i}>
              <div className="flex md:flex-row flex-col justify-between items-center">
                <div className="flex flex-col gap-[10px] p-10 md:pt-0 md:pl-[60px]">
                  <Ntext variant="text7" color="c-0" className="max-w-[410px]">
                    {t.heading}
                  </Ntext>
                  <Ntext variant="text3" color="c-0" className="max-w-[353px]">
                    {t.description}
                  </Ntext>

                  <div className="md:mt-10 mt-5">
                    <ReadMore
                      className="!font-medium !text-[16px] !text-primary"
                      text="Get Started on menu"
                      color="primary"
                      href={{ url: SIGNUP_URL }}
                    />
                  </div>
                </div>
                <div class="md:min-h-[490px] flex flex-col justify-end mt-[20px] ">{t.image}</div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
const heroButtonsContainer = ctl(`
absolute
md:top-[77%] top-[83%]
w-full
text-center
`);
export { EmenuSection4 };
