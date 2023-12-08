import React, { useState } from "react";
import ctl from "@netlify/classnames-template-literals";

import { Container, Ntext, CodeBlock } from "components";
import { apiDocsSection } from "config/payment-checkout";
import { useToast } from "@chakra-ui/react";

const { title, description, docs } = apiDocsSection;

const CheckoutApiDocs = () => {
  const [languageIndex, setLanguageIndex] = useState(0);

  const toast = useToast();

  return (
    <section className="bg-n-smoky overflow-hidden pt-[200px] pb-[156px]">
      <Container>
        <div className="md:max-w-[819px] md:mx-auto section_header1 text-center">
          <Ntext
            value={title}
            color="primary-100"
            className="!font-normal md:text-center md:!text-[56px] md:!leading-[64px] -tracking-[2px]"
            variant="h2"
          />
          <Ntext
            value={description}
            color="primary-600"
            className="md:!leading-[32px] !-tracking-[0.8px] md:px-5 mt-[32px]"
            variant="text4lite"
          />
        </div>
        <div className={codeSection}>
          <div className="py-3 px-3 md:px-9 border-b border-n-grey5 md:py-6 flex flex-row justify-between">
            <div className="flex gap-1 md:gap-[10px]">
              {
                docs.map((doc, i) => (
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
                navigator.clipboard.writeText(docs[languageIndex].snippet);
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
              language={docs[languageIndex].language}
              code={docs[languageIndex].snippet}
              className="!bg-transparent"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

const activeLangStyle = ctl(`
  bg-[#3838387A]
  border-n-grey5
  rounded-[10px]
  border
`);

const codeSection = ctl(`
  overflow-hidden
  rounded-[20px]
  border-n-grey5
  mt-[50px]
  w-[100%]
  border
`);

const langStyle = ctl(`
  leading-[30px]
  cursor-pointer
  text-[20px]
  text-white
  font-mono
  md:px-5
  md:py-3
  px-4
  py-2
`);

export { CheckoutApiDocs };
