import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, ReadMore, Container, SectionHeader } from "components";
import Add from "svgs/n-icons/add.svg";
import Minus from "svgs/n-icons/minus.svg";
import { businessTypesData } from "config/home";
import { useState } from "react";

function BusinessTypes() {
  const [activeType, setActiveType] = useState(businessTypesData[0]);
  return (
    <Container className={wrapperFeature}>
      <SectionHeader className="!text-left">
        <Ntext variant="h2">
          Built to simplify any <Br on="mobile" /> business <Br on="desktop" />
          type and size
        </Ntext>
      </SectionHeader>
      <div className="md:flex hidden flex-row justify-between ">
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
              {/* sub text */}
              <div className="mt-4">
                <Ntext
                  variant="text4lite"
                  className="cursor-pointer"
                  color={b === activeType ? "primary-900" : "n-grey3"}
                >
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

      <div className="block md:hidden">
        <BusinessTypeMobile types={businessTypesData} />
      </div>
    </Container>
  );
}
function ItemType({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <li className="py-5 border-b border-n-grey1">
      <div className=" flex flex-row justify-between cursor-pointer items-center" onClick={toggleOpen}>
        <Ntext variant="text5" color="n-dark">
          {" "}
          {data.title}{" "}
        </Ntext>
        {isOpen ? <Minus /> : <Add />}
      </div>
      <div className={`transition-all duration-500 ease-out ${isOpen ? "" : "hidden"}`}>
        <div className="mt-5">{data.images}</div>
        <div className="mt-4">
          <Ntext variant="text4lite" className="c-0 cursor-pointer">
            {data.description}
          </Ntext>
        </div>
      </div>
    </li>
  );
}

function BusinessTypeMobile({ types }) {
  return (
    <ul className="s">
      {types.map((item, index) => (
        <ItemType key={index} data={item} />
      ))}
    </ul>
  );
}

const wrapperFeature = ctl(`
relative
mb-[100px]
md:mb-[150px]
justify-start
text-left
`);
export { BusinessTypes };
