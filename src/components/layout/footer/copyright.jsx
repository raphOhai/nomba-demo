import React from "react";
import { Ntext } from "../../ntext";
import ctl from "@netlify/classnames-template-literals";

const Copyright = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Ntext variant="p14" className={copyrightStyle}>
      &copy; {year} Nomba, all rights reserved{" "}
    </Ntext>
  );
};

const copyrightStyle = ctl(`
md:mt-0
mt-16
`);
export { Copyright };
