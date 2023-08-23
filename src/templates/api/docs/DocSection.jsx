import React, { useState } from "react";
import { Container, Ntext } from "components";
import { CodeBlock } from "components/code-block/code";
import ctl from "@netlify/classnames-template-literals";

const DocSection = ({ title, description, data }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [languageIndex, setLanguageIndex] = useState(1);

  return (
    <section className="bg-[#38383874] py-20 ">
      <Container>
        <div className="md:max-w-[819px] md:mx-auto section_header1 text-center mt-12 md:mt-20">
          <Ntext variant="h2" className="md:text-center" color="primary-100">
            {title}
          </Ntext>
          <Ntext variant="text3" className="md:px-5 mt-[28px]" color="primary-500">
            {description}
          </Ntext>
          <div className="flex md:justify-center justify-between gap-10 mt-10 md:mt-[50px]">
            {data.map((type, i) => (
              <div
                key={type.slug}
                onClick={() => setCategoryIndex(i)}
                className="flex flex-col items-center min-w-[120px] md:min-w-[175px] gap-[10px] "
              >
                <div className="p-3 border border-n-grey6 rounded-md">
                  {categoryIndex == i ? type.icon_active : type.icon}
                </div>
                <Ntext variant="text4lite" className="md:text-center" color="primary-100">
                  {type.name}
                </Ntext>
              </div>
            ))}
          </div>
        </div>

        <div className={codeSection}>
          <div className=" p-5 md:px-9 md:py-6 flex gap-[10px] border-b border-n-grey5">
            {data[categoryIndex].docs.map((doc, i) => (
              <div
                className={`${langStyle} ${languageIndex == i ? activeLangStyle : ""}`}
                onClick={() => setLanguageIndex(i)}
              >
                {doc.label}
              </div>
            ))}
          </div>
          <div className=" md:p-8  p-2  h-[450px] md:h-[650px] overflow-y-scroll">
            <CodeBlock
              language={data[categoryIndex].docs[languageIndex].language}
              code={data[categoryIndex].docs[languageIndex].snippet}
              className=" !bg-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

const codeSection = ctl(`
w-[100%] 
rounded-[20px] 
border 
border-n-grey5 
overflow-hidden
`);

const langStyle = ctl(`
  px-5 
  py-3 
  text-white 
  text-[20px] 
  leading-[30px] 
  font-mono 
  cursor-pointer
`);

const activeLangStyle = ctl(`
  bg-[#3838387A] 
  border 
  border-n-grey5 
  rounded-[10px]
`);
export { DocSection };
