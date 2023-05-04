import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { NLink } from "components";

const DownloadButton = ({ url, trackingText, children }) => {
  return (
    <NLink href={{ url: url }} trackingText={trackingText} className={buttonStyle}>
      {children}
    </NLink>
  );
};

const buttonStyle = ctl(`
  flex
  items-center
  justify-center
  gap-[10px]
  text-primary-100
  lg:text-[18px]
  text-[15px]
  py-3 lg:py-4
  lg:w-[174px] w-[147px]
  rounded-[26px]
  bg-primary-1000
`);

export { DownloadButton };
