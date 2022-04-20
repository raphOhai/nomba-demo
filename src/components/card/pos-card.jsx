import React from "react";
import { Ntext, ReadMore } from "components";

import PosLine from "assets/images/svgs/pos-line.svg";

import ctl from "@netlify/classnames-template-literals";

const PosCard = ({ device, icons, image, isLite, features, link }) => {
  const backgroundColor = isLite ? "bg-primary-200" : "bg-primary";
  const textColor = isLite ? "primary" : "primary-100";
  const iconsGridColumn = isLite ? `grid-cols-3` : "grid-cols-6";
  const featuresGrid = features.length > 4 ? "grid-cols-2" : "grid-cols-1";

  return (
    <section>
      <div className={`${backgroundColor}  ${posCardStyle}`}>
        <PosLine className={posSvgStyle} />
        <header className={posCardHeaderStyle}>
          <Ntext color={textColor} variant="h7" value={device?.type} />

          <div className={`${posTitleIconStyle} ${iconsGridColumn}`}>
            {icons}
          </div>
        </header>
        <div className="mt-[13px]">
          <Ntext variant="h2" value={device?.name} color={textColor} />
          {/* <Ntext variant="h4" value={device?.price} color={textColor} /> */}
          <div className={contentGridStyle}>
            <div>
              <ul className={`${posFeaturesListStyle} ${featuresGrid}`}>
                {features.map((feature, index) => (
                  <li className="mb-1" key={`pos_card_feature_${index}`}>
                    <Ntext variant="p14" color={textColor} className="flex">
                      <span className="inline-block">- &nbsp; </span>{" "}
                      <span className="inline-block">{feature}</span>
                    </Ntext>
                  </li>
                ))}
              </ul>
              <span className={posReadMoreStyle}>
                {/* <ReadMore color={textColor} {...link} /> */}
              </span>
            </div>

            <div className={posImageWrapperStyle}>{image}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const posCardStyle = ctl(`
p-5
sm:p-10 
h-[619px]
max-w-[583px] 
mx-auto
lg:h-[555px] 
overflow-hidden
relative
`);
const posCardHeaderStyle = ctl(`
flex
justify-between
`);
const posTitleIconStyle = ctl(`
grid
md:gap-2
gap
place-items-center 
`);

const contentGridStyle = ctl(`
grid
md:grid-cols-2
md:gap-x-[36px]
md:gap-y-0
gap-y-[36px]
`);

const posFeaturesListStyle = ctl(`
md:block
grid
gap-x-4
mt-[31px]
md:min-h-[240px]
`);

const posReadMoreStyle = ctl(`
inline-block
mt-4
`);
const posImageWrapperStyle = ctl(`
mx-auto 
text-center 
mt-[28px]
md:mt-[72px]
lg:mt-[108px]
xl:mt-[19px]
relative
`);
const posSvgStyle = ctl(`
absolute  
md:right-0
-right-8
bottom-0
`);
export { PosCard };
