import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Br, Ntext, SectionHeader, Container } from "components";
import { useState } from "react";
import { smallBusinesSolutions } from "config/small-business";
const AnyTypeOfBusiness = () => {
  const [activeSolution, setActiveSolution] = useState(
    smallBusinesSolutions[0]
  );
  return (
    <Container className="bg-white">
      <div className={businessWrapperStyle}>
        <SectionHeader className="!text-left">
          <Ntext variant="h3">
            Solution built for any type
            <Br on="desktop" />
            of business model
          </Ntext>
        </SectionHeader>
        <div className="w-full bg-white pb-12 ">
          <div className="mt-2">
            <div className="">
              <div className={tabMenuWrapper}>
                {smallBusinesSolutions.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSolution(s)}
                    className={`${buttonTabStyle} ${isActive(
                      s.title,
                      activeSolution.title
                    )}`}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
              <TabBody data={activeSolution} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

const TabBody = ({ data }) => {
  return (
    <div>
      <SectionHeader className={sectionHeadeWrapper}>
        <div className={textSectionWrapper}>
          <Ntext variant="text6" color="primary">
            {data.headline}
          </Ntext>
          <Ntext
            value={data.description}
            variant="p18"
            className="mt-4 max-w-[533px]"
            color="n-grey6"
          />
          <Ntext
            value={data.respondent}
            variant="text2"
            className="font-semibold"
          />
        </div>
        {data.images}
      </SectionHeader>
    </div>
  );
};

const isActive = (a, b) =>
  a === b ? ctl(`border-b-4 border-n-yellow`) : ctl(``);

const businessWrapperStyle = ctl(`
md:pb-20
pb-16
`);

const buttonTabStyle = ctl(`
text-gray-900
whitespace-nowrap
px-1 py-4 
text-base
font-medium
`);

const tabMenuWrapper = ctl(`
-mb-px flex gap-12 border-gray-5 items-start flex-nowrap scrollbar-hide overflow-auto border-b  justify-start
`);

const sectionHeadeWrapper = ctl(`
!text-left gap-4 md:gap-6 flex flex-col-reverse md:flex-row md:items-center
`);

const textSectionWrapper = ctl(`
flex flex-col md:h-[345px] justify-between xl:gap-10 lg:gap-7 md:gap-5 gap-4 basis-1/2
`);
TabBody.propTypes = {
  body: PropTypes.object,
};
export { AnyTypeOfBusiness };
