import ctl from "@netlify/classnames-template-literals";
import { NLink } from "components";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { SectionWrapper } from "../components";
import { nombaPro } from "../constants";

export function DownloadApp({
  link = nombaPro.googlePlayUrl,
  // appleStoreUrl = nombaPro.appleStoreUrl
}) {
  return (
    <div className="bg-n-grey6">
      <SectionWrapper className={sectionContainer}>
        <p className={downloadText}>
          Download the Nomba app{" "}
          <span className={otherText}>
            on your phone to get started for free today
          </span>
        </p>

        <div>
          <NLink href={link}>
            <StaticImage
              src={"../../../../assets/images/google-play-badge.png"}
              alt="google download button"
            />
          </NLink>
        </div>
      </SectionWrapper>
    </div>
  );
}

const sectionContainer = ctl(`
justify-between
bg-n-grey6
items-center
hidden
md:flex
`);

const otherText = ctl(`
text-n-grey2
`);

const downloadText = ctl(`
font-[700]
text-[20px]
leading-[30px]
text-n-light
`);
