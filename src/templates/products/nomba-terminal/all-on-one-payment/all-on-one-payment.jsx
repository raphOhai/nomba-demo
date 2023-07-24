import ctl from "@netlify/classnames-template-literals";
import { Br } from "components";
import React from "react";
import { AllOnOneCard, SectionHeader, SectionWrapper } from "../components";
import { image1, image2, image3, image4 } from "./card-info/images";

export function AllOnOnePayment() {
  return (
    <SectionWrapper className={container}>
      {/* header */}
      <SectionHeader
        className="mb-[50px] md:mb-[100px]"
        header={
          <>
            All-in-one payment solution <Br on="all" />
            tailored for you
          </>
        }
      />

      {/* card section */}
      <div className={cardSection}>
        <div className={`${scroller} scroller`}>
          {/* card list */}
          <AllOnOneCard bgImage="bg-card-bg-1" image={<img src={image1} alt="wifi-4g" className={imageContainer} />} />
          <AllOnOneCard
            bgImage="bg-card-bg-2"
            alternate={true}
            mainText="Full day battery life"
            image={<img src={image2} alt="fullday" className={imageContainer} />}
          />
          <AllOnOneCard
            bgImage="bg-card-bg-1"
            mainText="Send receipts to customers"
            image={<img src={image3} alt="sends-receipt" className={imageContainer} />}
          />
          <AllOnOneCard
            bgImage="bg-card-bg-2"
            alternate={true}
            mainText="Pay your bills instantly"
            image={<img src={image4} alt="pay-bills-instantly" className={imageContainer} />}
          />
        </div>
      </div>
    </SectionWrapper>
  );
}

const imageContainer = ctl(`
!rounded-full
w-[128px]
h-[128px]
md:w-[200px]
md:h-[200px]
flex
items-baseline
`);

const container = ctl(`
pt-[100px]
pb-[100px]
mb-[75px]
md:mb-[406px]
`);

const cardSection = ctl(`
md:mb-[116px]
mb-[200px]
`);

const scroller = ctl(`
absolute
flex
flex-row
md:pl-[0%]
pl-[3%]
pr-[3%]
pb-[20px]
md:pb-[34px]
gap-[25px]
md:gap-[50px]
max-w-[100%]
md:max-w-[1318px]
right-[0]
overflow-x-scroll
`);
