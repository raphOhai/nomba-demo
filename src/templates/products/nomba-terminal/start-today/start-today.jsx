import React from "react";
import { Br, Button, Ntext } from "components";
import { SectionHeader } from "../components";
import ctl from "@netlify/classnames-template-literals";
import { StaticImage } from "gatsby-plugin-image";
import { SectionWrapper } from "../components";
import { nombaPro } from "../constants";

export function StartToday({ link = { href: { url: nombaPro.dashdboardUrl } } }) {
  return (
    <div className="bg-[#fafafa]">
      <SectionWrapper className={sectionWrapper}>
        <SectionHeader
          className="mb-[30px]"
          header={
            <>
              Start today, grow your <Br on="all" />
              business faster and smarter
            </>
          }
        />
        <Ntext variant="text3" color="n-grey5" className="text-center mb-[30px]">
          Track growth effortlessly. Make or receive money transfers easily via the Nomba Pro terminal
        </Ntext>
        <div className="flex justify-center md:mb-[95px] mb-[99px]">
          <Button {...link} text={nombaPro.orderText} size="medium" />
        </div>
        <div className="justify-center items-center flex">
          <StaticImage src="../../../../assets/images/pro-horizontal-list.png" alt="terminal horizontal images" />
        </div>
      </SectionWrapper>
    </div>
  );
}

// pl-[120px]
// pr-[120px]
const sectionWrapper = ctl(`
flex
justify-center
flex-col
pt-[100px]
`);
