import React, { useEffect, useState, useMemo } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, NLink, Ntext } from "components";

import constants from "config/constants.json";

const { FETCH_ROLES_URL } = constants;

const ApplyForJob = ({ role }) => {
  return (
    <section id="apply-for-job" className="bg-white">
      <Container className={wrapperStyle}>
        <Ntext
          className="!leading-[80px] !-tracking-[1.92px] text-center"
          value="Apply for Job"
          variant="h2"
        />
      </Container>
    </section>
  );
};

const wrapperStyle = ctl(`
  flex
  flex-col
  bg-white
  pb-[100px]
  pt-8
`);

export { ApplyForJob };
