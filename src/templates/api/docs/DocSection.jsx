import React, { useState } from "react";
import { Container, Ntext, CodeBlock } from "components";
import ctl from "@netlify/classnames-template-literals";
import { useToast } from "@chakra-ui/react";

const DocSection = ({ title, description, data }) => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const [languageIndex, setLanguageIndex] = useState(1);

  const toast = useToast();

  return (
    <section className="bg-[#38383874] py-20 overflow-hidden">
      <Container>
        <div className="md:max-w-[819px] md:mx-auto section_header1 text-center  mt-20">
          <Ntext variant="h2" className="md:text-center" color="primary-100">
            {title}
          </Ntext>
          <Ntext variant="text3" className="md:px-5 mt-[28px]" color="primary-500">
            {description}
          </Ntext>
          <div className="flex justify-center  md:gap-10 gap-4 mt-10 md:mt-[50px]">
            {data.map((type, i) => (
              <div
                key={type.slug}
                onClick={() => (i !== 2 ? setCategoryIndex(i) : null)}
                className={`flex flex-col items-center min-w-[100px] md:min-w-[175px] gap-[10px] ${
                  i == 2 ? "cursor-not-allowed" : ""
                }`}
                title={i == 2 ? "Coming soon" : type.name}
              >
                <div className="md:p-3 p-2 border border-n-grey6 rounded-md">
                  {categoryIndex == i ? type.icon_active : type.icon}
                </div>
                <Ntext
                  variant="text3"
                  className="md:text-center !font-mono whitespace-nowrap"
                  color={`${categoryIndex == i ? "primary-100" : "m-grey1"}`}
                >
                  {type.name}
                </Ntext>
              </div>
            ))}
          </div>
        </div>

        <div className={codeSection}>
          <div className="py-3 px-1 md:px-9 border-b border-n-grey5 md:py-6 flex flex-row justify-between">
            <div className="  flex gap-1 md:gap-[10px] ">
              {data[categoryIndex].docs.map((doc, i) => (
                <div
                  className={`${langStyle} ${languageIndex == i ? activeLangStyle : ""}`}
                  onClick={() => setLanguageIndex(i)}
                >
                  {doc.label}
                </div>
              ))}
            </div>

            <div
              onClick={() => {
                navigator.clipboard.writeText(data[categoryIndex].docs[languageIndex].snippet);
                toast({
                  position: "top-right",
                  title: "Copied!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
              className={`${langStyle} flex gap-1 md:gap-[10px] justify-center items-center  border border-[#555] rounded-[10px]`}
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15.3 15.3V22H2V8.7H8.7M15.3 15.3H22V2H8.7V8.7M15.3 15.3V8.7H8.7"
                    stroke="white"
                    stroke-miterlimit="10"
                    stroke-linecap="square"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span className="hidden md:block">COPY</span>
            </div>
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
  md:px-5 
  md:py-3 
  px-4
  py-2
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
