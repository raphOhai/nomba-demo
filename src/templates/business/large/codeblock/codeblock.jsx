import React from "react";
import { Ntext, Container, ReadMore } from "components";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";

const CodeBlock = ({ data }) => {
  return (
    <div className="bg-primary">
      <Container className={sectionHeadeWrapper}>
        <div className={textSectionWrapper}>
          <Ntext variant="h3" color="n-light">
            {data.headline}
          </Ntext>
          <Ntext
            value={data.description}
            variant="p18"
            className="mt-4 max-w-[533px]"
            color="n-light"
          />
          <ReadMore {...data.link} color="n-yellow" />
        </div>
        {data.image}
      </Container>
    </div>
  );
};
const sectionHeadeWrapper = ctl(`
gap-6 md:gap-20 flex flex-col-reverse md:flex-row-reverse md:items-start justify-end md:py-20 pt-20 pb-12
`);

const textSectionWrapper = ctl(`
flex flex-col md:h-[345px]  justify-end  gap-10 items-start
`);

CodeBlock.propTypes = {
  data: PropTypes.object,
};
export { CodeBlock };
