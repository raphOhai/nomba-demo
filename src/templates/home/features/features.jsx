import React from "react";
import PropTypes from "prop-types";
import { homepageSliderData } from "config/slider/homepage";

import { Slider, SectionHeader, Ntext, Container } from "components";

const HomepageFeatures = ({ title }) => {
  return (
    <div className="">
      <Container>
        {title && (
          <SectionHeader className="!text-left">
            <Ntext variant="h3">{title}</Ntext>
          </SectionHeader>
        )}
      </Container>
      <Slider slides={homepageSliderData} />;
    </div>
  );
};

HomepageFeatures.propTypes = {
  title: PropTypes.oneOf([PropTypes.string, PropTypes.node, PropTypes.element]),
};
export { HomepageFeatures };
