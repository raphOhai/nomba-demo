import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, ReadMore, Container } from "components";
import { businessTypesData } from "config/home";
import { useState } from "react";
function BusinessTypes() {
  const [activeType, setActiveType] = useState(businessTypesData[0]);
  return (
    <Container className={wrapperFeature}>
      <Ntext variant="h3" color="c-dark" className="text-left">
        Built to simplify any business <Br on="all" />
        type and size
      </Ntext>
      <div className="flex flex-row justify-between mt-[50px] md:mt-[100px]">
        <div className="md:basis-1/2 flex flex-col gap-10 md:max-w-[514px]">
          {businessTypesData.map((b, i) => (
            <div className="" onMouseEnter={() => setActiveType(b)}>
              <ReadMore
                text={b.title}
                color={b === activeType ? "n-grey6" : "n-grey3"}
                active={b === activeType}
                variant="text5"
                href={b.link}
              />
              <div className="md:hidden">{b.images}</div>
              {/* sub text */}
              <div className="mt-4">
                <Ntext variant="text3" className="c-0 cursor-pointer">
                  {b.description}
                </Ntext>
              </div>
            </div>
          ))}
        </div>

        {/** images */}
        <div className="hidden md:block md:basis-1/2 transition-all ease-out duration-500 origin-top-right ">
          {activeType.images}​
        </div>
      </div>
    </Container>
  );
}

const gridWrapper = ctl(`
grid
grid-cols-6
m-0
gap-4
`);

const imgClassWrapper1 = ctl(`
col-start-1
col-end-7
`);

const imgClassWrapper2 = ctl(`
col-start-1 
col-end-3
`);

const imgClassWrapper3 = ctl(`
col-end-7 
col-span-4 
shadow-md 
rounded-md
`);

const imgClass = ctl(`
scroll-smooth
shadow-md 
rounded-l-md 
w-full 
h-full
`);

const wrapperFeature = ctl(`
relative
mt-16
md:mb-[150px]
justify-start
text-left
`);
export { BusinessTypes };
