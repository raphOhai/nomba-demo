import React, { useState } from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Container, Ntext } from "components";
import { accordionInfo as accordionList } from "config/accordion";
import { AccordionDetails } from "./accordion-details";

const Accordion = ({ heading, subheading }) => {
  const [currentItem, setCurrentItem] = useState(0);

  const toggleItem = index => {
    setCurrentItem(index);
  };

  return (
    <div className={containerStyle}>
      <Container>
        <div className={textWrapStyle}>
          <Ntext variant="h3" value={heading} className={headingStyle} />
          <Ntext variant="p18" className="pt-[27px]" value={subheading} />
        </div>

        <div className={accordionWrapStyle}>
          <div className="-mt-10">
            {accordionList.map((item, index) => (
              <button
                key={index}
                className={accordionItemWrapStyle}
                onClick={() => toggleItem(index)}
              >
                <AccordionDetails {...item} isCurrent={currentItem === index} />
              </button>
            ))}
          </div>

          {/* Images */}
          <div>
            {accordionList.map((item, i) => (
              <div key={i}>
                {currentItem === i && (
                  <div
                    className={imageStyle}
                    style={{
                      clipPath:
                        "polygon(0 0, 100% 0%, 100% 61%, 0 100%, 0% 50%)",
                    }}
                  >
                    {item.image}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

const containerStyle = ctl(`
  mt-20 
  lg:mb-40 
  lg:pb-28 
  bg-primary-200
`);
const accordionWrapStyle = ctl(`
  flex
  flex-col
  lg:flex-row-reverse
  justify-between  
`);
const textWrapStyle = ctl(`
  pt-[80px] 
  lg:pb-[70px] 
  pb-[59px] 
  text-center
`);
const imageStyle = ctl(`
  md:h-[688px]
  xl:w-[654px]
  lg:w-[480px]
  h-[400px]
  mt-10
  lg:mt-0
  lg:absolute
`);
const accordionItemWrapStyle = ctl(`
  flex 
  items-start 
  text-left w-full
`);
const headingStyle = ctl(`
  lg:max-w-auto
  sm:max-w-[60%]
  max-w-[300px]
  mx-auto
`);

Accordion.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export { Accordion };
