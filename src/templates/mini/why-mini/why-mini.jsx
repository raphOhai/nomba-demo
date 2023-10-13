import React, { useRef, useLayoutEffect } from "react";
import { Ntext } from "components";

import ctl from "@netlify/classnames-template-literals";
import BusinessVid from "assets/images/jpegs/mini/backgroundMini.mp4";
import gsap from "gsap";
import { IO } from "animations/observe";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const WhyMini = () => {
  const vid = useRef(null);
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: comp.current,
        start: "top top", // if it's shorter than the viewport, we prefer to pin it at the top
        pin: true,
        end: "+=1000",
        // pinSpacing: false,
        // onToggle: self => self.isActive && setSection(panel, i),
      });
      IO(comp.current).then(
        () => {
          setTimeout(() => {
            vid.current.play();
          }, 1200);
        },
        {
          threshold: 1,
        }
      );
    });
    return () => ctx.revert();
  });

  return (
    <section
      ref={comp}
      className="bg-black md:min-h-[100vh]  flex flex-col justify-center items-center relative why-mini"
    >
      <div className=" w-full">
        <div className="flex md:flex-row flex-col justify-center items-center ">
          <div className="">
            <video
              src={BusinessVid}
              controls={false}
              muted
              playsInline
              className="opacity-40 w-full h-[100vh]"
              loop
              ref={vid}
              width={1440}
              height={808}
            ></video>
          </div>
          <div className="absolute">
            <div className="flex  flex-col  mt-10   rounded-md">
              <div className=" md:p-0 p-5">
                <Ntext variant="text9" color="primary-100" data-animation="h">
                  Nomba Mini
                </Ntext>
              </div>
              <div className="max-w-[972px] md:p-0 p-5">
                <Ntext variant="text6lite" color="primary-100" className="!font-[400]" data-animation="h">
                  Running a business is not easy but with your payment padi you can enjoy more sales, NO targets and
                  wahala free payment!
                </Ntext>
              </div>
              <div className="flex flex-row  mt-[50px] gap-[20px] md:gap-[50px] md:justify-start justify-center ">
                <div className="">
                  <div className="text-[16px] text-n-light"></div>
                  <div>
                    <Ntext variant="text8" color="primary-100" data-animation="h">
                      2.4
                    </Ntext>
                  </div>
                  <div className="text-[14px] font-semibold w-[127px] text-n-light">inch HD</div>
                </div>
                <div className="">
                  <div className="text-[16px] text-n-light"></div>
                  <div>
                    <Ntext variant="text8" color="primary-100" data-animation="h">
                      32MB
                    </Ntext>
                  </div>
                  <div className="text-[14px] font-semibold w-[127px] text-n-light">RAM</div>
                </div>
                <div className="">
                  <div className="text-[16px] text-n-light"></div>
                  <div>
                    <Ntext variant="text8" color="primary-100" data-animation="h">
                      3.7V
                    </Ntext>
                  </div>
                  <div className="text-[14px] font-semibold w-[127px] text-n-light">1400mAh battery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WhyMini };
