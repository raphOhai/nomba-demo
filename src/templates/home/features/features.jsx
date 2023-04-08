import React from "react";
import PropTypes from "prop-types";
import { homepageSliderData } from "config/slider/homepage";

import { Slider, SectionHeader, Ntext, Container } from "components";

const HomepageFeatures = ({ title }) => {
  return (
    <div className="md:mt-8">
      <Container>
        {title && (
          <SectionHeader className="!text-left !-mr-2">
            <Ntext variant="h2">{title}</Ntext>
          </SectionHeader>
        )}
      </Container>
      <Slider slides={homepageSliderData} />
    </div>
  );
};

HomepageFeatures.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node, PropTypes.element]),
};
export { HomepageFeatures };
