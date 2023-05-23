import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Ntext, SectionHeader, SliderCard, Container } from "components";

const Resources = ({ title, data }) => {
  return (
    <section className="bg-primary-100">
      <Container>
        <div className={businessWrapperStyle}>
          <SectionHeader className="md:!pt-[10px] !pt-0 pb-[50px] md:pb-[100px]">
            <Ntext variant="h2" className="text-center">
              {title}
            </Ntext>
          </SectionHeader>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
            {data.map((item, i) => (
              <SliderCard
                key={i}
                heading={item.heading}
                image={item.image}
                text={item.text}
                link={item?.link}
                caseStudy={item?.caseStudy}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const businessWrapperStyle = ctl(`

md:pb-20
pb-16
`);
Resources.propTypes = {
  title: PropTypes.node,
  data: PropTypes.object,
};
export { Resources };
