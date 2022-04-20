import React from "react";
import { homepageSliderData } from "config/slider/homepage";

import { Slider } from "components";

const HomepageFeatures = () => {
  return (
    <div className="md:py-20 py-9">
      <Slider slides={homepageSliderData} />;
    </div>
  );
};

export { HomepageFeatures };
