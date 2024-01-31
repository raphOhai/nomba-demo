import React from "react";
import ctl from "@netlify/classnames-template-literals";

import Logo from "svgs/nomba-footer.svg";
import policies from "config/menu/policies.json";

import { NLink } from "components/nlink";
import { Ntext } from "components/ntext";

const Policies = () => {
  const policiesMenu = policies;

  return (
    <div className={policyWrapperStyle}>
      <NLink to="/">
        <Logo className={logoStyle} />
      </NLink>
      <div className="flex items-center justify-between w-full flex-wrap">
        <ul className={policyMenuList}>
          {policiesMenu.map((menuItem, index) => {
            return (
              <li key={`policy_menu_${index}`} className={policyMenuListItem}>
                <Ntext variant="p16" color="primary-200">
                  <NLink {...menuItem?.link}>{menuItem.title}</NLink>
                </Ntext>
              </li>
            );
          })}
        </ul>
        <div className={policyMenuList}>
          <div className="flex flex-col">
            <Ntext variant="p16" color="primary-200" className={policyMenuListItem}>
              Nomba Financial Services Limited
            </Ntext>
            <Ntext variant="p16" color="primary-200" className={policyMenuListItem}>
              (Licensed by the Central Bank of Nigeria)
            </Ntext>
          </div>
        </div>
      </div>
    </div>
  );
};

// md:-mt-20
const policyWrapperStyle = ctl(`
flex
flex-col
md:items-start
mt-[40px]
md:text-right
`);

const logoStyle = ctl(`
md:w-[174px]
w-[144px]
`);
const policyMenuList = ctl(`
flex
flex-row
justify-start
md:mt-6
mt-4
`);

const policyMenuListItem = ctl(`
md:ml-8
ml-4
first:ml-0

`);
export { Policies };
