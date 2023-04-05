import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext } from "components/ntext";
import { ReadMore } from "components/read-more";

const SolutionCard = ({ illustration, title, description, link }) => {
  return (
    <div className={illustrationCardStyle}>
      <span className={illustrationSpanStyle}>{illustration}</span>
      <div>
        <Ntext variant="text4" color="n-grey1" value={title} />
        <Ntext
          variant="text3"
          color="n-grey1"
          value={description}
          className="mt-3 -mb-2"
        />
        <span className={readmoreSpanStyle}>
          {link && <ReadMore text="Learn more" {...link} />}
        </span>
      </div>
    </div>
  );
};

const illustrationCardStyle = ctl(`
group 
max-w-[430px] 
flex
md:gap-10
gap-7

lg:mb-10
mb-12 
cursor-default  
text-left
illustration
items-start
`);
const illustrationSpanStyle = ctl(`

-mt-5
`);

const readmoreSpanStyle = ctl(`
inline-block
`);

const descriptionBaseStyle = [
  `
  block
  mb-4
  `,
  `
  lg:opacity-0
  lg:group-hover:opacity-100
  lg:h-0
  lg:mb-0
  mb-4
  lg:group-hover:mb-4
  h-auto
  transition-all
  lg:group-hover:h-[65px]
  duration-300`,
];
export { SolutionCard };
