import React, { useState } from "react";
import { Container, Ntext, CodeBlock } from "components";
import ctl from "@netlify/classnames-template-literals";
import { useToast } from "@chakra-ui/react";

const CheckoutApiDocs = ({ title, description, data }) => {
  const [languageIndex, setLanguageIndex] = useState(0);

  const toast = useToast();

  return (
    <section className="bg-n-smoky py-20 overflow-hidden">
      <Container>
        <div className="md:max-w-[819px] md:mx-auto section_header1 text-center  mt-20">
          <Ntext
            value={title}
            color="primary-100"
            className="!font-normal md:text-center md:!text-[56px] md:!leading-[64px] -tracking-[2px]"
            variant="h2"
          />
          <Ntext
            value={description}
            color="primary-500"
            className="md:px-5 mt-[28px]"
            variant="text3"
          />
        </div>

        <div className={codeSection}>
          <div className="py-3 px-3 md:px-9 border-b border-n-grey5 md:py-6 flex flex-row justify-between">
            <div className="flex gap-1 md:gap-[10px]">
              {
                data.map((doc, i) => (
                  <div
                    className={`${langStyle} ${languageIndex == i ? activeLangStyle : ""}`}
                    onClick={() => setLanguageIndex(i)}>
                    {doc.label}
                  </div>
                ))
              }
            </div>

            <div
              onClick={() => {
                navigator.clipboard.writeText(data[languageIndex].snippet);
                toast({
                  position: "top-right",
                  title: "Copied!",
                  status: "success",
                  duration: 9000,
                  isClosable: true,
                });
              }}
              className={`${langStyle} flex gap-1 md:gap-[10px] justify-center items-center  border border-[#555] rounded-[10px]`}>
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
          <div className="md:p-8 p-2 h-[450px] md:h-[650px] overflow-y-scroll scrollbar-hide">
            <CodeBlock
              language={data[languageIndex].language}
              code={data[languageIndex].snippet}
              className="!bg-transparent"
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
  mt-[50px]
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

export { CheckoutApiDocs };
