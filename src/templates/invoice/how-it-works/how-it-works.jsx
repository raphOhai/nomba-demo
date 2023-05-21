import React, { useEffect, useState, useRef } from "react";
import { maxFeatures } from "config/terminal";
import { Container, Ntext, SectionHeader } from "components";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useIsMobile from "hooks/useIsMobile";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { maxTestimonial } from "config/terminal";
// register scrolltrigger
gsap.registerPlugin(ScrollTrigger);

const HowInvoicingWorks = ({ title }) => {
  const isMobile = useIsMobile();
  const [playVideo, setPlayVid] = useState(false);
  const hero_vid = useRef(null);

  useEffect(() => {
    setTimeout(function () {
      let pin = document.querySelector(".how-it-works-image");
      let content = document.querySelector(".how-it-works-content");
      // let g = document.querySelectorAll(".content-card");
      if (window.innerWidth > 760) {
        ScrollTrigger.create({
          trigger: ".how-it-works-image",
          start: "center center",
          end: `${content.offsetHeight} ${pin.offsetHeight}`,
          pin: true,
        });
      }

      // g.forEach(item => {
      //   gsap.set(item, {
      //     opacity: 0.1,
      //     yPercent: 30
      //   });
      //   gsap.to(item, {
      //     scrollTrigger: {
      //       trigger: item,
      //       start: "top 90%",
      //       scrub: true,
      //       end: "+=700px",
      //     },
      //     opacity: 1,
      //     yPercent: 0,
      //     duration: 1,
      //     ease: "easeOut",
      //   });
      // });
    }, 2000);
  });

  const playVid = () => {
    setPlayVid(!playVideo);
  };
  const close = () => {
    setPlayVid(!playVideo);
  };

  return (
    <section className="feature-section2" id="business-types">
      <Container>
        <SectionHeader className="md:max-w-[671px] md:mx-auto  md:text-center mb-5">
          <Ntext variant="h2" className="text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </SectionHeader>
        <div className="flex md:flex-row flex-col md:gap-[100px] gap-[50px] items-end">
          <div className="md:basis-1/2 how-it-works-image">
            <div>
              <StaticImage
                src="../../../assets/images/jpegs/invoice/how-it-works/generate.png"
                alt="How it works"
                width={572}
                height={572}
              />
            </div>
          </div>
          <div className="md:basis-1/2  md:pt-[200px] flex-col justify-end overflow-hidden how-it-works-content">
            <div className="h-[250px] max-w-[455px] flex flex-col justify-end">
              <div>
                <Ntext variant="text9lite" color="primary-100" className="mb-[28px]" data-animation="h">
                  Generate
                </Ntext>
              </div>
              <div>
                <Ntext variant="p16" color="m-light" className="" data-animation="v">
                  Add a product and customer information to create an invoice. Manually set a tax rate or automatically
                  collect sales taxes. Customise your invoice to match your brand. Save your details in the Dashboard so
                  you’re not starting from scratch with each invoice.
                </Ntext>
              </div>
            </div>
            <div className="h-[250px] max-w-[455px] flex flex-col justify-end">
              <div>
                <Ntext variant="text9lite" color="primary-100" className="mb-[28px]" data-animation="h">
                  Generate
                </Ntext>
              </div>
              <div>
                <Ntext variant="p16" color="m-light" className="" data-animation="v">
                  Add a product and customer information to create an invoice. Manually set a tax rate or automatically
                  collect sales taxes. Customise your invoice to match your brand. Save your details in the Dashboard so
                  you’re not starting from scratch with each invoice.
                </Ntext>
              </div>
            </div>
          </div>
        </div>
        {/* <InvoiceTestimonial testimonials={maxTestimonial} headingText="Don’t just take our word for it" /> */}
      </Container>
    </section>
  );
};

export { HowInvoicingWorks };
