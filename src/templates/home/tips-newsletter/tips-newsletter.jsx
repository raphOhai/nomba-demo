import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Newsletter, TipsAndUpdates } from "components";

const HomepageTipsAndNewsletter = () => {
  return (
    <section className={tipsAndNewsLetterWrapperStyle}>
      <TipsAndUpdates />
      <Newsletter />
    </section>
  );
};

const tipsAndNewsLetterWrapperStyle = ctl(`
bg-primary-200 
pb-24
`);

export { HomepageTipsAndNewsletter };
