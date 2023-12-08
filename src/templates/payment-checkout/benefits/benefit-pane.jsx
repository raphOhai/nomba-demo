import React, { useContext } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext } from "components";

import "./index.scss";

const BenefitPane = ({ description, title, tint, icon }) => {
  return (
    <section className={paneStyle}>
      <aside className="relative bg-[#4D4D4D] w-[2px] h-full">
        <article className={`absolute ${tint} top-0 w-full h-16 z-10`} />
      </aside>
      <section className="flex flex-col w-full h-full">
        {icon}
        <Ntext
          color="primary-100"
          className="!-tracking-[0.8px] mt-8"
          variant="text5"
          value={title}
        />
        <Ntext
          color="primary-600"
          value={description}
          className="!font-normal !-tracking-[0.8px] w-full mt-4"
          variant="text5"
        />
      </section>
    </section>
  );
};

const paneStyle = ctl(`
  flex
  space-x-8
  h-[304px]
  pane
  pt-2
`);

export { BenefitPane };
