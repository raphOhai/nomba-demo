import React from "react";
import PropTypes from "prop-types";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, SectionHeader, Container } from "components";
import { useState } from "react";
const AnyTypeOfBusiness = ({ title, data }) => {
  const [activeSolution, setActiveSolution] = useState(data[0]);
  return (
    <Container className="bg-white">
      <div className={businessWrapperStyle}>
        <SectionHeader className="!text-left">
          <Ntext variant="h2">{title}</Ntext>
        </SectionHeader>
        <div className="w-full bg-white pb-12 ">
          <div className="mt-2">
            <div className="">
              <div className={tabMenuWrapper}>
                {data.map((s, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveSolution(s)}
                    className={`${buttonTabStyle} ${isActive(s.title, activeSolution.title)}`}
                  >
                    {s.title}
                  </div>
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
          <Ntext value={data.description} variant="p18" className="mt-4 max-w-[533px]" color="n-grey6" />
          <Ntext value={data.respondent} variant="text2" className="font-semibold" />
        </div>
        {data.images}
      </SectionHeader>
    </div>
  );
};

const isActive = (a, b) => (a === b ? ctl(`!border-b-4 !border-n-yellow`) : ctl(`text-n-grey7`));

const businessWrapperStyle = ctl(`
md:pb-20
pb-16
`);

const buttonTabStyle = ctl(`
text-gray-900
whitespace-nowrap
cursor-pointer
px-1 py-4 
text-base
font-normal
transition-all
duration-300
`);

const tabMenuWrapper = ctl(`
-mb-px flex gap-12 border-gray-5 items-start flex-nowrap scrollbar-hide overflow-auto border-b  justify-start
`);

const sectionHeadeWrapper = ctl(`
!text-left gap-4 md:gap-6 flex flex-col-reverse md:flex-row md:items-center transition-all durration-300
`);

const textSectionWrapper = ctl(`
flex flex-col md:h-[345px] justify-between xl:gap-10 lg:gap-7 md:gap-5 gap-4 basis-1/2
`);
TabBody.propTypes = {
  body: PropTypes.object,
};

AnyTypeOfBusiness.propTypes = {
  title: PropTypes.node,
  data: PropTypes.object,
};
export { AnyTypeOfBusiness };
