import React from "react";
import ctl from "@netlify/classnames-template-literals";
import PropTypes from "prop-types";
import { Ntext } from "components";
import { Sponsors } from "./sponsorsList";

const SponsorList = ({ title }) => {
  return (
    <section className={heroStyle}>
      <div className={heroTextWrapperStyle}>
        <Ntext
          variant="text9lite"
          color="primary"
          className="mb-[28px] opacity-0 text-center !font-[600]"
          data-animation="h"
        >
          {title}
        </Ntext>
      </div>
      <Sponsors />
    </section>
  );
};

// pb-[120px]
const heroStyle = ctl(`
md:pt-[150px]
md:pb-[100px]
bg-n-yellow1
pt-[50px]
`);

const heroTextWrapperStyle = ctl(`
lg:max-w-[940px]
lg:mx-auto
max-w-[100%]
lg:mb-[80px]
`);

SponsorList.propTypes = {
  title: PropTypes.node,
};

export { SponsorList };
