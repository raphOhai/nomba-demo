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

      g.forEach(item => {
        gsap.set(item, {
          opacity: 0.1,
          yPercent: 30,
        });
        gsap.to(item, {
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            scrub: true,
            end: "+=700px",
          },
          opacity: 1,
          yPercent: 0,
          duration: 1,
          ease: "easeOut",
        });
      });
    }, 2000);
  }, []);

  return (
    <section className="md:py-[150px] py-[50px] bg-primary">
      <Container>
        <div className={heroTextHeaders}>
          <div className="md:basis-1/2 md:mt-[120px] invoice-tool-header mb-5">
            <div className=" md:max-w-[485px]">
              <Ntext variant="h2" color="primary-100" className="md:basis-3/5 text-center" data-animation="h">
                {title}
              </Ntext>
            </div>
          </div>

          <div className={containerTools}>
            {invoiceTools.map(inv => (
              <div className={cardWrapStyle} key={inv.id}>
                <div className={cardInnerWrapper}>
                  <div className="flex flex-col gap-[30px]">
                    {inv.icon}
                    <Ntext variant="text4" color="primary-100">
                      {inv.title}
                    </Ntext>
                  </div>
                  <div className="">
                    <Ntext variant="p16" color="m-light">
                      {inv.description}
                    </Ntext>
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
max-w-[345px] 
overflow-hidden 
h-[289px] 
border-n-grey2 
border 
rounded-[10px] 
py-10 
content-card 
mx-auto
mb-[36px] 
md:m-0
`);

const cardInnerWrapper = ctl(`
flex 
flex-col 
gap-[16px]
justify-around
mx-auto
max-w-[280px]
`);

InvoiceTools.propTypes = {
  title: PropTypes.node,
  invoiceTools: PropTypes.array,
};

export { InvoiceTools };