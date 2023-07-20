import React, { useEffect, useRef, useState } from "react";
import Layout from "components/layout-max";
import { Br } from "components";
import {
  MaxpageHero,
  TerminalSectionInteractions,
  MaxFeatures,
  ExperienceMax,
  MaxBusinessTypes,
  GetMax,
  WhatsInTheBox,
  MaxPricing,
} from "templates/max";
import { split } from "animations/text";
import { AccordionData, InTheBox } from "config/terminal";
import { CommonQuestions } from "components/common-questions";
import { Button, useDisclosure } from "@chakra-ui/react";
import { Cart } from "components/checkout";
const MaxPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  // const
  useEffect(() => {
    split();
  });
  return (
    <Layout title="Max">
      <div>
        <Button ref={btnRef} colorScheme="yellow" position="fixed " onClick={onOpen}>
          Open
        </Button>
        <Cart isOpen={isOpen} onClose={onClose} finalFocusRef={btnRef} />
      </div>
      <MaxpageHero
        title={
          <>
            {" "}
            Switch to the MAX, <Br on="all" /> experience more than payments!
          </>
        }
        description="Get Nomba MAX, the all-in-one business solution that offers more than just payment processing."
      />
      <TerminalSectionInteractions />
      <MaxFeatures
        title={
          <>
            Unlike any POS you’ve <Br on="all" /> used before
          </>
        }
        description={
          <>
            Comprised of the best features to give you an efficient and seamless <Br on="desktop" /> performance.
          </>
        }
      />

      <ExperienceMax
        title={
          <>
            Experience the MAX in your <Br on="desktop" /> payment collection
          </>
        }
        description="Designed to the last pixel to give you the max performance - faster transaction, long lasting battery, high speed printer, durable and reliable POS terminal."
      />
      <MaxBusinessTypes title="What Businesses Like Yours Think of Nomba MAX." />
      <WhatsInTheBox title="What’s in the box?" InTheBox={InTheBox} />
      <MaxPricing title="Pricing & Specifications" price="₦85,000" leasePrice="₦45,000" />
      <CommonQuestions questions={AccordionData} />

      <GetMax
        title={<>Get Nomba Max, Get Better</>}
        description={<>For better performance and smoother payment experience, Nomba MAX is here for you.</>}
      />
    </Layout>
  );
};

export default MaxPage;
