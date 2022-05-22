import React from "react";
import ctl from "@netlify/classnames-template-literals";

import { Ntext } from "components/ntext";
import { ReadMore } from "components/read-more";

const IllustrationCard = ({ illustration, title, description, link }) => {
  // There is an array for the description style below which determine styles to be applied to the description based on if there is a link or not.
  const descriptionStyleIndex = Number(Boolean(link));
  const descriptionStyle = ctl(`
    mt-2
    ${descriptionBaseStyle[descriptionStyleIndex]}
    `);
  return (
    <div className={illustrationCardStyle}>
      <span className={illustrationSpanStyle}>{illustration}</span>
      <Ntext variant="h5" color="primary-100" value={title} />
      <Ntext
        variant="p14"
        color="primary-100"
        value={description}
        className={descriptionStyle}
      />
      <span className={readmoreSpanStyle}>
        {link && <ReadMore text="See how it works" {...link} />}
      </span>
    </div>
  );
};

const illustrationCardStyle = ctl(`
group 
max-w-[235px] 
lg:min-h-[300px]
lg:mb-0
mb-12 
cursor-default 
lg:text-left 
text-center
illustration
`);
const illustrationSpanStyle = ctl(`
w-[133px]
inline-block
mb-[40px]
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
export { IllustrationCard };
