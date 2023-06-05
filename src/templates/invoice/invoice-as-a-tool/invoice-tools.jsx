import React, { useEffect } from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Container, Ntext } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const InvoiceTools = ({ title, invoiceTools }) => {
  useEffect(() => {
    setTimeout(function () {
      let pin = document.querySelector(".invoice-tool-header");
      let content = document.querySelector(".invoice-tool-content");
      let g = document.querySelectorAll(".content-card");
      if (window.innerWidth > 760) {
        ScrollTrigger.create({
          trigger: ".invoice-tool-header",
          start: "center center",
          end: `${content.offsetHeight - 500} ${pin.offsetHeight}`,
          pin: true,
        });
      }

      g.forEach((item, i) => {
        gsap.set(item, {
          opacity: 0.1,
          yPercent: i === 0 ? 30 : 100,
        });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 100%",
            scrub: 1,
            end: "+=900px",
          },
          opacity: 1,
          yPercent: 30,
          duration: 0.7,
          stagger: 1,
          ease: "easeOut",
        });
      });
    }, 2000);
  }, []);

  return (
    <section className="md:py-[150px] py-[50px] bg-c-0">
      <Container>
        <div className={heroTextHeaders}>
          <div className="md:basis-1/2 md:mt-[120px] invoice-tool-header mb-5">
            <div className=" md:max-w-[650px]">
              <Ntext
                variant="h2"
                color="primary-100"
                className="md:basis-3/5 text-center md:text-left"
                data-animation="h"
              >
                {title}
              </Ntext>
            </div>
          </div>

          <div className={containerTools}>
            {invoiceTools.map(inv => (
              <div className={cardWrapParentStyle}>
                <div className={`${cardWrapStyle}`} key={inv.id}>
                  <div className={cardInnerWrapper}>
                    <div className="flex flex-col gap-[30px]">
                      {inv.icon}
                      <Ntext variant="text5" color="primary-100">
                        {inv.title}
                      </Ntext>
                    </div>
                    <div className="">
                      <Ntext variant="text4lite" color="m-light">
                        {inv.description}
                      </Ntext>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
const containerTools = ctl(`
md:basis-1/2 
md:flex 
flex-col 
gap-[36px] 
invoice-tool-content
`);

const heroTextHeaders = ctl(`
md:flex
md:flex-row
flex-col
md:items-start

mb-10
gap-5
`);

const cardWrapStyle = ctl(`
-mt-[10px]
-ml-[10px]
max-w-[429px] 
py-10
min-h-[330px] 
border-n-grey2 
bg-black
border 
rounded-[10px]
`);

const cardWrapParentStyle = ctl(`
max-w-[429px] 

min-h-[330px] 
border-n-grey2 
bg-n-yellow
border 
rounded-[10px] 

content-card 
mx-auto
md:mx-0
mb-[36px] 
md:mb-[100px]
`);

const cardInnerWrapper = ctl(`
flex 
flex-col 
gap-[16px]
justify-around
mx-auto
max-w-[320px]
`);

InvoiceTools.propTypes = {
  title: PropTypes.node,
  invoiceTools: PropTypes.array,
};

export { InvoiceTools };
