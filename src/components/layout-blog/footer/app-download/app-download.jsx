import React from "react";
import ctl from "@netlify/classnames-template-literals";
import { Ntext, Container, Br } from "components";
import AppStore from "svgs/apple.svg";
import PlayStore from "svgs/playStore.svg";
import SubFooterLeft from "svgs/subfooter-left.svg";
import { DownloadButton } from "./download-button";

const AppDownload = () => {
  return (
    <div className={pageWrapperStyle}>
      <SubFooterLeft className={subFooterLeftImage} />

      <Container>
        <div className={pageInnerWrapStyle}>
          <div className={textWrapStyle}>
            <Ntext variant="h2" color="primary-100" className={headingStyle}>
              Get a free <span className="text-secondary">Nomba</span>
              <Br on="mobile" /> account
            </Ntext>

            <Ntext
              variant="h5"
              color="primary-100"
              value="Change how you spend, manage and save money"
              className={subfooterParagraphStyle}
            />

            <div className={buttonWrapStyle}>
              <DownloadButton
                url="https://play.google.com/store/apps/details?id=ai.kudi.agent&hl=en&gl=US"
                trackingText="Download on Google Play"
              >
                <PlayStore /> Google Play
              </DownloadButton>
              <DownloadButton
                url="https://apps.apple.com/ng/app/nomba/id1625708506"
                trackingText="Download on App Store"
              >
                <AppStore /> App Store
              </DownloadButton>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
const pageWrapperStyle = ctl(`
  bg-primary 
  relative 
  overflow-hidden
`);
const pageInnerWrapStyle = ctl(`
  flex flex-col 
  lg:flex-row 
  items-center 
  justify-center 
  lg:pt-4 
`);
const textWrapStyle = ctl(`
  mt-[50px]
  lg:mt-[100px]
  text-center
`);
const subFooterLeftImage = ctl(`
  absolute 
  hidden
  md:block
  lg:-top-10 
  xl:-top-0 
`);
const headingStyle = ctl(`
  lg:flex gap-2
  justify-center
  text-center
  min-w-max

  lg:mt-0
`);
const subfooterParagraphStyle = ctl(`
  w-[240px] 
  md:w-[350px] 
  lg:w-auto 
  mx-auto 
  normal-case 
  font-normal
  pt-3 lg:pt-4
  leading-[180%]
`);
const buttonWrapStyle = ctl(`
  flex 
  lg:justify-center 
  justify-between 
  lg:gap-6 gap-5 
  mt-8 mb-4 lg:mb-0
`);

export { AppDownload };
