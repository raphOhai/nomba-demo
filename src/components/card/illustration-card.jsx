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
      <Ntext variant="p16" color="n-grey1" value={description} className={descriptionStyle} />
      <span className={readmoreSpanStyle}>{link && <ReadMore text="See how it works" {...link} />}</span>
    </div>
  );
};

const illustrationCardStyle = ctl(`
group 
max-w-[390px] 
lg:min-h-[200px]
lg:mb-0
mb-3 
cursor-default  
text-center
justify-center
illustration
`);
const illustrationSpanStyle = ctl(`
w-[50px]
inline-block
mb-[20px]
text-center
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
