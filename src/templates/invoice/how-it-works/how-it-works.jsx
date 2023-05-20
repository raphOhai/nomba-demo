import React, { useEffect, useState, useRef } from "react";
import { maxFeatures } from "config/terminal";
import { Container, Ntext } from "components";
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

  useEffect(() => {});

  const playVid = () => {
    setPlayVid(!playVideo);
  };
  const close = () => {
    setPlayVid(!playVideo);
  };

  return (
    <section className="pt-[150px] md:pt-[16rem] feature-section2" id="business-types">
      <Container>
        <div className="md:max-w-[671px] md:mx-auto  md:text-center">
          <Ntext variant="h2" className="md:text-center" color="primary-100" data-animation="h">
            {title}
          </Ntext>
        </div>

        {/* <InvoiceTestimonial testimonials={maxTestimonial} headingText="Don’t just take our word for it" /> */}
      </Container>
    </section>
  );
};

export { HowInvoicingWorks };
