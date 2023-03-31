import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext } from "components";
import { SectionWrapper } from "../components";
import { FirstLevel, SecondLevel, ThirdLevel } from "./image-layers";

export function StartSellingOnTheGo() {

  const items = [
    {
      text: "Start selling on the go",
      images: <FirstLevel />
    },
    {
      text: "Over 150,000 small businesses in Nigeria use Nomba",
      images: <SecondLevel />
    }, {
      text: "Optimize all sides of your business with the new Nomba Pro",
      images: <ThirdLevel />
    },

  ]

  const [selectedItem, setSelectedItem] = useState(items[1]);
  return (
    <div className="bg-[#FFFDF2]">
      <SectionWrapper className={sectionContainer}>
        <div className={textSection}>
          {items.map((item, index) => (
            <TextItem
              text={item.text}
              key={item.text}
              className={index % 2 === 0 && "hidden md:flex"}
              color={selectedItem.text === item.text ? "c-0" : "c-faint"}
              onMouseOver={() => setSelectedItem(item)}
            />
          ))}
        </div>
        <div>
          {selectedItem.images}
        </div>
      </SectionWrapper>
    </div>
  );
}

const sectionContainer = ctl(`
flex
flex-col
md:flex-row
md:items-center
justify-initial
md:justify-between
gap-[54px]
md:h-[917px]
pt-[100px]
`);

const textSection = ctl(`
flex
flex-col
justify-between
md:h-[573px]
`);

const TextItem = ({ text, color, className, ...props }) => {
  return (
    <div
      className={`${textContainer} ${className}`}
      {...props}
    >
      <Ntext
        variant="text6"
        color={color}
        weight={600}
      >
        {text}
      </Ntext>
    </div>
  );
};

const textContainer = ctl(`
md:max-w-[490px]
text-center
md:text-left
cursor-pointer
`);
