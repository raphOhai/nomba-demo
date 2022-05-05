import React from "react";
import ctl from "@netlify/classnames-template-literals";

import Logo from "svgs/nomba-logo.svg";
import policies from "config/policies.json";

import { NLink } from "components/nlink";
import { Ntext } from "components/ntext";

const Policies = () => {
  const policiesMenu = policies;

  return (
    <div className={policyWrapperStyle}>
      <NLink to="/">
        <Logo className={logoStyle} />
      </NLink>
      <ul className={policyMenuList}>
        {policiesMenu.map((menuItem, index) => {
          return (
            <li key={`policy_menu_${index}`} className={policyMenuListItem}>
              <Ntext variant="p16" color="primary-900">
                <NLink {...menuItem?.link}>{menuItem.title}</NLink>
              </Ntext>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// md:-mt-20
const policyWrapperStyle = ctl(`
flex
flex-col
md:items-start
mt-14
md:text-right
`);

const logoStyle = ctl(`
md:w-[174px]
w-[144px]
`);
const policyMenuList = ctl(`
flex
flex-row
md:justify-start
justify-between
md:mt-6
mt-4
`);

const policyMenuListItem = ctl(`
md:ml-8
ml-1
first:ml-0

`);
export { Policies };
