import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, NLink, Ntext } from "components";

import WhiteChevronRight from "svgs/white-chevron-right.svg";

const RoleDetails = ({ role }) => {
  return (
    <Container className={wrapperStyle}>
      <section className={navStyle}>
        <NLink href={{ url: "/careers" }}>
          <Ntext variant="p14" color="secondary-100" value="Careers" />
        </NLink>
        <WhiteChevronRight />
        <Ntext
          color="secondary"
          value="View available roles"
          variant="p14"
        />
      </section>
      <Ntext
        color="primary-100"
        value="Get your Career Started with Nomba"
        className="max-w-[768px] !leading-[80px] !-tracking-[2.56px] my-5"
        variant="h1"
      />
      <Ntext
        value="Join us in building tools that simplify payments and drive business growth."
        variant="text4lite"
        color="n-grey1"
      />
      <section className={infoAreaStyle}>
        <aside className={asideStyle}>
        </aside>
        <section className={infoBoardStyle}>
        </section>
      </section>
    </Container>
  );
};
const infoBoardStyle = ctl(`
  flex
  flex-col
  w-full
`);

const infoAreaStyle = ctl(`
  flex
  mt-[94px]
  items-start
  w-full
`);

const wrapperStyle = ctl(`
  flex
  flex-col
  py-[108px]
`);

const asideStyle = ctl(`
  min-w-[280px]
  lg:flex-col
  lg:flex
  hidden
  mr-6
`);

const navStyle = ctl(`
  flex
  space-x-2.5
  items-center
`);

export { RoleDetails };
