import ctl from "@netlify/classnames-template-literals";
import { Ntext, Br, Button } from "components";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SectionWrapper } from "../components";
import { nombaPro } from "../constants";

export function NeverLoseASale({
  link = { href: { url: nombaPro.dashdboardUrl } },
}) {
  return (
    <div className="bg-n-dark">
      <SectionWrapper className={sectionContainer}>
        <div className={innerWrapper}>
          <div className={textSection}>
            <Ntext
              variant="h2"
              color="n-light"
              className="mb-[30px]"
            >
              <>
                Never lose a sale with the <Br on="all" />
                Nomba Pro Terminal
              </>
            </Ntext>
            <div>
              <Button text={nombaPro.orderText} size="medium" {...link} />
            </div>
          </div>
          <div className={imageSection}>
            <StaticImage
              src={"../../../../assets/images/nomba-terminal-5.png"}
              height={430}
              width={427}
              alt=""
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}

const textSection = ctl(`
flex
flex-col
text-center
md:text-left
mb-[100px]
md:mb-0
`);

const imageSection = ctl(`
`);

const innerWrapper = ctl(`
flex
items-center
justify-between
h-[100%]
w-[100%]
flex-col
md:flex-row

`);

const sectionContainer = ctl(`
bg-n-dark
md:h-[462px]
flex
pt-[100px]
md:pt-[32px]
`);
