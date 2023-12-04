import React from "react";
import parse from "html-react-parser";
import ctl from "@netlify/classnames-template-literals";

import { Container, Button, NLink, Ntext } from "components";

import WhiteChevronRight from "svgs/white-chevron-right.svg";
import ShareIcon from "svgs/share.svg";

import "./index.scss";

const RoleDetails = ({ role }) => {
  const handleShare = () => {
    
  }

  return (
    <Container className={wrapperStyle}>
      <section className={navStyle}>
        <NLink href={{ url: "/careers" }}>
          <Ntext variant="p14" color="secondary-100" value="Careers" />
        </NLink>
        <WhiteChevronRight />
        <NLink href={{ url: "/careers/roles" }}>
          <Ntext variant="p14" color="secondary-100" value="View available roles" />
        </NLink>
        <WhiteChevronRight />
        <Ntext
          color="secondary"
          value={role.title}
          className="cursor-pointer"
          variant="p14"
        />
      </section>
      <Ntext
        value={role.title}
        color="primary-100"
        className="!leading-[80px] !-tracking-[1.92px] mt-5"
        variant="h2"
      />
      <section className={detailsAreaStyle}>
        <aside className={asideStyle}>
          <Button
            className="!font-medium !text-sm !min-w-[104px] !h-10"
            href="#apply-for-job"
            text="Apply here"
          />
          <button
            className={shareButtonStyle}
            onClick={handleShare}>
            <Ntext
              color="primary-100"
              value="Share this role"
              className="!font-medium"
              variant="text2"
            />
            <ShareIcon />
          </button>
        </aside>
        <section className={detailsBoardStyle}>{parse(role.markup)}</section>
      </section>
    </Container>
  );
};

const detailsBoardStyle = ctl(`
  flex
  role-details
  !-tracking-[0.32px]
  !leading-10
  !text-white
  flex-col
  w-full
`);

const shareButtonStyle = ctl(`
  flex
  border
  bg-black
  border-solid
  cursor-pointer
  border-n-charcoal
  rounded-[5px]
  items-center
  space-x-2.5
  px-4
  py-2
`);

const detailsAreaStyle = ctl(`
  flex
  mt-[72px]
  w-full
`);

const wrapperStyle = ctl(`
  flex
  flex-col
  pt-[108px]
  pb-16
`);

const asideStyle = ctl(`
  hidden
  lg:flex
  lg:space-x-5
  min-w-[356px]
  items-start
  mr-[72px]
`);

const navStyle = ctl(`
  flex
  space-x-2.5
  items-center
`);

export { RoleDetails };
